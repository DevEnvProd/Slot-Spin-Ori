import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { reviews } from '../data/reviews';
import { SlotCard } from '../components/SlotCard';
import { NewsCard } from '../components/NewsCard';
import { CasinoBanner } from '../components/CasinoBanner';
import { ChevronRight, Zap, TrendingUp, Award, Flame, Star, Newspaper } from 'lucide-react';
import { news } from '../data/news';

export const Home: React.FC = () => {
  const featuredReview = reviews.find(r => r.isFeatured) || reviews[0];
  const latestReviews = reviews.slice(0, 6);
  const latestNews = news.slice(0, 3);

  const categories = [
    { name: 'High RTP', icon: <Zap className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
    { name: 'High Volatility', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-orange-50 text-orange-600' },
    { name: 'Jackpot Slots', icon: <Award className="w-5 h-5" />, color: 'bg-yellow-50 text-yellow-600' },
    { name: 'New Releases', icon: <Flame className="w-5 h-5" />, color: 'bg-red-50 text-red-600' },
    { name: 'Popular in MY', icon: <Star className="w-5 h-5" />, color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            SlotSpin MY — <span className="text-primary">Review Slot Percuma</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Review slot paling jujur di Malaysia. Cari jackpot, semak RTP, dan main dengan bijak.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/reviews"
              className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              Lihat Semua Review
            </Link>
            <a
              href="https://platinum-casino.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-text-dark border border-gray-200 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Main di Platinum Casino
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Featured Review */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Featured Review of the Week</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row"
          >
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img
                src={featuredReview.image}
                alt={featuredReview.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-secondary text-primary font-bold px-4 py-2 rounded-full shadow-lg">
                MUST PLAY
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {featuredReview.provider}
                </span>
                <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                <span className="rtp-number">{featuredReview.rtp}% RTP</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">{featuredReview.title}</h3>
              <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                {featuredReview.content}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="text-xs text-gray-400 block uppercase font-bold">Volatility</span>
                  <span className="font-bold">{featuredReview.volatility}</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="text-xs text-gray-400 block uppercase font-bold">Max Win</span>
                  <span className="font-bold">{featuredReview.maxWin}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/review/${featuredReview.slug}`}
                  className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-center"
                >
                  Read Full Review
                </Link>
                <a
                  href="https://platinum-casino.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform text-center"
                >
                  Play Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-sm ${cat.color}`}
              >
                {cat.icon}
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Latest Reviews */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Latest Slot Reviews</h2>
            <Link to="/reviews" className="text-primary font-bold flex items-center gap-1 hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestReviews.map(review => (
              <SlotCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Latest News */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Newspaper className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Latest News & Media</h2>
            </div>
            <Link to="/news" className="text-primary font-bold flex items-center gap-1 hover:underline">
              Read All News <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Casino Banner */}
        <CasinoBanner />
      </div>
    </div>
  );
};
