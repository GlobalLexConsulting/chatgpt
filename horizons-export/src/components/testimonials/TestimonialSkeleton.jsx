import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TestimonialSkeleton = () => (
  <Card className="flex flex-col w-full p-6 md:p-8 bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-blue-900/10 rounded-xl shadow-lg border dark:border-gray-800 animate-pulse">
    <CardContent className="flex-grow p-0">
      <div className="flex justify-between items-start mb-5">
        <Skeleton className="h-10 w-10 rounded" />
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={`star-skel-${i}`} className="h-5 w-5 rounded-full" />
          ))}
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
    </CardContent>
    <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
      <Skeleton className="h-14 w-14 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  </Card>
);

export default TestimonialSkeleton;