import { useState, useMemo } from 'react';

const useBlogFilter = (posts) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        // Category filter
        if (selectedCategory !== 'todos' && (!post.tags || !post.tags.includes(selectedCategory))) {
          return false;
        }
        return true;
      })
      .filter((post) => {
        // Search term filter
        if (searchTerm.trim() === '') return true;
        const lowerCaseSearch = searchTerm.toLowerCase();
        
        // Search in title, excerpt, and tags
        const inTitle = post.title.toLowerCase().includes(lowerCaseSearch);
        const inExcerpt = post.excerpt.toLowerCase().includes(lowerCaseSearch);
        const inTags = post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch));

        return inTitle || inExcerpt || inTags;
      });
  }, [posts, searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
  };
};

export default useBlogFilter;