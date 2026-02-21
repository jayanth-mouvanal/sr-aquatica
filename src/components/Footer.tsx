import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { config } from '../data/config';
import { getIcon } from '../lib/utils';

export default function Footer() {
  const LogoIcon = getIcon('Droplets');

  return (
    <footer className="bg-bg-dark pt-32 pb-12 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-24 border-b border-white/5 pb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-10 h-10 text-secondary-blue" aria-hidden="true" />
              <span className="font-serif text-3xl font-bold tracking-tight text-white uppercase">{config.brand.logoText}</span>
            </div>
            <p className="text-white/40 leading-relaxed text-lg font-light">
              {config.brand.tagline}. Excellence without compromise.
            </p>
            <div className="flex gap-6" role="list" aria-label="Social media links">
              {Object.entries(config.contact.socials).map(([platform, username]) => (
                <a
                  key={platform}
                  href={`https://www.${platform}.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                  aria-label={`Follow us on ${platform}`}
                >
                  {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                  {platform === 'facebook' && <Facebook className="w-5 h-5" />}
                  {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links" className="lg:pl-12">
            <h4 className="text-white font-bold mb-10 text-xs uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-6 text-white/40 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Ethos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Service Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why {config.brand.logoText}</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Perspectives</a></li>
            </ul>
          </nav>

          <nav aria-label="Services links">
            <h4 className="text-white font-bold mb-10 text-xs uppercase tracking-[0.3em]">Expertise</h4>
            <ul className="space-y-6 text-white/40 text-sm font-medium">
              {config.services.slice(0, 4).map(service => (
                <li key={service.title}>
                  <a href="#services" className="hover:text-white transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-10">
            <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-[0.3em]">Contact Center</h4>
            <div className="space-y-6 text-white/40">
              <a href={`tel:${config.contact.phone}`} className="flex items-center gap-4 hover:text-white transition-colors text-lg">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />
                {config.contact.phone}
              </a>
              <a href={`mailto:${config.contact.email}`} className="flex items-center gap-4 hover:text-white transition-colors text-base tracking-widest">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />
                {config.contact.email}
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" aria-hidden="true" />
                <span className="text-sm italic leading-relaxed">{config.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {config.brand.name} · Luxury Aquatic Engineering
          </p>

        </div>
      </div>
    </footer>
  );
}

