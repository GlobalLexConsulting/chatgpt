import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabaseClient';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const getFormSchema = (t) => z.object({
    nombre: z.string().min(2, { message: t('work_in_germany.form.validation.name_required') }),
    email: z.string().email({ message: t('work_in_germany.form.validation.email_invalid') }),
    telefono: z.string().min(9, { message: t('work_in_germany.form.validation.phone_required') }),
    sector: z.string({ required_error: t('work_in_germany.form.validation.sector_required') }),
    documento: z.string({ required_error: t('work_in_germany.form.validation.document_required') }),
    cv: z.instanceof(FileList)
        .refine(files => files?.length === 1, t('work_in_germany.form.validation.cv_required'))
        .refine(files => files?.[0]?.size <= 5 * 1024 * 1024, t('work_in_germany.form.validation.cv_size'))
        .refine(files => files?.[0]?.type === 'application/pdf', t('work_in_germany.form.validation.cv_type')),
});

const WorkInGermanyForm = () => {
    const { t } = useTranslation();
    const formSchema = getFormSchema(t);

    const { register, handleSubmit, control, formState: { errors, touchedFields }, reset, watch } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onTouched'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const watchedFields = watch();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const { cv, ...formData } = data;
        const cvFile = cv[0];

        try {
            const reader = new FileReader();
            reader.readAsDataURL(cvFile);
            reader.onloadend = async () => {
                const base64CV = reader.result.split(',')[1];
                
                const { error: functionError } = await supabase.functions.invoke('send-candidate-email', {
                    body: JSON.stringify({
                        ...formData,
                        cv: {
                            name: cvFile.name,
                            content: base64CV,
                            type: cvFile.type
                        }
                    }),
                });

                if (functionError) throw functionError;

                toast({
                    variant: 'success',
                    title: t('work_in_germany.form.toast_success_title'),
                    description: t('work_in_germany.form.toast_success_desc'),
                });
                reset();
            };
            reader.onerror = () => { throw new Error("Error al leer el archivo del CV."); };
        } catch (error) {
            console.error('Error submitting application:', error);
            toast({
                variant: 'destructive',
                title: t('work_in_germany.form.toast_error_title'),
                description: t('work_in_germany.form.toast_error_desc'),
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const sectorOptions = t('work_in_germany.form.sector_options', { returnObjects: true });

    const getInputClass = (fieldName) => {
        if (errors[fieldName]) return 'border-destructive focus-visible:ring-destructive';
        if (touchedFields[fieldName] && !errors[fieldName]) return 'border-green-500 focus-visible:ring-green-500';
        return '';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 relative">
                    <Label htmlFor="nombre">{t('work_in_germany.form.name_label')}</Label>
                    <Input id="nombre" {...register('nombre')} disabled={isSubmitting} className={cn(getInputClass('nombre'), 'pr-10')} />
                    {touchedFields.nombre && !errors.nombre && <CheckCircle className="absolute right-3 top-9 h-5 w-5 text-green-500" />}
                    {errors.nombre && <AlertCircle className="absolute right-3 top-9 h-5 w-5 text-destructive" />}
                    {errors.nombre && <p className="text-destructive text-sm mt-1">{errors.nombre.message}</p>}
                </div>
                 <div className="space-y-2 relative">
                    <Label htmlFor="email">{t('work_in_germany.form.email_label')}</Label>
                    <Input id="email" type="email" {...register('email')} disabled={isSubmitting} className={cn(getInputClass('email'), 'pr-10')} />
                    {touchedFields.email && !errors.email && <CheckCircle className="absolute right-3 top-9 h-5 w-5 text-green-500" />}
                    {errors.email && <AlertCircle className="absolute right-3 top-9 h-5 w-5 text-destructive" />}
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div className="space-y-2 relative">
                <Label htmlFor="telefono">{t('work_in_germany.form.phone_label')}</Label>
                <Input id="telefono" type="tel" {...register('telefono')} disabled={isSubmitting} className={cn(getInputClass('telefono'), 'pr-10')} />
                {touchedFields.telefono && !errors.telefono && <CheckCircle className="absolute right-3 top-9 h-5 w-5 text-green-500" />}
                {errors.telefono && <AlertCircle className="absolute right-3 top-9 h-5 w-5 text-destructive" />}
                {errors.telefono && <p className="text-destructive text-sm mt-1">{errors.telefono.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="sector">{t('work_in_germany.form.sector_label')}</Label>
                     <Select onValueChange={(value) => register('sector').onChange({ target: { value } })} name="sector" disabled={isSubmitting} value={watchedFields.sector || ""}>
                        <SelectTrigger id="sector" className={cn(getInputClass('sector'))}>
                            <SelectValue placeholder={t('work_in_germany.form.sector_placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            {sectorOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    {errors.sector && <p className="text-destructive text-sm mt-1">{errors.sector.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="documento">{t('work_in_germany.form.document_label')}</Label>
                     <Select onValueChange={(value) => register('documento').onChange({ target: { value } })} name="documento" disabled={isSubmitting} value={watchedFields.documento || ""}>
                        <SelectTrigger id="documento" className={cn(getInputClass('documento'))}>
                            <SelectValue placeholder={t('work_in_germany.form.document_placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Sí">{t('work_in_germany.form.document_yes')}</SelectItem>
                            <SelectItem value="No">{t('work_in_germany.form.document_no')}</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.documento && <p className="text-destructive text-sm mt-1">{errors.documento.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="cv">{t('work_in_germany.form.cv_label')}</Label>
                <Input id="cv" type="file" accept=".pdf" {...register('cv')} disabled={isSubmitting} className={cn(getInputClass('cv'))} />
                {errors.cv && <p className="text-destructive text-sm mt-1">{errors.cv.message}</p>}
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('work_in_germany.form.gdpr_notice')}</p>

            <Button type="submit" className="w-full btn-persuasive" size="lg" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> {t('work_in_germany.form.submitting_button')}...</> : t('work_in_germany.form.submit_button')}
            </Button>
        </form>
    );
};

export default WorkInGermanyForm;