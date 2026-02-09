import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPlay } from 'react-icons/fa';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Installation Guide', href: '/installation-guide' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Features', href: '/#features' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Contact', href: '/#contact' },
    ];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (link.href === '/installation-guide' || link.href === '/pricing') {
            navigate(link.href);
            return;
        }

        if (link.href === '/') {
            if (location.pathname !== '/') {
                navigate('/');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        if (link.href.includes('#')) {
            const hash = link.href.split('#')[1];
            if (location.pathname !== '/') {
                navigate('/#' + hash);
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="bg-slate-950/80 backdrop-blur-lg border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER ROW (FIXED HEIGHT) */}
                <div className="flex justify-between items-center h-20">

                    {/* LOGO (BIG BUT HEADER HEIGHT STAYS FIXED) */}
                    <Link
                        to="/"
                        className="flex items-center h-full group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img
                            src="/used images/logo.png"
                            alt="IPTV UK Logo"
                            className="h-[105px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`text-slate-300 hover:text-white font-bold transition-all duration-300 text-sm uppercase tracking-widest relative group pb-1 ${(location.pathname === '/' && link.href === '/') || location.pathname === link.href
                                    ? 'text-white'
                                    : ''
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-orange transition-all duration-300 ${(location.pathname === '/' && link.href === '/') || location.pathname === link.href
                                    ? 'w-full'
                                    : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA BUTTONS */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={() => window.open('https://wa.me/447412300833', '_blank', 'noopener,noreferrer')}
                            className="btn-primary text-sm tracking-widest uppercase shadow-primary-orange/20"
                        >
                            Subcribe Now
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="lg:hidden text-slate-300 hover:text-white transition-colors p-2 bg-white/5 rounded-xl border border-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <FaTimes className="text-xl" />
                        ) : (
                            <FaBars className="text-xl" />
                        )}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-white/5 bg-slate-900 rounded-b-2xl shadow-2xl animate-in slide-in-from-top duration-300">
                        <nav className="flex flex-col space-y-2 px-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="text-slate-400 hover:text-white font-bold transition-all duration-200 px-4 py-3 hover:bg-white/5 rounded-xl uppercase tracking-widest text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 px-4">
                                <button
                                    onClick={() => window.open('https://wa.me/447412300833', '_blank', 'noopener,noreferrer')}
                                    className="w-full btn-primary text-sm tracking-widest uppercase"
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </nav>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;
