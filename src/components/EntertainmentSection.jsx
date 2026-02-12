import React from 'react';
import {
    FaTv, FaGem, FaRocket, FaBolt, FaHeadset, FaMobileAlt,
    FaTag, FaShieldAlt, FaBuffer, FaGlobe, FaPlayCircle,
    FaGlobeAmericas, FaListUl, FaCheckCircle
} from 'react-icons/fa';

const EntertainmentSection = () => {
    const featureItems = [
        { text: "27,000+ Premimum channels.", icon: <FaTv className="text-primary-orange" /> },
        { text: "Full 4k/8k HD Quality.", icon: <FaGem className="text-purple-500" /> },
        { text: "Smooth, Reliable, Fast.", icon: <FaRocket className="text-blue-500" /> },
        { text: "Instant Activation.", icon: <FaBolt className="text-yellow-500" /> },
        { text: "24/7 Customer support.", icon: <FaHeadset className="text-green-500" /> },
        { text: "Multiple devices Compatibility.", icon: <FaMobileAlt className="text-indigo-500" /> },
        { text: "Reasonable Prices.", icon: <FaTag className="text-red-500" /> },
        { text: "No adult stuff.", icon: <FaShieldAlt className="text-teal-500" /> },
        { text: "No buffering.", icon: <FaCheckCircle className="text-orange-600" /> },
        { text: "Network of UK servers.", icon: <FaGlobe className="text-sky-500" /> },
        { text: "Free Trial Available.", icon: <FaPlayCircle className="text-rose-500" /> },
        { text: "All National & International Channels.", icon: <FaGlobeAmericas className="text-emerald-500" /> },
        { text: "Tv Guide (EPG) included.", icon: <FaListUl className="text-amber-500" /> },
        { text: "Instant setup with a complete and easy guide.", icon: <FaCheckCircle className="text-cyan-500" /> },
    ];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                        The Ultimate <span className="text-primary-orange">Entertainment</span> Experience
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Why settle for less when you can have the best? Our service is engineered for quality and stability.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Vertical Features */}
                    <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                            {featureItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 group p-3 rounded-xl bg-slate-950/50 border border-white/5 transition-all duration-300 hover:border-primary-orange/30"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 shadow-sm flex items-center justify-center text-xl scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-bold text-base transition-colors group-hover:text-primary-orange">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Catchy Image */}
                    <div className="relative">
                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-950/20 rounded-full blur-3xl animate-pulse"></div>

                        <div className="relative z-10 p-[2px] rounded-3xl bg-gradient-to-tr from-primary-orange via-indigo-950 to-primary-orange shadow-2xl">
                            <div className="rounded-3xl overflow-hidden shadow-inner">
                                <img
                                    src="/used images/Perfect Entertainment.webp"
                                    alt="Perfect Entertainment IPTV"
                                    width="600"
                                    height="400"
                                    className="w-full h-auto object-cover scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-slate-950 p-4 rounded-2xl shadow-2xl z-20 border border-white/10 animate-bounce">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-orange flex items-center justify-center text-white text-2xl">
                                    <FaBolt />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</p>
                                    <p className="text-lg font-black text-white leading-none">Instant Online</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EntertainmentSection;
