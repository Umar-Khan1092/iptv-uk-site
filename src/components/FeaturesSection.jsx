import React from 'react';
import { FaTv, FaBolt, FaGlobe, FaShieldAlt, FaSync, FaLock } from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaTv className="text-3xl text-white" />,
            title: "28,000+ Channels",
            description: "Access to all UK channels plus vast international content."
        },
        {
            icon: <FaBolt className="text-3xl text-white" />,
            title: "HD & 4K Quality",
            description: "Crystal clear HD and 4K streaming quality for an immersive experience."
        },
        {
            icon: <FaGlobe className="text-3xl text-white" />,
            title: "Multi-Device",
            description: "Watch on Smart TV, mobile, tablet, or computer seamlessly."
        },
        {
            icon: <FaShieldAlt className="text-3xl text-white" />,
            title: "99.9% Uptime",
            description: "Reliable service with robust infrastructure and 24/7 customer support."
        },
        {
            icon: <FaSync className="text-3xl text-white" />,
            title: "30-Day Money Back",
            description: "Not satisfied? Get a full refund within 30 days, no questions asked."
        },
        {
            icon: <FaLock className="text-3xl text-white" />,
            title: "Secure Payment",
            description: "Your transactions are safe with our encrypted payment system."
        }
    ];

    return (
        <section id="features" className="py-16 sm:py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                        Why Choose <span className="text-primary-orange">iptvuk.sbs</span> IPTV?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We provide a premium viewing experience with unparalleled features and support. Discover the iptvuk.sbs IPTV difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card group hover:shadow-primary-orange/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-orange to-primary-orange-dark flex items-center justify-center shadow-lg shadow-primary-orange/20 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-[15px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
