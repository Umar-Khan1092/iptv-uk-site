import React, { useEffect } from 'react';
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
            <PricingSection />
            <CTASection />
            <PricingStats />
            <ContactSection showHeading={true} compact={true} />
        </div>
    );
};

export default PricingPage;
