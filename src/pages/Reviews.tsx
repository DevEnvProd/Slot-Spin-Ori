import React from 'react';
import { reviews } from '../data/reviews';
import { SlotCard } from '../components/SlotCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export const Reviews: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('newest');

  const filteredReviews = reviews
    .filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'rtp') return b.rtp - a.rtp;
      return 0; // Default to original order (newest)
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Slot Reviews</h1>
        <p className="text-gray-600">Explore our complete database of slot game reviews and find your next favorite.</p>
      </div>

      {/* Filters & Search */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-12 shadow-sm flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative w-full lg:w-1/2">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by game title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-semibold">Sort by:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 outline-none font-semibold cursor-pointer w-full lg:w-auto"
          >
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rating</option>
            <option value="rtp">Highest RTP</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {filteredReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map(review => (
            <SlotCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No reviews found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          <button
            onClick={() => { setSearchQuery(''); setSortBy('newest'); }}
            className="mt-6 text-primary font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination Placeholder */}
      <div className="mt-16 flex justify-center gap-2">
        <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
        <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200">2</button>
        <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200">3</button>
      </div>
    </div>
  );
};
