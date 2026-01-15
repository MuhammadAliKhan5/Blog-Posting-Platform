import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Using Link to prevent page refreshes
import { Menu, X, Bell } from 'lucide-react'; // Using icons for a cleaner look

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Create Blog', href: '/create' },
    { name: 'All Blogs', href: '/all-blogs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Me', href: '/contact' },
  ];

  return (
    /* INCREASED HEIGHT: From h-16 to h-24 (via py-4) and added backdrop blur */
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 md:py-2"> {/* Increased padding for height */}

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center group">
            {/* Added a subtle glow behind the logo on hover */}
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <img
                className="relative w-auto h-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                src="/ogo1.png"
                alt="Logo"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-cyan-400 font-bold text-sm uppercase tracking-widest transition-all duration-300 relative group"
              >
                {link.name}
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="flex items-center gap-6 ml-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Bell size={20} />
              </button>
              <button className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-900/20">

                Subscribe

              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 rounded-2xl text-base font-bold text-gray-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-cyan-500 text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;