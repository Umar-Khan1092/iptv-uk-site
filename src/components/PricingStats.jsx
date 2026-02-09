import React, { useEffect, useState } from 'react';

const PricingStats = () => {
    const stats = [
        { label: 'Years of Experience', value: 8, suffix: '+' },
        { label: 'Active Users', value: 8310, suffix: '+' },
        { label: 'Team of Experts', value: 27, suffix: '+' },
        { label: '5-Star Reviews', value: 5230, suffix: '+' },
    ];

    const [counters, setCounters] = useState(stats.map(() => 0));
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        // Simple intersection observer to start animation
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setAnimated(true);
        }, { threshold: 0.1 });

        const el = document.getElementById('pricing-stats');
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!animated) return;

        const duration = 2000;
        const frameRate = 30;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        const increments = stats.map((stat) => stat.value / totalFrames);
        let frame = 0;

        const interval = setInterval(() => {
            frame++;
            setCounters((prev) =>
                prev.map((count, idx) =>
                    frame === totalFrames
                        ? stats[idx].value
                        : Math.ceil(count + increments[idx])
                )
            );
            if (frame >= totalFrames) clearInterval(interval);
        }, 1000 / frameRate);

        return () => clearInterval(interval);
    }, [animated]);

    return (
        <div id="pricing-stats" className="w-full bg-slate-950 py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary-orange/5 blur-3xl rounded-full translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="fade-in-up visible group">
                            <div className="text-5xl sm:text-6xl font-black text-white group-hover:text-primary-orange transition-colors duration-300">
                                {counters[idx].toLocaleString()}
                                {stat.suffix}
                            </div>
                            <div className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-sm">
                                {stat.label}
                            </div>
                            <div className="mt-2 w-12 h-1 bg-primary-orange mx-auto rounded-full opacity-50 group-hover:w-20 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingStats;
