import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const BlogCard = ({ post, variants }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const displayTags = Array.isArray(post.tags) ? post.tags.slice(0, 3) : [];

  return (
    <motion.div variants={variants} className="flex group">
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-primary/20 border dark:border-gray-800 bg-white dark:bg-card rounded-lg">
        {post.image_url && (
          <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              loading="lazy"
              width="400"
              height="225"
              alt={post.image_alt || `Imagen para ${post.title}`}
              src={post.image_url} />
          </Link>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {displayTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                <Tag className="inline-block h-3 w-3 mr-1"/> {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl font-semibold leading-tight text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors mb-3">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </CardTitle>
          <CardContent className="flex-grow p-0 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="p-0 mt-auto flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 border-t pt-4 dark:border-gray-700">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5 text-primary" />
              <span>{formattedDate}</span>
            </div>
            <Link
              to={`/blog/${post.id}`}
              className="flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              aria-label={`Leer más sobre ${post.title}`}
            >
              Leer más <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;