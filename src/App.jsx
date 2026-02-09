import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Lazy load page components to optimize bundle size
const Home = lazy(() => import('./components/Home'));
const InstallationGuide = lazy(() => import('./components/InstallationGuide'));
const PricingPage = lazy(() => import('./components/PricingPage'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./components/RefundPolicy'));
const DMCAPolicy = lazy(() => import('./components/DMCAPolicy'));

// Loading fallback component
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary-orange border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <div className="min-h-screen bg-slate-950">
            <ScrollToTop />
            <Header />

            <main>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/installation-guide" element={<InstallationGuide />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/refund-policy" element={<RefundPolicy />} />
                        <Route path="/dmca-policy" element={<DMCAPolicy />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer />

            {/* Fixed WhatsApp Button */}
            <WhatsAppButton fixed />
        </div>
    );
}

export default App;
