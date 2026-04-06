import React from 'react';
import { Link } from 'react-router-dom';
import { SlotReview } from '../types';
import { RatingStars } from './RatingStars';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface SlotCardProps {
  review: SlotReview;
}

export const SlotCard: React.FC<SlotCardProps> = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      <Link to={`/review/${review.slug}`} className="block relative aspect-video overflow-hidden">
        <img
          src={review.image}
          alt={review.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
          {review.provider}
        </div>
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/review/${review.slug}`}>
            <h3 className="text-xl font-bold hover:text-primary transition-colors">{review.title}</h3>
          </Link>
          <span className="rtp-number">{review.rtp}% RTP</span>
        </div>
        <RatingStars rating={review.rating} className="mb-4" />
        <div className="flex justify-between text-sm text-gray-500 mb-5">
          <span>Volatility: <span className="font-semibold text-text-dark">{review.volatility}</span></span>
          <span>Max Win: <span className="font-semibold text-text-dark">{review.maxWin}</span></span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to={`/review/${review.slug}`}
            className="flex items-center justify-center bg-white border border-gray-200 text-text-dark font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Read Review
          </Link>
          <a
            href="https://platinum-casino.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-primary text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors text-sm gap-1"
          >
            Play Now <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
