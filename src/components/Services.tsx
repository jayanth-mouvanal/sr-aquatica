import React from 'react';
import { motion } from 'motion/react';
import { config } from '../data/config';
import { getIcon } from '../lib/utils';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-secondary-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Expertise
          </span>
          <h2 id="services-heading" className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-primary-navy text-balance">
            Aquatic Engineering <br />
            <span className="text-accent-gold italic font-normal">Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            From complex structural builds to delicate chemical balancing, we provide
            comprehensive solutions for the most demanding aquatic environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {config.services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-amber-500/50 hover:shadow-xl transition-all duration-300"
                role="listitem"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-secondary-blue transition-colors" aria-hidden="true">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {service.tag && (
                  <span className="absolute top-6 right-8 bg-teal-50 text-secondary-blue text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-teal-100">
                    {service.tag}
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

