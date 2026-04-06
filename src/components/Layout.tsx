import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Dices, Info, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Dices className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tighter text-primary">SLOTSPIN</span>
                <span className="text-2xl font-bold tracking-tighter text-gray-800 ml-1">MY</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/" className={({ isActive }) => `font-semibold transition-colors ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                Home
              </NavLink>
              <NavLink to="/reviews" className={({ isActive }) => `font-semibold transition-colors ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                All Reviews
              </NavLink>
              <NavLink to="/news" className={({ isActive }) => `font-semibold transition-colors ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                News
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `font-semibold transition-colors ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                About
              </NavLink>
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search slots..."
                  className="bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 lg:w-64"
                />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-gray-800">Home</NavLink>
                <NavLink to="/reviews" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-gray-800">All Reviews</NavLink>
                <NavLink to="/news" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-gray-800">News</NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-gray-800">About</NavLink>
                <div className="relative pt-2">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 mt-1" />
                  <input
                    type="text"
                    placeholder="Search slots..."
                    className="bg-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none w-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <Dices className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tighter">SLOTSPIN MY</span>
              </Link>
              <p className="text-gray-400 max-w-md mb-6">
                Review slot percuma dan jujur untuk pemain di Malaysia. Kami membantu anda mencari slot dengan RTP tinggi dan jackpot besar.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                  <LayoutGrid className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                  <Info className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/reviews" className="hover:text-white transition-colors">All Reviews</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">Latest News</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Responsible Gaming</h4>
              <p className="text-gray-400 text-sm mb-4">
                Permainan slot adalah untuk hiburan sahaja. Sila bermain secara bertanggungjawab.
              </p>
              <div className="inline-block border-2 border-red-500 text-red-500 font-bold px-3 py-1 rounded-full text-sm">
                18+ ONLY
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SLOTSPIN MY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
