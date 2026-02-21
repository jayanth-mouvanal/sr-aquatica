import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Award, Headset, Zap, Users } from 'lucide-react';
import { config } from '../data/config';

const reasons = [
    {
        icon: Award,
        title: 'Expert Building',
        description: `Over ${config.brand.establishmentYear} years of high-end pool construction for apartments and luxury estates in ${config.brand.location}.`,
    },
    {
        icon: Shield,
        title: 'Quality Assured',
        description: 'We use only certified materials and world-class filtration equipment for longevity.',
    },
    {
        icon: Users,
        title: 'Custom Design',
        description: 'No template pools. Every project is uniquely designed to match your property architectural style.',
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Emergency response for equipment failures and technical issues for all our contract clients.',
    },
    {
        icon: Zap,
        title: 'Fair Pricing',
        description: 'Transparent billing with no hidden costs. We provide a detailed estimate before any ground is broken.',
    },
    {
        icon: Headset,
        title: 'Dedicated Support',
        description: 'Direct access to your project manager for updates and maintenance coordination.',
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 md:py-32 px-6 bg-white" aria-labelledby="why-us-heading">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 lg:items-end">
                    <div className="lg:w-3/5">
                        <span className="text-secondary-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            The {config.brand.name} Advantage
                        </span>
                        <h2 id="why-us-heading" className="font-serif text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                            Why Homeowners <br />
                            <span className="text-accent-gold italic font-normal">Trust Our Team</span>
                        </h2>
                    </div>
                    <div className="lg:w-2/5">
                        <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-accent-gold pl-6">
                            We combine engineering precision with deep local expertise to deliver
                            pools that are as durable as they are beautiful.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" role="list">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-6 group"
                            role="listitem"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors" aria-hidden="true">
                                <reason.icon className="w-6 h-6 text-secondary-blue" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-light">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

