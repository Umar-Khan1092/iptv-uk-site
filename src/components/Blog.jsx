import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCalendarAlt, FaUser, FaClock, FaCheckCircle, FaQuestionCircle, FaArrowLeft, FaChevronRight } from 'react-icons/fa';

const Blog = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Scroll to top when view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isExpanded]);

    if (!isExpanded) {
        return (
            <div className="pt-24 pb-20 bg-slate-950 min-h-screen flex items-center justify-center px-4">
                <Helmet>
                    <title>IPTV UK Blog | Professional Streaming Guides</title>
                    <meta name="description" content="Explore our professional guides about IPTV streaming, setup, and more in the UK for 2026." />
                </Helmet>

                <div className="max-w-5xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-primary-orange font-black uppercase tracking-[0.2em] text-sm mb-4">Our Professional Blog</h1>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Expert Streaming Guides</h2>
                        <div className="w-24 h-1.5 bg-primary-orange mx-auto rounded-full"></div>
                    </div>

                    <div
                        className="relative group cursor-pointer rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5 transition-all duration-700 hover:ring-primary-orange/30"
                        onClick={() => setIsExpanded(true)}
                    >
                        {/* High Quality Image */}
                        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                            <img
                                src="/used%20images/blog1.avif"
                                alt="What Is IPTV Guide"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>

                        {/* Dark Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                        {/* Middle to Lower Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center md:text-left">
                            <div className="max-w-3xl">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                                    <span className="bg-primary-orange text-slate-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        Major Guide
                                    </span>
                                    <span className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                                        <FaCalendarAlt className="text-primary-orange" /> March 7, 2026
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-primary-orange transition-colors">
                                    What Is IPTV? A Complete Beginner’s Guide to IPTV in the UK (2026)
                                </h3>

                                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-8 line-clamp-2 md:line-clamp-none opacity-90">
                                    Learn what IPTV is, how it works, its benefits, legality in the UK, and how to choose the best IPTV service in 2026. Complete beginner guide with FAQs.
                                </p>

                                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-white font-black uppercase tracking-widest text-sm group-hover:bg-primary-orange group-hover:text-slate-950 transition-all duration-300 hover:scale-105 active:scale-95">
                                    Expand Full Blog <FaChevronRight className="text-xs" />
                                </div>
                            </div>
                        </div>

                        {/* Professional Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-orange/5 blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
            <Helmet>
                <title>What Is IPTV? A Beginner's Guide to IPTV in the UK (2026) | IPTV UK</title>
                <meta name="description" content="Learn what IPTV is, how it works, its benefits, legality in the UK, and how to choose the best IPTV service in 2026. Complete beginner guide with FAQs." />
                <meta name="keywords" content="IPTV UK, best IPTV UK, IPTV in UK, IPTV UK trial, IPTV subscription UK, IPTV streaming UK" />
                <link rel="canonical" href="https://iptvuk.sbs/blog" />
            </Helmet>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => setIsExpanded(false)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white mb-10 group transition-colors uppercase tracking-widest font-bold text-xs"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Blog List
                </button>

                {/* Blog Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-primary-orange mb-6 font-bold uppercase tracking-widest text-sm">
                        <span>Streaming Guide</span>
                        <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                        <span>IPTV UK</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                        What Is IPTV? A Complete Beginner’s Guide to IPTV in the UK (2026)
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-y border-white/10 py-6">
                        <div className="flex items-center gap-2">
                            <FaUser className="text-primary-orange" />
                            <span>By Admin</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-primary-orange" />
                            <span>March 7, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-primary-orange" />
                            <span>10 Min Read</span>
                        </div>
                    </div>
                </header>

                {/* Main Featured Image - Refined and Professional */}
                <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden mb-16 shadow-2xl border border-white/10 ring-1 ring-white/5 p-2 bg-slate-900/50">
                    <img
                        src="/used%20images/blog1.avif"
                        alt="What Is IPTV? Beginner Guide for UK Users"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">What Is IPTV? A Beginner’s Guide for UK Users (2026)</h2>
                        <p>
                            Television has changed dramatically over the past decade. Traditional cable and satellite TV are slowly being replaced by internet-based streaming services that offer more flexibility and a wider selection of content. One of the most popular technologies driving this change is IPTV.
                        </p>
                        <p>
                            IPTV has become increasingly popular in the United Kingdom as more households switch to internet-based entertainment solutions. Whether you want access to live TV channels, sports events, movies, or international programming, IPTV services offer a convenient and affordable alternative to traditional broadcasting methods at <span className="text-primary-orange font-bold">iptvuk.sbs</span>.
                        </p>
                        <p>
                            This beginner guide will explain everything you need to know about IPTV in the UK in 2026. From how IPTV works to its advantages, legality, and how to choose the best IPTV provider, this article covers all the essential information for newcomers.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">What Is IPTV?</h2>
                        <p>
                            IPTV stands for <strong>Internet Protocol Television</strong>. It is a technology that delivers television content through the internet rather than traditional cable, satellite, or terrestrial broadcasting systems.
                        </p>
                        <p>
                            Instead of receiving signals through satellite dishes or cable connections, IPTV streams television channels and video content using an internet connection. This allows users to watch their favourite programs on various devices such as smart TVs, smartphones, tablets, laptops, and streaming boxes.
                        </p>
                        <p>
                            In simple terms, IPTV converts television signals into digital data that is transmitted through internet networks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary-orange flex items-center justify-center text-slate-950 text-sm">01</span>
                            How IPTV Works
                        </h2>
                        <p>
                            Understanding how IPTV works is important for beginners. Traditional TV services send signals via satellite or cable networks. IPTV, however, uses internet protocols to deliver video content directly to your device.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {[
                                { title: 'Content Acquisition', desc: 'TV channels, movies, and programs are collected from broadcasters.' },
                                { title: 'Encoding and Compression', desc: 'The content is converted into digital format and compressed for efficient streaming.' },
                                { title: 'Streaming Servers', desc: 'IPTV providers host the content on high-performance servers.' },
                                { title: 'User Access', desc: 'Users access the IPTV service using an application or IPTV player.' },
                                { title: 'Streaming Delivery', desc: 'The content is streamed through the internet to the user’s device in real time.' }
                            ].map((step, i) => (
                                <div key={i} className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 italic text-slate-400">
                            Because IPTV works through the internet, the quality of the stream depends heavily on your internet speed and the provider’s servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Types of IPTV Services</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center text-primary-orange">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Live TV</h3>
                                    <p>Live IPTV streams television channels in real time, similar to traditional broadcasting. Users can watch news channels, sports matches, entertainment channels, and more. Many IPTV providers in the UK offer access to hundreds or even thousands of live TV channels from different countries.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center text-primary-orange">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Video on Demand (VOD)</h3>
                                    <p>Video on Demand allows users to choose movies, series, and other content whenever they want. Instead of waiting for scheduled broadcasts, users can simply select the program and start watching instantly. This feature works similarly to platforms like Netflix or Amazon Prime.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center text-primary-orange">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Time-Shifted TV</h3>
                                    <p>Time-shifted TV allows users to watch previously aired programs. For example, if you missed a football match or a TV show, you can watch later through the IPTV service’s archive or catch-up feature.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-indigo-950/50 to-slate-950 p-8 rounded-2xl border border-primary-orange/20">
                        <h2 className="text-2xl font-bold text-white mb-6">Why IPTV Is Becoming Popular in the UK</h2>
                        <p className="mb-6">IPTV adoption has grown rapidly across the United Kingdom in recent years. There are several reasons for this trend:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "More Affordable Than Cable",
                                "Large Channel Selection",
                                "Flexible Viewing",
                                "On-Demand Content"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <FaCheckCircle className="text-primary-orange flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Devices That Support IPTV</h2>
                        <p>One of the biggest advantages of IPTV is device compatibility. Most IPTV services can be used on the following devices:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                            {[
                                { name: "Smart TVs" },
                                { name: "Amazon Firestick" },
                                { name: "Android TV Boxes" },
                                { name: "Smartphones" },
                                { name: "Tablets" },
                                { name: "Laptops" }
                            ].map((device, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-primary-orange/10 transition-colors border border-white/10 group-hover:border-primary-orange/30">
                                        <FaCheckCircle className="text-primary-orange" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-300">{device.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-slate-900/80 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6">Internet Speed Requirements</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">SD Streaming</span>
                                <span className="text-primary-orange font-black">5 Mbps</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-primary-orange/30 shadow-glow">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">HD Streaming</span>
                                <span className="text-primary-orange font-black">10 Mbps</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">4K Streaming</span>
                                <span className="text-primary-orange font-black">25 Mbps+</span>
                            </div>
                        </div>
                        <p className="mt-6 text-sm italic text-slate-400 text-center">For the best experience, a fiber broadband connection is recommended.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Is IPTV Legal in the UK?</h2>
                        <p>The legality of IPTV in the UK depends on the type of service being used.</p>
                        <p><strong>IPTV technology itself is completely legal.</strong> Many legitimate companies use IPTV technology to stream content online. However, services that distribute copyrighted channels without permission may violate copyright laws.</p>
                        <p>To stay safe, users should always choose legitimate IPTV providers like <span className="text-primary-orange font-bold">iptvuk.sbs</span> that have the proper broadcasting rights.</p>
                    </section>

                    <section className="bg-primary-orange/10 p-10 rounded-3xl border border-primary-orange/20 relative overflow-hidden">
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl font-black text-white mb-6">Ready to Experience the Best IPTV in the UK?</h2>
                            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">Join thousands of happy UK customers and start streaming your favourite channels in 4K today.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => window.open('https://wa.me/447412300833', '_blank')}
                                    className="btn-primary"
                                >
                                    Get Started Now
                                </button>
                                <button
                                    onClick={() => window.open('https://wa.me/447412300833', '_blank')}
                                    className="px-8 py-3 rounded-lg border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-all"
                                >
                                    Get Free Trial
                                </button>
                            </div>
                        </div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl"></div>
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-950/40 rounded-full blur-3xl"></div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { q: "What is IPTV in the UK?", a: "IPTV is a technology that delivers television content over the internet instead of traditional cable or satellite systems." },
                                { q: "Is IPTV better than cable TV?", a: "IPTV offers more flexibility, a wider channel selection, and often lower subscription costs compared to traditional cable services." },
                                { q: "Do I need special equipment?", a: "Most IPTV services only require a compatible device such as a smart TV, smartphone, Firestick, or Android box." },
                                { q: "What speed is required?", a: "A minimum of 10 Mbps is recommended for HD streaming, while 25 Mbps or higher is ideal for 4K content." },
                                { q: "Can I watch UK channels?", a: "Yes, many IPTV providers offer a large selection of UK channels including sports, entertainment, and news networks." },
                                { q: "Is IPTV safe to use?", a: "IPTV is safe if you use reliable and legitimate service providers." }
                            ].map((faq, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-2xl border border-white/10">
                                    <h4 className="flex items-start gap-3 text-white font-bold mb-3">
                                        <FaQuestionCircle className="text-primary-orange mt-1 flex-shrink-0" />
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-slate-400 text-sm pl-8">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t border-white/10">
                    <div className="flex justify-between items-center font-bold text-slate-500 uppercase tracking-widest text-xs">
                        <span>© 2026 IPTVUK.SBS</span>
                        <div className="flex gap-6">
                            <a href="/privacy-policy" className="hover:text-primary-orange transition-colors">Privacy</a>
                            <a href="/terms-of-service" className="hover:text-primary-orange transition-colors">Terms</a>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
};

export default Blog;
