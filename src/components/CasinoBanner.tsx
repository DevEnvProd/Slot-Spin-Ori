import React from 'react';
import { ExternalLink, Trophy } from 'lucide-react';

export const CasinoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-red-800 text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="bg-secondary p-3 rounded-full">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Play at Platinum Casino</h2>
          <p className="text-red-100 opacity-90">Get exclusive bonuses on all reviewed slots today!</p>
        </div>
      </div>
      <a
        href="https://platinum-casino.example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap shadow-lg"
      >
        CLAIM BONUS NOW <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  );
};
