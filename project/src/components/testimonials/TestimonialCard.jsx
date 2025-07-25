import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getInitials = (name) => {
  if (!name) return '??';
  const names = name.split(' ');
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
};

const TestimonialCard = ({ testimonial }) => {
  const { t } = useTranslation('common');
  const { name, title, content, rating, image_url } = testimonial;
  const validRating = Math.max(1, Math.min(5, Math.round(rating || 5)));

  return (
    <motion.div variants={cardVariants}>
      <Card className="h-full flex flex-col bg-white dark:bg-card border dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center space-x-4 pb-4">
          <Avatar className="h-12 w-12 border-2 border-primary/50">
            {image_url ? (
              <AvatarImage src={image_url} alt={name} />
            ) : (
              <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                {getInitials(name)}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{name || t('testimonials.anonymous_user', 'Usuario Anónimo')}</CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">{title || t('testimonials.client', 'Cliente')}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-0">
          <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{content || t('testimonials.no_comment', 'Sin comentario.')}"</p>
          <div className="flex items-center space-x-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${index < validRating ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`}
              />
            ))}
             <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({validRating}/5)</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;