import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { reviews } from '../data/reviews';
import { RatingStars } from '../components/RatingStars';
import { CasinoBanner } from '../components/CasinoBanner';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Info, ExternalLink, ArrowLeft, Share2 } from 'lucide-react';

export const ReviewDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const review = reviews.find(r => r.slug === slug);

  if (!review) return <Navigate to="/reviews" />;

  return (
    <div className="pb-20">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Reviews
          </Link>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Image & Quick Info */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl mb-8"
              >
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                      {review.provider}
                    </span>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{review.title}</h1>
                  <RatingStars rating={review.rating} className="mb-6" />

                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">RTP</span>
                      <span className="rtp-number">{review.rtp}%</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Volatility</span>
                      <span className="font-bold">{review.volatility}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Max Win</span>
                      <span className="font-bold">{review.maxWin}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Paylines</span>
                      <span className="font-bold">{review.paylines}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-500">Reels</span>
                      <span className="font-bold">{review.reels}</span>
                    </div>
                  </div>

                  <a
                    href="https://platinum-casino.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-8 bg-primary text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-100"
                  >
                    PLAY AT PLATINUM CASINO <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Detailed Review */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" /> Game Overview
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                  <p>{review.content}</p>
                  <p className="mt-4">
                    Whether you're a casual player or a high roller, {review.title} offers an engaging experience with its {review.volatility.toLowerCase()} volatility profile. The {review.provider} team has clearly put a lot of effort into the mechanics and visual presentation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-green-800 font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Pros
                    </h3>
                    <ul className="space-y-3">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="text-green-700 flex items-start gap-2 text-sm">
                          <div className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-red-800 font-bold mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" /> Cons
                    </h3>
                    <ul className="space-y-3">
                      {review.cons.map((con, i) => (
                        <li key={i} className="text-red-700 flex items-start gap-2 text-sm">
                          <div className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Bonus Features</h2>
                <div className="flex flex-wrap gap-3 mb-12">
                  {review.bonusFeatures.map((feature, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-12">
                  <CasinoBanner />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
