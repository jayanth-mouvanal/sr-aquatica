import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { config } from '../data/config';
import { getIcon } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const LogoIcon = getIcon('Droplets');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'why-us', 'projects', 'testimonials'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Portfolio', href: '#projects', id: 'projects' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${isScrolled ? 'bg-white py-4 shadow-md' : 'bg-transparent py-6'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 focus-visible:outline-none" aria-label={`${config.brand.name} — Home`}>
          <LogoIcon className={`w-8 h-8 transition-colors ${isScrolled ? 'text-secondary-blue' : 'text-white'}`} />
          <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            {config.brand.logoText}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-all relative group ${isScrolled ? 'text-slate-600' : 'text-white/90'} 
                ${activeSection === link.id ? (isScrolled ? 'text-secondary-blue' : 'text-white') : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`} />
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${isScrolled
              ? 'bg-slate-900 text-white hover:bg-slate-800'
              : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 bg-white border border-slate-100 shadow-2xl rounded-2xl p-8 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-900 hover:text-blue-700"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-3 text-slate-900 font-bold"
                >
                  <Phone className="w-5 h-5 text-amber-600" />
                  {config.contact.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-slate-900 text-white py-4 rounded-xl text-center font-bold"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

