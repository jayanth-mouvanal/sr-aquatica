import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { config } from '../data/config';
import { getIcon } from '../lib/utils';

export default function Hero() {
  const TrustIcon = getIcon('Droplet');

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center" aria-labelledby="hero-heading">
      {/* Background — vivid pool image with minimal overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={config.hero.image}
          alt="Luxury integrated pool and patio"
          className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.9] contrast-[1.05]"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Light left-side gradient so text is readable without darkening the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      {/* Content — vertically centered, with top padding to clear the fixed navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <TrustIcon className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
              Established {config.brand.establishmentYear} • {config.brand.location}
            </span>
          </div>

          <h1 id="hero-heading" className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] text-white mb-6 drop-shadow-2xl">
            {config.hero.title} <br />
            <span className="gold-gradient italic font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">{config.hero.subtitle}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed font-light drop-shadow-md">
            {config.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-amber-600 text-white rounded-full text-base font-bold hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-900/20 active:scale-95"
            >
              {config.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full text-base font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-95"
            >
              <Phone className="w-5 h-5" />
              {config.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
      </div>
    </section>
  );
}

