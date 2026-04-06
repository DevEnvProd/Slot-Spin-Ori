import React from 'react';
import { news } from '../data/news';
import { NewsCard } from '../components/NewsCard';
import { motion } from 'motion/react';
import { Newspaper } from 'lucide-react';

export const NewsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Newspaper className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Latest News & Media</h1>
        </div>
        <p className="text-gray-600">Stay updated with the latest slot releases, casino promotions, and industry news in Malaysia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map(item => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
