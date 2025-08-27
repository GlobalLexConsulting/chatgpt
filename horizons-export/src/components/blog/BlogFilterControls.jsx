import React from 'react';
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';
import { categories } from '@/lib/blogData';

const BlogFilterControls = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-8 sticky top-[68px] md:top-[78px] z-40 bg-gray-50/90 dark:bg-background/90 backdrop-blur-sm pt-4 pb-4 -mt-4">
      <div className="relative w-full md:max-w-lg mx-auto mb-6">
        <Input
          type="text"
          placeholder="Buscar artículos (Pillar Two, LLC, LATAM...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-11 dark:bg-gray-800 dark:border-gray-700"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div className="overflow-x-auto pb-2 no-scrollbar">
        <Tabs defaultValue="todos" value={selectedCategory} onValueChange={setSelectedCategory} className="w-max mx-auto">
          <TabsList className="flex-nowrap h-auto justify-start px-1 space-x-1">
            {categories.map(category => (
              <TabsTrigger key={category.value} value={category.value} className="text-xs sm:text-sm px-3 py-1.5 flex-shrink-0">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogFilterControls;