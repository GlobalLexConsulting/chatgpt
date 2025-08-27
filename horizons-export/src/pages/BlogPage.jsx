import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import BlogFilterControls from '@/components/blog/BlogFilterControls';
import BlogLoadingSkeleton from '@/components/blog/BlogLoadingSkeleton';
import BlogNoResults from '@/components/blog/BlogNoResults';
import { categories, fetchBlogPosts } from '@/lib/blogData';
import useBlogFilter from '@/hooks/useBlogFilter';
import { Button } from '@/components/ui/button';
import { FaFacebook } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const POSTS_PER_PAGE = 9;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setPosts([]);
      } finally {
         setIsLoading(false);
      }
    };
    loadPosts();
  }, []);

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
  } = useBlogFilter(posts);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [currentPage, filteredPosts]);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchTerm, selectedCategory]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

   const categoryLabel = useMemo(() => {
     return categories.find(c => c.value === selectedCategory)?.label || selectedCategory;
   }, [selectedCategory]);
   
   const handlePageChange = (page) => {
     setCurrentPage(page);
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };

  return (
    <>
      <Helmet>
        {currentPage > 1 && <link rel="prev" href={`https://consultgloballex.com/blog?page=${currentPage - 1}`} />}
        {currentPage < totalPages && <link rel="next" href={`https://consultgloballex.com/blog?page=${currentPage + 1}`} />}
      </Helmet>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50 dark:bg-background min-h-[70vh]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">Blog ConsultGlobalLex</h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Análisis técnico, guías prácticas y perspectivas sobre fiscalidad internacional, estructuración legal y cumplimiento global.
            </p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
             <BlogFilterControls
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
               selectedCategory={selectedCategory}
               setSelectedCategory={setSelectedCategory}
             />
          </motion.div>

          <div className="mt-8">
              {isLoading ? (
                   <BlogLoadingSkeleton />
              ) : paginatedPosts && paginatedPosts.length > 0 ? (
                  <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                  {paginatedPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                  ))}
                  </motion.div>
               ) : (
                   <BlogNoResults categoryLabel={categoryLabel} searchTerm={searchTerm} />
              )}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-16">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Página {currentPage} de {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Siguiente
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-blue-600/10 dark:bg-blue-900/20 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Únete a nuestra comunidad</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Conecta con otros nómadas digitales y emprendedores globales en nuestro grupo de Facebook.</p>
            <a href="https://www.facebook.com/ConsultGloballex/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <FaFacebook className="mr-2 h-5 w-5" /> Únete al Grupo de Nómadas
              </Button>
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default BlogPage;