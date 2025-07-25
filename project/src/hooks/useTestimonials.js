import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTestimonials = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('testimonials')
        .select('id, name, title, content, rating, image_url')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

       const formattedData = data.map(item => ({
         id: item.id,
         name: item.name,
         title: item.title || 'Cliente Satisfecho',
         content: item.content,
         rating: item.rating || 5,
         image_url: item.image_url
       }));


      setTestimonials(formattedData);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setError(`Error al cargar testimonios: ${err.message}`);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  return { testimonials, loading, error, refetchTestimonials: fetchTestimonials };
};

export default useTestimonials;