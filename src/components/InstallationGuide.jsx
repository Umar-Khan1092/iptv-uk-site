import React, { useState, useRef } from 'react';
import {
    FaFire, FaAndroid, FaTv, FaWindows, FaApple, FaLaptop,
    FaChevronDown, FaChevronUp, FaWhatsapp,
    FaWifi, FaExclamationTriangle, FaCloudDownloadAlt, FaPlayCircle,
    FaListUl, FaBroom, FaInfoCircle, FaSatelliteDish, FaChromecast
} from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';

const InstallationGuide = () => {
    const [activeDevice, setActiveDevice] = useState('firestick');
    const [openStep, setOpenStep] = useState(null);
    const instructionsRef = useRef(null);

    const devices = [
        {
            id: 'firestick',
            name: 'Firestick / Fire TV / Fire Cube',
            sub: 'Popular Apps: IPTV Smarters Pro (APK), TiviMate (APK)...',
            icon: <FaFire className="text-4xl text-primary-orange" />
        },
        {
            id: 'android',
            name: 'Android Devices (Phones, Boxes, TVs)',
            sub: 'Popular Apps: IPTV Smarters Pro, TiviMate...',
            icon: <FaAndroid className="text-4xl text-primary-orange" />
        },
        {
            id: 'smarttv',
            name: 'Smart TVs (All Brands)',
            sub: 'Popular Apps: IPTV Smarters Pro, TiviMate...',
            icon: <FaTv className="text-4xl text-primary-orange" />
        },
        {
            id: 'windows',
            name: 'Windows PCs & Laptops',
            sub: 'Popular Apps: VLC Media Player, IPTV Smarters Pro...',
            icon: <FaWindows className="text-4xl text-primary-orange" />
        },
        {
            id: 'ios',
            name: 'iOS (iPhones, iPads, Apple TV)',
            sub: 'Popular Apps: GSE Smart IPTV, IPTV Smarters Player...',
            icon: <FaApple className="text-4xl text-primary-orange" />
        },
        {
            id: 'macos',
            name: 'macOS (MacBooks, iMacs)',
            sub: 'Popular Apps: VLC Media Player, GSE Smart IPTV...',
            icon: <FaLaptop className="text-4xl text-primary-orange" />
        },
        {
            id: 'mag',
            name: 'MAG Devices (STB, TVIP, Formuler)',
            sub: 'Popular Apps: STB Emulator, Built-in MAG Portal',
            icon: <BsBoxSeam className="text-4xl text-primary-orange" />
        },
        {
            id: 'enigma',
            name: 'Enigma2 / ZGEMMA',
            sub: 'Popular Apps: PuTTY (Telnet/SSH), FileZilla (FTP)...',
            icon: <FaSatelliteDish className="text-4xl text-primary-orange" />
        },
        {
            id: 'chromecast',
            name: 'Chromecast with Google TV',
            sub: 'Popular Apps: IPTV Smarters Pro, TiviMate...',
            icon: <FaChromecast className="text-4xl text-primary-orange" />
        },
    ];

    // Generic steps content - in a real app these would be customized per device
    const genericSteps = [
        { title: "Step 1: Download App", content: "Download the recommended application for your device from the dedicated App Store or Website." },
        { title: "Step 2: Install & Open", content: "Install the application and open it on your device along with our service credentials." },
        { title: "Step 3: Login to Service", content: "Enter the Username, Password, and Server URL provided in your email/WhatsApp to login." },
        { title: "Step 4: Enjoy Streaming", content: "Once logged in, your playlist will load automatically. You can now start streaming live TV and VOD." }
    ];

    const troubleshootTips = [
        { icon: <FaWifi className="text-red-500 text-xl" />, text: "Check your internet connection. A stable connection of at least 15-20 Mbps is recommended for HD streaming." },
        { icon: <FaExclamationTriangle className="text-yellow-500 text-xl" />, text: "Ensure your M3U URL or Xtream Codes API details are entered correctly. They are case-sensitive." },
        { icon: <FaCloudDownloadAlt className="text-blue-500 text-xl" />, text: "Update your IPTV player app to the latest version." },
        { icon: <FaPlayCircle className="text-green-500 text-xl" />, text: "Restart your device and your router/modem." },
        { icon: <FaListUl className="text-purple-500 text-xl" />, text: "If using a VPN, try connecting to a different server or temporarily disabling it to see if it resolves the issue." },
        { icon: <FaBroom className="text-pink-500 text-xl" />, text: "Clear the cache of your IPTV player app." },
        { icon: <FaInfoCircle className="text-gray-500 text-xl" />, text: "Some ISPs may block IPTV services. If you suspect this, a VPN can often help bypass these restrictions." },
    ];

    const handleDeviceClick = (id) => {
        setActiveDevice(id);
        setOpenStep(null);
        if (instructionsRef.current) {
            instructionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const toggleStep = (index) => {
        setOpenStep(openStep === index ? null : index);
    };

    return (
        <div className="bg-slate-950 min-h-screen pb-20">
            {/* Header Area */}
            <div className="bg-slate-900 py-16 sm:py-24 text-center border-b border-white/5 relative overflow-hidden">
                {/* Glow Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-orange/5 blur-[100px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Installation <span className="text-primary-orange">Guides</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Step-by-step instructions to set up iptvuk.sbs IPTV on your favorite devices. Get ready to stream in minutes!
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                {/* Device Selection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {devices.map((device) => (
                        <button
                            key={device.id}
                            onClick={() => handleDeviceClick(device.id)}
                            onKeyDown={(e) => e.key === 'Enter' && handleDeviceClick(device.id)}
                            aria-label={`Select ${device.name}`}
                            className={`p-8 rounded-2xl transition-all duration-300 text-center flex flex-col items-center gap-6 group border shadow-2xl ${activeDevice === device.id ? 'bg-slate-900 border-primary-orange shadow-primary-orange/10' : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/60'}`}
                        >
                            <div className={`p-5 rounded-2xl transition-all duration-300 group-hover:scale-110 ${activeDevice === device.id ? 'bg-primary-orange text-white' : 'bg-white/5 text-primary-orange group-hover:bg-white/10'}`}>
                                {device.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{device.name}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{device.sub}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Detailed Instructions Header */}
                <div ref={instructionsRef} className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                        Setup <span className="text-primary-orange">Walkthrough</span>
                    </h2>
                </div>

                {/* Steps Accordion */}
                <div className="max-w-4xl mx-auto space-y-4 mb-24">
                    {devices.map((device) => (
                        <div key={device.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeDevice === device.id ? 'bg-slate-900 border-primary-orange/30 shadow-2xl shadow-primary-orange/5' : 'bg-slate-900/40 border-white/5'}`}>
                            <button
                                onClick={() => handleDeviceClick(device.id)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeDevice === device.id ? 'bg-slate-900' : 'hover:bg-white/5'}`}
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`text-2xl transition-colors ${activeDevice === device.id ? 'text-white' : 'text-primary-orange'}`}>
                                        {device.icon}
                                    </div>
                                    <span className="font-bold text-white text-lg tracking-tight">{device.name}</span>
                                </div>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${activeDevice === device.id ? 'bg-primary-orange text-white' : 'bg-white/5 text-slate-500'}`}>
                                    {activeDevice === device.id ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </button>

                            {/* Expand content if active */}
                            <div
                                className={`transition-all duration-500 ease-in-out ${activeDevice === device.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <div className="p-8 pt-2 bg-slate-900 border-t border-white/5 space-y-6">
                                    {genericSteps.map((step, idx) => (
                                        <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl flex items-start gap-5 border border-white/5 hover:border-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-xl bg-primary-orange text-white flex items-center justify-center flex-shrink-0 text-sm font-black shadow-lg shadow-primary-orange/20">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg mb-1">{step.title}</h4>
                                                <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="mt-6 p-5 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-2xl text-sm flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                            <FaInfoCircle className="text-xl" />
                                        </div>
                                        <span className="font-medium">Need specific app links or trial details? Our support team is available 24/7 on WhatsApp.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Troubleshooting Section */}
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] shadow-2xl border border-white/5 p-8 sm:p-14 mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/5 blur-[80px] rounded-full"></div>

                    <h2 className="text-3xl sm:text-5xl font-black text-center text-white mb-12 uppercase tracking-tighter relative z-10">
                        Troubleshooting <span className="text-primary-orange">Tips</span>
                    </h2>

                    <div className="space-y-4 relative z-10">
                        {troubleshootTips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-5 p-5 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-white/10 hover:bg-slate-950/60 transition-all duration-300 group">
                                <div className="flex-shrink-0 mt-1 p-3 bg-slate-900 rounded-xl shadow-lg border border-white/5 group-hover:scale-110 transition-transform">
                                    {tip.icon}
                                </div>
                                <p className="text-slate-300 leading-relaxed font-medium text-sm sm:text-base">
                                    {tip.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Need Help? */}
                <div className="mt-20 text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-green/5 blur-[80px] rounded-full"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Still Need Support?</h3>
                        <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium">
                            Our team of experts is standing by to help you get connected. Don't hesitate to reach out!
                        </p>
                        <button
                            onClick={() => window.open('https://wa.me/447412300833', '_blank', 'noopener,noreferrer')}
                            className="btn-whatsapp px-12 py-5 text-lg rounded-2xl shadow-accent-green/20 hover:scale-105 transition-transform"
                        >
                            <FaWhatsapp className="text-2xl" />
                            Live WhatsApp Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallationGuide;
