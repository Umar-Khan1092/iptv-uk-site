import React, { useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CONTACT } from '../constants/config';

const HeroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative overflow-hidden min-h-[650px] flex items-center gradient-hero"
        >
            {/* Decorative glow blobs */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white fade-in-up">
                            Premium IPTV UK <br />
                            <span className="gradient-text normal-case">Fast & Stable</span>
                        </h1>

                        <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold text-primary-orange fade-in-up">
                            4K &amp; 8K UHD Entertainment
                        </h3>

                        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl fade-in-up">
                            Experience the full power of IPTVUK.sbs and enjoy premium IPTV with our exclusive 12-hour free trial.
                            Access all 32,000+ channels, VOD, and premium features with no obligation.
                            Built-in VPN protection ensures safe and stable streaming — zero buffering Guaranteed!
                        </p>

                        {/* CTA Buttons: centered */}
                        <div className="flex justify-center pt-4 fade-in-up">
                            <button
                                onClick={() => window.open(CONTACT.WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
                                className="btn-primary text-lg px-10 glow-on-hover"
                                aria-label="Subscribe Now"
                            >
                                Subscribe Now
                            </button>
                        </div>

                        {/* Flash Sale Banner */}
                        <div className="gradient-flash animate-gradient rounded-2xl overflow-hidden shadow-layered-lg mt-12 max-w-xl group hover:scale-[1.02] transition-transform duration-300 fade-in-up float pulse-glow shine-sweep">
                            <div className="p-6 sm:p-8 text-center space-y-4">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-3xl animate-bounce">⚡</span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                                        FLASH SALE!
                                    </h3>
                                </div>

                                <p className="text-lg font-bold text-white/95 italic">
                                    Get 12 Months + 2 Months FREE!
                                </p>

                                <CountdownTimer />

                                <button
                                    onClick={() => window.open(CONTACT.WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
                                    className="w-full bg-primary-orange hover:bg-primary-orange-dark text-white font-black py-4 px-8 rounded-xl transition-all duration-300 shadow-xl mt-4 uppercase tracking-widest text-lg active:scale-95 glow-on-hover"
                                >
                                    Claim Offer Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image (aligned with title) */}
                    <div className="relative fade-in-up flex justify-center lg:justify-end items-start">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl"></div>
                        <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-primary-orange via-purple-500 to-pink-500 shadow-glow-lg">
                            <div className="rounded-3xl overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/used images/hero_section_image.jpeg"
                                    alt="Premium IPTV streaming on multiple devices"
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                    loading="eager"
                                    width="800"
                                    height="600"
                                    fetchpriority="high"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
