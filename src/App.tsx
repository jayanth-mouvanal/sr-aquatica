import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { config } from './data/config';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Statistics Bar */}
        <div id="stats">
          <TrustBar />
        </div>

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Project */}
        <section id="projects" className="py-24 md:py-32 px-6 bg-slate-50" aria-labelledby="project-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={config.featuredProject.image}
                    alt={`${config.featuredProject.title} ${config.featuredProject.subtitle} Pool`}
                    className="w-full aspect-video object-cover"
                  />
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <span className="text-amber-700 font-bold tracking-widest uppercase text-xs mb-4 block">
                  Featured Project
                </span>
                <h2 id="project-heading" className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                  {config.featuredProject.title} <span className="text-slate-400 italic font-normal">{config.featuredProject.subtitle}</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {config.featuredProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {config.featuredProject.details.map((detail) => (
                    <div key={detail.label} className="border-b border-slate-200 pb-4">
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{detail.label}</p>
                      <p className="text-base font-bold text-slate-900">{detail.value}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-blue-700 font-bold hover:text-blue-800 transition-colors group"
                >
                  Build Similar Project
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <Process />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />

      {/* Floating Button */}
      <WhatsAppButton />
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to main content</a>
    </div>
  );
}

