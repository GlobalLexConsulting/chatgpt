import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag } from 'lucide-react';

const PostHeader = ({ title, date, author, tags }) => {
  return (
    <header className="mb-10 border-b pb-8 border-gray-200 dark:border-gray-700">
        {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                     <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="inline-block h-3 w-3 mr-1"/> {tag}
                    </Badge>
                ))}
            </div>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 text-gray-900 dark:text-white leading-tight">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            <span>Publicado el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2 text-primary" />
            <span>Por {author}</span>
          </div>
        </div>
      </header>
  );
};

export default PostHeader;