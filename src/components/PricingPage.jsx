import React, { useEffect } from 'react';
import SEO from './SEO';
import PricingSection from './PricingSection';
import PricingStats from './PricingStats';
import CTASection from './CTASection';
import ContactSection from './ContactSection';

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-950">
            <SEO
                title="Pricing Plans"
                description="Check out our affordable IPTV subscription plans. Get access to 28,000+ channels and VODs in 4K/8K quality."
                url="https://iptvuk.sbs/pricing"
            />
            <PricingSection />
            <CTASection />
            <PricingStats />
            <ContactSection showHeading={true} compact={true} />
        </div>
    );
};

export default PricingPage;
