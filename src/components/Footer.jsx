import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const footerLinks = {
        'Quick Links': [
            { name: 'Home', href: '/' },
            { name: 'Installation Guide', href: '/installation-guide' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Features', href: '/#features' },
        ],
        'Legal': [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms of Service', href: '/terms-of-service' },
            { name: 'Refund Policy', href: '/refund-policy' },
            { name: 'DMCA Policy', href: '/dmca-policy' },
        ],
    };

    const contactLinks = [
        { name: 'support@iptvuk.sbs', href: 'mailto:support@iptvuk.sbs', icon: <FaEnvelope className="text-primary-orange" /> },
        { name: '+44 7412 300833', href: 'https://wa.me/447412300833', icon: <FaPhone className="text-primary-orange" /> },
    ];

    const handleLinkClick = (e, link) => {
        if (link.href.startsWith('http') || link.href.startsWith('/pdf')) return;

        e.preventDefault();

        if (['/installation-guide', '/pricing', '/terms-of-service', '/privacy-policy', '/refund-policy', '/dmca-policy'].includes(link.href)) {
            navigate(link.href);
            window.scrollTo(0, 0);
            return;
        }

        if (link.href === '/') {
            location.pathname !== '/' ? navigate('/') : window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <footer className="bg-slate-950">
            <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-t-[1.5rem] sm:rounded-t-[2rem] overflow-hidden border-t border-white/10">
                <div className="px-6 sm:px-12 pt-16 sm:pt-20 pb-10 sm:pb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Brand Column */}
                        <div className="text-left space-y-6">
                            <Link
                                to="/"
                                className="flex items-center"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <img
                                    src="/used images/logo.webp"
                                    alt="IPTV UK Logo"
                                    width="150"
                                    height="100"
                                    className="h-[100px] w-auto object-contain -mt-8"
                                />
                            </Link>

                            <div className="-mt-3 space-y-6">
                                <p className="text-slate-200 text-sm leading-relaxed max-w-xs">
                                    The UK's #1 premium IPTV service provider. Access 28,000+ channels with crystal clear quality and zero buffering.
                                </p>

                                {/* Social Links */}
                                <div className="flex gap-3">
                                    {[
                                        { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61577772525090", label: "Facebook" },
                                        { icon: <FaTwitter />, href: "https://www.pinterest.com/IPTVUKSBS/", label: "Pinterest" },
                                        { icon: <FaInstagram />, href: "https://www.instagram.com/harry_uks/", label: "Instagram" },
                                        { icon: <FaYoutube />, href: "https://www.youtube.com/@iptvuksbs", label: "YouTube" }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="w-10 h-10 bg-slate-950/70 hover:bg-primary-orange border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                        >
                                            <span className="text-lg text-white group-hover:scale-110 transition-transform">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="text-left">
                                <h2 className="font-bold text-lg mb-6 relative inline-block text-white">
                                    {title}
                                    <span className="absolute bottom-[-8px] left-0 w-8 h-1 bg-primary-orange rounded-full"></span>
                                </h2>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleLinkClick(e, link)}
                                                className="text-slate-300 hover:text-primary-orange transition-colors text-sm flex items-center gap-2 group"
                                                target={
                                                    link.href.startsWith('http') || link.href.startsWith('/pdf')
                                                        ? '_blank'
                                                        : undefined
                                                }
                                                rel={
                                                    link.href.startsWith('http') || link.href.startsWith('/pdf')
                                                        ? 'noopener noreferrer'
                                                        : undefined
                                                }
                                            >
                                                <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-primary-orange transition-colors"></span>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Contact */}
                        <div className="text-left">
                            <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/10 space-y-6">
                                <h2 className="font-bold text-lg flex items-center gap-2 text-white">
                                    Support Center
                                    <span className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></span>
                                </h2>
                                <div className="space-y-4">
                                    {contactLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-primary-orange/20 flex items-center justify-center group-hover:bg-primary-orange/30 transition-colors">
                                                {link.icon}
                                            </div>
                                            <span className="text-sm text-slate-200 group-hover:text-white transition-colors truncate">
                                                {link.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                                <p className="text-[11px] text-slate-300 italic">
                                    Our support team works round-the-clock to ensure your entertainment never stops.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
