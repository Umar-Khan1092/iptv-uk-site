import React, { useEffect, useRef } from 'react';
import { CONTACT } from '../constants/config';

const PricingSection = () => {
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

    const planFeatures = [
        '📺 28K+ Live Channels',
        '🎬 100K+ Movies & Series',
        '🖥️ 4K / FHD / HD Quality',
        '⚽ Sports & PPV',
        '❄️ Anti-Freeze Tech',
        '📱 All Devices',
        '📅 EPG & Catch-Up',
        '💬 24/7 Support',
    ];

    const plans = [
        { name: 'Month', price: '£14.99', period: 'per month' },
        { name: '3 Months', price: '£29.99', period: 'every 3 months' },
        {
            name: '12 Months',
            price: '£59.99',
            period: 'per year',
            isPopular: true,
            badge: 'Hot Sale!',
        },
        { name: '6 Months', price: '£39.99', period: 'every six months' },
    ];

    return (
        <section ref={sectionRef} id="pricing" className="bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-orange/5 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                        Fair and Open <span className="text-primary-orange">Pricing</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        One time payment, instant delivery. Choose the plan that works best for you. No hidden fees, guaranteed.
                    </p>
                </div>

                {/* PRICING CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative card-glass hover:scale-105 transition-all duration-300 flex flex-col h-full fade-in-up border-white/5 ${plan.isPopular
                                ? 'ring-2 ring-primary-orange shadow-[0_0_40px_rgba(14,165,233,0.15)] bg-slate-900/80'
                                : 'hover:border-white/20'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 -right-2 bg-accent-rose text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider animate-bounce">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-400 mb-4 uppercase tracking-widest">
                                    {plan.name}
                                </h3>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-5xl font-black text-white">
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-slate-400 mt-2 text-sm">{plan.period}</p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {planFeatures.map((feature, idx) => (
                                    <li key={idx} className="text-slate-300 text-sm flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-orange"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => window.open(CONTACT.WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
                                className={`w-full py-4 rounded-xl font-black transition-all duration-300 active:scale-95 uppercase tracking-widest text-sm shadow-xl ${plan.isPopular
                                    ? 'bg-primary-orange hover:bg-primary-orange-dark text-slate-950 shadow-primary-orange/20'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
