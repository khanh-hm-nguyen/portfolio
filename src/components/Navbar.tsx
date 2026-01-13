'use client';

import { useState, useEffect } from 'react';
import { Terminal, LightMode, DarkMode, Menu, Close } from '@mui/icons-material';
import { portfolioData } from '@/data/portfolio';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { toggleTheme } from '@/lib/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. Brand Identity - Khanh Nguyen */}
        <div className="group font-bold text-xl tracking-tight flex items-center gap-2 cursor-pointer select-none">
          {/* Logo Icon Container */}
          <div className="p-1.5 rounded-lg transition-colors duration-300
            bg-teal-50 text-teal-600 
            dark:bg-teal-900/50 dark:text-teal-400 
            group-hover:bg-teal-600 group-hover:text-white"
          >
            <Terminal fontSize="small" className="text-inherit" />
          </div>
          
          {/* Logo Text */}
          <span className="text-slate-900 dark:text-white transition-colors duration-300">
            Khanh<span className="text-teal-600 dark:text-teal-400">Nguyen</span>
          </span>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {portfolioData.navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative py-1 transition-colors duration-300 group
                text-slate-600 hover:text-teal-600 
                dark:text-slate-300 dark:hover:text-teal-400"
            >
              {link.name}
              {/* Underline Animation */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                bg-teal-600 dark:bg-teal-400" 
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* 3. Theme Toggle Button */}
          <button 
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full transition-all duration-300 active:scale-95 border border-transparent group
              text-slate-600 hover:bg-slate-100 hover:border-slate-200
              dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:border-slate-700"
            aria-label="Toggle Dark Mode"
          >
            <div className="group-hover:rotate-180 transition-transform duration-500">
              {isDarkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
            </div>
          </button>

          {/* 4. Desktop CTA Button (High Contrast) */}
          <a 
            href="#contact" 
            className="hidden md:inline-flex px-5 py-2 text-sm rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5
              bg-slate-900 text-white shadow-slate-900/20 hover:bg-teal-600
              dark:bg-white dark:text-slate-900 dark:hover:bg-teal-400 dark:hover:text-white dark:shadow-none"
          >
            Contact Me
          </a>

          {/* 5. Mobile Menu Hamburger */}
          <button 
            className="md:hidden p-2 rounded-lg transition-colors
              text-slate-600 hover:bg-slate-100 
              dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 6. Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full border-b shadow-xl transition-all duration-300 ease-in-out origin-top
          bg-white/95 border-slate-200
          dark:bg-slate-950/95 dark:border-slate-800 backdrop-blur-xl
          ${isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}`
        }
      >
        <div className="flex flex-col p-6 space-y-4">
          {portfolioData.navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium transition-colors duration-200
                text-slate-600 hover:text-teal-600 
                dark:text-slate-300 dark:hover:text-teal-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-100 dark:border-slate-800" />
          <a 
            href="#contact" 
            className="text-center w-full py-3 rounded-xl font-bold text-white shadow-lg shadow-teal-500/30
              bg-teal-600 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;