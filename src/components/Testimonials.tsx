import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { config } from '../data/config';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Trusted by <span className="text-amber-600 italic font-normal">{config.brand.location}</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Hundreds of satisfied homeowners and residential estates trust {config.brand.name} for their aquatic needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" role="list">
          {config.testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col hover:border-blue-200 hover:shadow-lg transition-all"
              role="listitem"
            >
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-lg text-slate-900 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <footer className="mt-auto pt-6 border-t border-slate-200 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  width={48}
                  height={48}
                />
                <div>
                  <cite className="font-bold text-slate-900 not-italic block">{testimonial.name}</cite>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

