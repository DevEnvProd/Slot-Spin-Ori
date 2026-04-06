import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      <Link to={`/news/${item.slug}`} className="block aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-50 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            {item.category}
          </span>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Calendar className="w-3 h-3" />
            {item.date}
          </div>
        </div>
        <Link to={`/news/${item.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
            {item.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">
          {item.excerpt}
        </p>
        <Link
          to={`/news/${item.slug}`}
          className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
