import React from 'react';
import { motion } from 'motion/react';
import { config } from '../data/config';
import { getIcon } from '../lib/utils';

export default function Process() {
    return (
        <section id="process" className="py-24 md:py-32 px-6 bg-slate-50 border-y border-slate-100" aria-labelledby="process-heading">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        How We Work
                    </span>
                    <h2 id="process-heading" className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        {config.process.title} <span className="text-slate-400 italic font-normal">{config.process.subtitle}</span>
                    </h2>
                    <p className="text-slate-600">
                        {config.process.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector line - desktop only */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200" aria-hidden="true" />

                    {config.process.steps.map((step, index) => {
                        const Icon = getIcon(step.icon);
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-center group"
                            >
                                <div className="relative mb-8 flex justify-center">
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-6xl text-slate-100 font-bold group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
                                        {step.number}
                                    </span>
                                    <div className="relative w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-amber-500/50 group-hover:shadow-2xl transition-all duration-500 z-10">
                                        <Icon className="w-8 h-8 text-slate-900 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-500" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

