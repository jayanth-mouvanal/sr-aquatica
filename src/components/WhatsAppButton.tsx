import React from 'react';
import { MessageCircle } from 'lucide-react';
import { config } from '../data/config';

export default function WhatsAppButton() {
    return (
        <a
            href={`https://api.whatsapp.com/send?phone=${config.contact.whatsapp}&text=Hi%20${encodeURIComponent(config.brand.name)}!%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-110 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
            {/* Tooltip */}
            <span className="absolute right-20 bg-white text-black text-sm font-semibold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Chat with us!
            </span>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20" aria-hidden="true" />
        </a>
    );
}

