import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { getLatestPosts } from '@/lib/blogData';

const BlogPreview = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
        setIsLoading(true);
        try {
          const posts = await getLatestPosts(3);
          setLatestPosts(posts || []);
        } catch(error) {
           console.error("Error loading latest posts:", error);
           setLatestPosts([]);
        } finally {
           setIsLoading(false);
        }
    };
    loadPosts();
  }, []);

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  if (isLoading && latestPosts.length === 0) {
    return (
       <section className="py-20 lg:py-28 bg-white dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
            <div className="text-center py-10">
             <Loader2 className="h-8 w-8 animate-spin mx-auto text-gray-500 dark:text-gray-400" />
           </div>
        </div>
      </section>
    )
  }

  if (!isLoading && latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Desde Nuestro Blog</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Últimas Noticias y Análisis</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mantente al día con las tendencias y perspectivas clave del panorama internacional que impactan tus negocios y decisiones.
          </p>
        </motion.div>

        
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
        ))}
        </motion.div>
        

        {!isLoading && latestPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Link to="/blog">
                <Button size="lg" className="btn-persuasive group">
                  Ver Todos los Artículos
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />
                </Button>
              </Link>
            </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;