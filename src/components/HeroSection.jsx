import React from "react";
import CountdownTimer from "./CountdownTimer";
import { CONTACT } from "../constants/config";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-slate-950 min-h-[650px] flex items-center"
        >
            {/* Decorative glows (no layout impact) */}
            <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-orange/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                            Premium IPTV UK <br />
                            <span className="gradient-text">Fast & Stable</span>
                        </h1>

                        {/* FIXED HEADING ORDER */}
                        <h2 className="text-xl lg:text-2xl font-semibold text-primary-orange">
                            4K & 8K UHD Entertainment
                        </h2>

                        <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                            Enjoy premium IPTV with 32,000+ channels, VOD, and ultra-stable
                            streaming. Built-in VPN protection ensures smooth playback with
                            zero buffering.
                        </p>

                        {/* PRIMARY CTA */}
                        <button
                            onClick={() =>
                                window.open(CONTACT.WHATSAPP_URL, "_blank", "noopener,noreferrer")
                            }
                            className="btn-primary text-slate-950 px-8 py-3 text-lg glow-on-hover"
                            aria-label="Subscribe Now"
                        >
                            Subscribe Now
                        </button>

                        {/* FLASH SALE CARD */}
                        <div className="mt-10 max-w-md rounded-3xl bg-gradient-to-br from-primary-orange via-pink-500 to-purple-600 p-[2px]">
                            <div className="rounded-3xl bg-slate-950 p-6 text-center space-y-4">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-3xl">⚡</span>
                                    <h3 className="text-2xl font-black text-white">
                                        Flash Sale
                                    </h3>
                                </div>

                                <p className="text-white/90 font-semibold italic">
                                    12 Months + 2 Months FREE
                                </p>

                                <CountdownTimer />

                                <button
                                    onClick={() =>
                                        window.open(CONTACT.WHATSAPP_URL, "_blank", "noopener,noreferrer")
                                    }
                                    className="btn-primary text-slate-950 text-sm tracking-widest uppercase shadow-primary-orange/20 font-black py-3 rounded-xl w-full"
                                >
                                    CLAIM OFFER NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE (LCP OPTIMIZED) */}
                    <div className="relative group flex justify-center lg:justify-end">
                        {/* Interactive Background Glow */}
                        <div className="absolute -inset-4 bg-primary-orange/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

                        <div className="relative float">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange/20 to-transparent rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />

                            <img
                                src="/used images/hero_section_image-640.webp"
                                srcset="
                                   /used images/hero_section_image-640.webp 640w,
                                   /used images/hero_section_image-1024.webp 1024w,
                                   /used images/hero_section_image-1536.webp 1536w
                                 "
                                alt="Premium IPTV streaming on multiple devices"
                                width="736"
                                height="491"
                                fetchpriority="high"
                                loading="eager"
                                draggable="false"
                                className="relative rounded-3xl shadow-2xl object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2 border border-white/5"
                                style={{
                                    maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                                }}
                            />

                            {/* Reflection/Glow Effect Overlay */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}