import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaComments, FaClock, FaWhatsapp } from 'react-icons/fa';
import IconBox from './shared/IconBox';
import { CONTACT, TIMING } from '../constants/config';

const ContactSection = ({ showHeading = true, compact = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate validation delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // User requested to type message themselves, so we just open the chat
        window.open(CONTACT.WHATSAPP_URL, '_blank');
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className={`${compact ? 'py-12 bg-transparent' : 'py-16 sm:py-24 bg-slate-950'}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? 'max-w-5xl' : ''}`}>
                {showHeading && (
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                            Get in <span className="text-primary-orange">Touch</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Have questions or need technical assistance? Our team is standing by 24/7 to help you optimize your viewing experience.
                        </p>
                    </div>
                )}

                <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 ${compact ? 'bg-slate-900/60 p-8 sm:p-14 rounded-[2.5rem] shadow-2xl border border-white/5' : ''}`}>
                    {/* Left - Contact Info */}
                    <div className="space-y-10">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Contact <span className="text-primary-orange">Hub</span></h3>

                            {/* Email */}
                            <div className="flex items-start gap-5 group">
                                <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                                    <IconBox icon={<FaEnvelope className="text-xl" />} variant="primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs opacity-60">General Inquiries</h4>
                                    <a href={`mailto:${CONTACT.EMAIL}`} className="text-xl font-bold text-white hover:text-primary-orange transition-colors">
                                        {CONTACT.EMAIL}
                                    </a>
                                    <p className="text-slate-400 text-sm font-medium italic">Response within 12 hours</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-5 group">
                                <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                                    <IconBox icon={<FaPhone className="text-xl" />} variant="primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs opacity-60">Direct Support</h4>
                                    <a href={`tel:${CONTACT.PHONE}`} className="text-xl font-bold text-white hover:text-primary-orange transition-colors">
                                        {CONTACT.PHONE}
                                    </a>
                                    <p className="text-slate-400 text-sm font-medium italic">Available for instant calls</p>
                                </div>
                            </div>

                            {/* Live Chat */}
                            <div className="flex items-start gap-5 group">
                                <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                                    <IconBox icon={<FaComments className="text-xl" />} variant="primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs opacity-60">Real-time Assistance</h4>
                                    <p className="text-xl font-bold text-white">Live Dashboard Chat</p>
                                    <p className="text-slate-400 text-sm font-medium italic">Average response: 3 mins</p>
                                </div>
                            </div>
                        </div>

                        {/* Our Hours */}
                        <div className="bg-slate-900/40 rounded-3xl p-8 border border-white/5 shadow-inner">
                            <h4 className="font-black text-white mb-6 flex items-center gap-3 uppercase tracking-widest text-sm">
                                <FaClock className="text-primary-orange text-lg" />
                                Operational Matrix
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">Client Relations</span>
                                    <div className="h-[1px] flex-grow mx-4 bg-white/5"></div>
                                    <span className="font-bold text-white bg-white/5 px-3 py-1 rounded-lg text-xs tracking-tighter">{TIMING.SUPPORT_HOURS}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">Technical Systems</span>
                                    <div className="h-[1px] flex-grow mx-4 bg-white/5"></div>
                                    <span className="font-bold text-white bg-white/5 px-3 py-1 rounded-lg text-xs tracking-tighter">{TIMING.SUPPORT_HOURS}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">Sales Network</span>
                                    <div className="h-[1px] flex-grow mx-4 bg-white/5"></div>
                                    <span className="font-bold text-white bg-white/5 px-3 py-1 rounded-lg text-xs tracking-tighter">{TIMING.SALES_HOURS}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
                        {/* Interactive Shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange/0 via-primary-orange/0 to-primary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter relative z-10">
                            Satellite <span className="text-primary-orange text-lg align-top ml-1">Connect</span>
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-1">
                                        Identity
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-slate-950/50 text-white px-6 py-4 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange transition-all duration-300 placeholder:text-slate-600 font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-1">
                                        Electronic Mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full bg-slate-950/50 text-white px-6 py-4 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange transition-all duration-300 placeholder:text-slate-600 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-1">
                                    Objective
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Brief reason for contact"
                                    className="w-full bg-slate-950/50 text-white px-6 py-4 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange transition-all duration-300 placeholder:text-slate-600 font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-1">
                                    Transmission Data
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Type your message here..."
                                    className="w-full bg-slate-950/50 text-white px-6 py-4 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange transition-all duration-300 placeholder:text-slate-600 font-medium resize-none shadow-inner"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary-orange hover:bg-primary-orange-dark disabled:bg-slate-800 disabled:cursor-not-allowed text-slate-950 font-black py-5 px-8 rounded-2xl transition-all duration-300 shadow-2xl shadow-primary-orange/20 flex items-center justify-center gap-4 active:scale-95 uppercase tracking-widest text-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Linking...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaWhatsapp className="text-2xl" />
                                        Establish Connection
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
