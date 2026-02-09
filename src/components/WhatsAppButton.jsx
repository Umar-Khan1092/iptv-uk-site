import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../constants/config';

const WhatsAppButton = ({ fixed = false, className = '' }) => {
    const handleWhatsAppClick = () => {
        window.open(CONTACT.WHATSAPP_URL, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className={`${fixed ? 'fixed bottom-6 right-6 z-[100]' : 'relative'} group ${className}`}
            aria-label="Contact us on WhatsApp for instant support"
        >
            {/* Pulse Ring Effect */}
            {fixed && (
                <div className="absolute inset-0 bg-accent-green rounded-full pulse-ring opacity-75"></div>
            )}

            <div className={`${fixed ? 'w-16 h-16' : 'w-14 h-14'} bg-accent-green hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-accent-green/30 transition-all duration-300 hover:scale-110 relative z-10 border-2 border-white/10`}>
                <FaWhatsapp className={`${fixed ? 'text-4xl' : 'text-3xl'} text-white group-hover:rotate-12 transition-transform`} />

                {/* Online Status Dot */}
                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" aria-label="Online now"></span>
                </div>
            </div>
        </button>
    );
};

export default WhatsAppButton;
