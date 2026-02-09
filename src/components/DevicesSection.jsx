import React from 'react';
import { FaAndroid, FaApple, FaWindows, FaXbox, FaDesktop } from 'react-icons/fa';
import { SiSamsung, SiLg, SiNvidia, SiAmazon } from 'react-icons/si';
import { MdTv } from 'react-icons/md';

const DevicesSection = () => {
    const devices = [
        { name: 'Fire TV Stick', icon: <div className="flex items-center gap-1"><SiAmazon className="text-2xl" /><span className="font-bold">FireTV</span></div> },
        { name: 'Samsung Smart TV', icon: <div className="flex items-center gap-1"><SiSamsung className="text-4xl" /></div> },
        { name: 'Android TV', icon: <div className="flex items-center gap-1"><FaAndroid className="text-2xl" /><span className="font-bold">Android TV</span></div> },
        { name: 'iOS', icon: <div className="flex items-center gap-1"><FaApple className="text-2xl" /><span className="font-bold">iOS</span></div> },
        { name: 'MagBox', icon: <div className="flex items-center gap-1"><MdTv className="text-2xl" /><span className="font-bold">MagBox</span></div> },
        { name: 'Nvidia Shield', icon: <div className="flex items-center gap-1"><SiNvidia className="text-3xl" /><span className="font-bold">SHIELD</span></div> },
        { name: 'Android', icon: <div className="flex items-center gap-1"><FaAndroid className="text-3xl text-green-500" /><span className="font-bold">Android</span></div> },
        { name: 'IPTV Smarters', icon: <div className="flex items-center gap-1"><span className="font-bold text-sm">IPTV SMARTERS</span></div> },
        { name: 'Xbox Live', icon: <div className="flex items-center gap-1"><FaXbox className="text-2xl text-green-600" /><span className="font-bold">XBOX LIVE</span></div> },
        { name: 'Webplayer', icon: <div className="flex items-center gap-1"><FaDesktop className="text-2xl text-purple-600" /><span className="font-bold uppercase">Webplayer</span></div> },
        { name: 'LG Smart TV', icon: <div className="flex items-center gap-1"><SiLg className="text-3xl text-pink-600" /><span className="font-bold">Smart TV</span></div> },
        { name: 'Windows', icon: <div className="flex items-center gap-1"><FaWindows className="text-2xl text-blue-400" /><span className="font-bold">Windows</span></div> },
    ];

    const features = [
        "Stable Server",
        "Security and Privacy",
        "26 000 live TV channels",
        "Electronic Program guide(EPG)"
    ];

    return (
        <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-16 sm:py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-orange/5 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col xl:flex-row items-center gap-12 lg:gap-16">

                    {/* Left: Device Grid */}
                    <div className="w-full xl:w-3/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {devices.map((device, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl h-20 flex items-center justify-center text-white shadow-xl hover:bg-white/10 hover:border-primary-orange/50 hover:scale-105 transition-all duration-300 px-4 group"
                            >
                                <div className="group-hover:scale-110 transition-transform duration-300 filter brightness-100 group-hover:brightness-125">
                                    {device.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Content */}
                    <div className="w-full xl:w-2/5 text-white">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-tight mb-4">
                            Universal<br />
                            <span className="text-primary-orange">Compatibility</span><br />
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-400 mb-8 font-medium">
                            Streaming flawlessly on all your favourite devices at unbeatable prices.
                        </p>

                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-900/50 border border-white/5 text-white font-bold text-center py-4 rounded-2xl shadow-lg text-lg transform hover:-translate-y-1 transition-all duration-300 hover:border-primary-orange/30 group"
                                >
                                    <span className="group-hover:text-primary-orange transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DevicesSection;
