import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getPostById, getLatestPosts } from '@/lib/blogData';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import PostHeader from '@/components/blog/PostHeader';
import PostContent from '@/components/blog/PostContent';
import PostFooter from '@/components/blog/PostFooter';
import { Skeleton } from '@/components/ui/skeleton';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const BlogPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const postUrl = `https://consultgloballex.com${location.pathname}`;

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const fetchedPost = await getPostById(postId);
      
      if (fetchedPost) {
        setPost(fetchedPost);
        const latestPosts = await getLatestPosts(4);
        setRelatedPosts(latestPosts.filter(p => p.id !== fetchedPost.id).slice(0, 3));
      } else {
        navigate('/blog');
      }
      setIsLoading(false);
    };

    loadData();
    window.scrollTo(0, 0);
  }, [postId, navigate]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const renderSkeleton = () => (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
       <Skeleton className="h-8 w-32 mb-8" />
       <header className="mb-10 border-b pb-8 border-gray-200 dark:border-gray-700">
           <div className="flex flex-wrap gap-2 mb-4">
               <Skeleton className="h-6 w-20 rounded-full" />
               <Skeleton className="h-6 w-24 rounded-full" />
           </div>
           <Skeleton className="h-10 md:h-12 lg:h-14 w-full mb-5" />
           <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
               <Skeleton className="h-5 w-48" />
               <Skeleton className="h-5 w-32" />
           </div>
       </header>
       <div className="prose prose-lg dark:prose-invert max-w-none">
           <Skeleton className="h-6 w-full mb-4" />
           <Skeleton className="h-6 w-full mb-4" />
           <Skeleton className="h-6 w-5/6 mb-4" />
           <Skeleton className="h-48 w-full my-8" />
           <Skeleton className="h-6 w-full mb-4" />
           <Skeleton className="h-6 w-full mb-4" />
           <Skeleton className="h-6 w-full mb-4" />
           <Skeleton className="h-6 w-3/4 mb-4" />
       </div>
    </div>
  );

  if (isLoading) {
    return renderSkeleton();
  }

  if (!post) {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20 text-center">
            <h1 className="text-2xl font-semibold">Artículo no encontrado</h1>
            <p className="text-muted-foreground mt-2">El artículo que buscas no existe o ha sido movido.</p>
            <Button onClick={() => navigate('/blog')} className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Blog
            </Button>
        </div>
    );
  }

  const breadcrumbItems = [
    { label: "Blog", path: "/blog" },
    { label: post.title.substring(0, 40) + '...', path: `/blog/${post.id}` }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image_url,
    "author": {
      "@type": "Organization",
      "name": "ConsultGlobalLex"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ConsultGlobalLex",
      "logo": {
        "@type": "ImageObject",
        "url": "https://storage.googleapis.com/hostinger-horizons-assets-prod/1fcadb24-6860-4e02-b4aa-2babb26f382a/f0a2c30b04963369f3ef2b6994754f67.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white dark:bg-gradient-to-b dark:from-background dark:to-gray-900/50"
    >
      <Helmet>
        <title>{`${post.title} | ConsultGlobalLex`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:title" content={`${post.title} | ConsultGlobalLex`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={post.image_url} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="ConsultGlobalLex" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-4 pt-12 md:pt-20 pb-16">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <article>
            <PostHeader title={post.title} date={post.date} author={post.author} tags={post.tags} />

            {post.image_url && (
              <div className="my-8 md:my-12 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={post.image_url}
                  alt={post.image_alt || `Imagen principal para ${post.title}`}
                  className="w-full h-auto object-cover"
                  width="896"
                  height="504"
                />
              </div>
            )}

            <PostContent htmlContent={post.content} />

            <PostFooter postUrl={postUrl} postTitle={post.title} />
          </article>

          {relatedPosts.length > 0 && (
            <section className="mt-16 md:mt-24 pt-12 border-t dark:border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                También te puede interesar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-primary/20 border dark:border-gray-700">
                    {relatedPost.image_url && (
                       <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedPost.image_url}
                            alt={relatedPost.image_alt || `Imagen para ${relatedPost.title}`}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            loading="lazy"
                            width="400"
                            height="225"
                          />
                        </div>
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold leading-tight hover:text-primary dark:hover:text-primary transition-colors">
                        <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                     <CardFooter className="text-xs text-gray-500 dark:text-gray-400 border-t pt-3 dark:border-gray-700">
                       <Link to={`/blog/${relatedPost.id}`} className="flex items-center text-primary hover:text-primary/80 font-medium transition-colors w-full justify-end">
                          Leer más <ArrowRight className="h-3 w-3 ml-1" />
                       </Link>
                     </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;