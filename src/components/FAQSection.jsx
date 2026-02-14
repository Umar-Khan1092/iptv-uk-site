import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is IPTV?",
            answer: "IPTV (Internet Protocol Television) watches live TV channels and delivers quality content. Allows you to watch through your internet instead of cable or satellite."
        },
        {
            question: "What devices can I use with IPTVUK.SBS ?",
            answer: (
                <>
                    You can use <a href="https://iptvuk.sbs" target="_blank" rel="noopener noreferrer">
                        IPTVUK.sbs
                    </a> IPTV on Smart TVs, Android Boxes, Fire TV Stick, iOS/Android phones, and web browsers.
                </>
            )
        },

        {
            question: "Is It worth Paying for IPTV?",
            answer: "Absolutely! Paying for IPTV allows you to watch high-quality channels, live sports, your favourite TV shows, and the most recent films without interruption."
        },
        {
            question: "What is the best IPTV in the UK?",
            answer: "Since 2021, IPTVUKSBS has been rated as the UK's top IPTV provider. People trust us because we never sacrifice quality or customer happiness."
        },
        {
            question: "Which countries are present?",
            answer: "Netherlands, Belgium, France, UK, Germany, Switzerland Austria Poland Spain Malta Portugal Italy USA, Canada, Australia, New Zealand Arabic India Pakistan Iran Turkey Azerbaycan Kurdistan Africa Afghanistan, Armenia Exyu Slovenia Albania Greece Latino Brazil Caribbean Suriname Sweden Denmark Norway Finland Czech Bulgaria Romania Hungary Russia Georgia/Kazakh Ukraine Lithuania Latvia Estonia China/HK Malaysia Philippines Indonesia Korea Thailand Taiwan Vietnam"
        },
        {
            question: "Do I need a VPN?",
            answer: "In most cases, a VPN is not required as our service is secure and private. However, if your ISP blocks IPTV traffic (common in the UK with some providers during football matches), a VPN may be beneficial. We can recommend good VPNs if needed."
        },
        {
            question: "Is IPTV legal in the United Kingdom?",
            answer: "Yes, using our IPTV streaming service in the UK is entirely legal. We adhere to all UK broadcasting regulations and maintain necessary license arrangements. You're gaining authentic access to VOD content and live channels."
        },
        {
            question: "Do I require a certain internet speed?",
            answer: "For SD, HD, and 4K content, we advise a minimum internet speed of 10 Mbps, 15 Mbps, and 25 Mbps, respectively. For uninterrupted viewing, a steady internet connection is more crucial than raw speed."
        },
    ];

    return (
        <section id="faq" className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                        Frequently Asked <span className="text-primary-orange">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Got a question? We've got answers. If you don't see your question here, contact our 24/7 support.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${openIndex === index ? 'bg-slate-950 border-primary-orange/30 shadow-2xl shadow-primary-orange/5' : 'bg-slate-950/40 border-white/5 hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="group w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
                            >
                                <span className="text-lg font-bold text-white transition-colors group-hover:text-primary-orange pr-8">
                                    {faq.question}
                                </span>

                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary-orange text-slate-950' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}>
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
