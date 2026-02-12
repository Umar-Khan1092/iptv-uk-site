import React, { Suspense, lazy } from 'react';
import SEO from './SEO';
import HeroSection from './HeroSection';

// Lazy load components below the fold
const PricingStats = lazy(() => import('./PricingStats'));
const PricingSection = lazy(() => import('./PricingSection'));
const CTASection = lazy(() => import('./CTASection'));
const PricingGuarantee = lazy(() => import('./PricingGuarantee'));
const FeaturesSection = lazy(() => import('./FeaturesSection'));
const DevicesSection = lazy(() => import('./DevicesSection'));
const EntertainmentSection = lazy(() => import('./EntertainmentSection'));
const FAQSection = lazy(() => import('./FAQSection'));
const ContactSection = lazy(() => import('./ContactSection'));

const SectionPlaceholder = () => (
    <div className="py-20 flex justify-center">
        <div className="w-12 h-12 border-4 border-primary-orange/20 border-t-primary-orange rounded-full animate-spin"></div>
    </div>
);

const Home = () => {
    return (
        <>
            <SEO />
            <HeroSection />
            <Suspense fallback={<SectionPlaceholder />}>
                <PricingStats />
                <PricingSection />
                <CTASection />
                <PricingGuarantee />
                <FeaturesSection />
                <DevicesSection />
                <EntertainmentSection />
                <FAQSection />
                <ContactSection />
            </Suspense>
        </>
    );
};

export default Home;
