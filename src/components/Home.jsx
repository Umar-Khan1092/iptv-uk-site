import React from 'react';
import HeroSection from './HeroSection';
import DevicesSection from './DevicesSection';
import PricingSection from './PricingSection';
import PricingStats from './PricingStats';
import PricingGuarantee from './PricingGuarantee';
import CTASection from './CTASection';
import ContactSection from './ContactSection';
import FeaturesSection from './FeaturesSection';
import EntertainmentSection from './EntertainmentSection';
import FAQSection from './FAQSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <PricingStats />
            <PricingSection />
            <CTASection />
            <PricingGuarantee />
            <FeaturesSection />
            <DevicesSection />
            <EntertainmentSection />
            <FAQSection />
            <ContactSection />
        </>
    );
};

export default Home;
