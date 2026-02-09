import React from 'react';
import { FaCreditCard, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import { SiPaypal } from 'react-icons/si';

const CTASection = () => {
    const paymentMethods = [
        { name: 'Card Payments', icon: <FaCreditCard className="text-3xl text-primary-orange" /> },
        { name: 'PayPal', icon: <SiPaypal className="text-3xl text-accent-blue" /> },
        { name: 'Bank Transfer', icon: <FaCreditCard className="text-3xl text-accent-green" /> },
    ];

    return (
        <>
            {/* Payment Methods */}
            <section className="py-16 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <FaShieldAlt className="text-2xl text-primary-orange" />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Secure Payments</h3>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-base font-medium">
                            Safe and encrypted transactions for your peace of mind.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl shadow-2xl flex items-center justify-center border border-white/5 transition-all duration-300 group-hover:border-primary-orange/50 group-hover:-translate-y-2">
                                <FaCreditCard className="text-3xl text-primary-orange transition-transform group-hover:scale-110" />
                            </div>
                            <span className="text-sm font-bold text-slate-300 tracking-widest uppercase">Cards</span>
                        </div>

                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl shadow-2xl flex items-center justify-center border border-white/5 transition-all duration-300 group-hover:border-primary-orange/50 group-hover:-translate-y-2">
                                <SiPaypal className="text-3xl text-primary-orange transition-transform group-hover:scale-110" />
                            </div>
                            <span className="text-sm font-bold text-slate-300 tracking-widest uppercase">PayPal</span>
                        </div>

                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl shadow-2xl flex items-center justify-center border border-white/5 transition-all duration-300 group-hover:border-primary-orange/50 group-hover:-translate-y-2">
                                <FaMoneyBillWave className="text-3xl text-primary-orange transition-transform group-hover:scale-110" />
                            </div>
                            <span className="text-sm font-bold text-slate-300 tracking-widest uppercase">Transfer</span>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default CTASection;
