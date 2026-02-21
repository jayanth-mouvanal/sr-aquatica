import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { config } from '../data/config';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-slate-900 overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-white">
            <span className="text-amber-500 font-bold tracking-[0.2rem] uppercase text-xs mb-6 block">
              Get in Touch
            </span>
            <h2 id="contact-heading" className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Begin Your <br />
              <span className="text-amber-500 italic font-normal">Transformation</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-md">
              Secure your site visit with our expert engineering team.
              We'll help you plan, build, or maintain your dream pool.
            </p>

            <address className="space-y-8 not-italic">
              <a href={`tel:${config.contact.phone}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:border-amber-600 transition-all duration-300">
                  <Phone className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <span className="text-slate-400">{config.contact.phone}</span>
                </div>
              </a>

              <a
                href={`https://api.whatsapp.com/send?phone=${config.contact.whatsapp}`}
                target="_blank"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                  <span className="text-slate-400">Fast Response</span>
                </div>
              </a>

              <a href={`mailto:${config.contact.email}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <span className="text-slate-400">{config.contact.email}</span>
                </div>
              </a>
            </address>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
                role="status"
              >
                <div className="w-24 h-24 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 bg-emerald-500/20 rounded-3xl animate-ping"
                  />
                  <Send className="w-10 h-10 text-emerald-600 relative z-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Request Confirmed</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xs mx-auto mb-8">
                  One of our lead engineers will reach out to you within 12 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-700 font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    placeholder="E.g. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    placeholder={config.contact.phone}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-service" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none"
                    >
                      {config.services.map(service => (
                        <option key={service.title}>{service.title}</option>
                      ))}
                      <option>Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-700 text-white py-5 rounded-xl font-bold text-base uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10 disabled:opacity-50 mt-4"
                >
                  {isLoading ? 'Processing...' : 'Request Site Visit'}
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-6">
                  Secure & Confidential · Response within 12 Hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

