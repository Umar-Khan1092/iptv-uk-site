import React from 'react';
import { HiShieldCheck } from 'react-icons/hi2';

const PricingGuarantee = () => {
    return (
        <div className="w-full bg-slate-950 py-24 relative overflow-hidden border-y border-white/5">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-orange/5 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center relative z-10">
                <div className="flex justify-center mb-10">
                    <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-primary-orange shadow-2xl shadow-primary-orange/20 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                        <HiShieldCheck className="text-primary-orange text-5xl" />
                    </div>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
                    7-Day <span className="text-primary-orange">Iron-Clad</span> Satisfaction Guarantee
                </h3>

                <p className="text-slate-400 text-lg sm:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
                    Experience the peak of IPTV performance with absolute peace of mind. Our infrastructure is engineered for <span className="text-white">perfection</span>, but if we don’t exceed your expectations within 7 days, we guarantee a seamless, no-questions-asked refund.
                </p>

                <div className="mt-12 inline-block px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-primary-orange font-black text-sm uppercase tracking-[0.3em]">
                    Premium Quality • Guaranteed Stability • 24/7 Support
                </div>
            </div>
        </div>
    );
};

export default PricingGuarantee;
