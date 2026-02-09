import React, { useState, useEffect, useMemo } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 3,
        minutes: 59,
        seconds: 37
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    // Reset timer when it reaches 0
                    hours = 3;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = useMemo(() => {
        return (num) => String(num).padStart(2, '0');
    }, []);

    const timeDisplay = useMemo(() => {
        return `${formatNumber(timeLeft.hours)} hours, ${formatNumber(timeLeft.minutes)} minutes, ${formatNumber(timeLeft.seconds)} seconds`;
    }, [timeLeft, formatNumber]);

    return (
        <div
            className="flex items-center justify-center gap-2 sm:gap-3"
            role="timer"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Flash sale ends in ${timeDisplay}`}
        >
            <div className="flex flex-col items-center">
                <div className="bg-white/40 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[70px] shadow-md">
                    <span className="text-2xl sm:text-4xl font-black text-white text-shadow">
                        {formatNumber(timeLeft.hours)}
                    </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">
                    HRS
                </span>
            </div>

            <span className="text-2xl sm:text-4xl font-black text-white pb-6">:</span>

            <div className="flex flex-col items-center">
                <div className="bg-white/40 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[70px] shadow-md">
                    <span className="text-2xl sm:text-4xl font-black text-white text-shadow">
                        {formatNumber(timeLeft.minutes)}
                    </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">
                    MINS
                </span>
            </div>

            <span className="text-2xl sm:text-4xl font-black text-white pb-6">:</span>

            <div className="flex flex-col items-center">
                <div className="bg-white/40 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[70px] shadow-md">
                    <span className="text-2xl sm:text-4xl font-black text-white text-shadow">
                        {formatNumber(timeLeft.seconds)}
                    </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-white mt-1 uppercase tracking-wide">
                    SECS
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
