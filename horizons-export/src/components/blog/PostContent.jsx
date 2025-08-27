import React from 'react';

const PostContent = ({ htmlContent }) => {
  return (
     <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed prose-headings:text-gray-800 dark:prose-headings:text-white prose-strong:text-gray-800 dark:prose-strong:text-white prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary prose-a:text-primary hover:prose-a:text-primary/80 dark:prose-a:text-primary"
           dangerouslySetInnerHTML={{ __html: htmlContent }}>
     </div>
  );
};

export default PostContent;