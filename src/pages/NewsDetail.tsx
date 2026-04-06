import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { news } from '../data/news';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Share2, Tag } from 'lucide-react';
import { CasinoBanner } from '../components/CasinoBanner';

export const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = news.find(n => n.slug === slug);

  if (!item) return <Navigate to="/news" />;

  return (
    <div className="pb-20">
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <div className="ml-auto flex gap-4">
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                {item.title}
              </h1>

              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                <p className="text-xl font-medium text-gray-900 mb-6">{item.excerpt}</p>
                <div className="whitespace-pre-line">
                  {item.content}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-12 text-sm text-gray-400">
                <Tag className="w-4 h-4" />
                <span>Tags: Slot News, Malaysia Casino, {item.category}</span>
              </div>

              <div className="border-t border-gray-100 pt-12">
                <CasinoBanner />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
