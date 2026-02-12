import { useEffect, useState } from "react";

export default function CountdownTimer() {
    const [time, setTime] = useState({
        h: "12",
        m: "00",
        s: "00",
    });

    useEffect(() => {
        // Fixed end time (12 hours from first load)
        const storedEnd = localStorage.getItem("flash_sale_end");
        const endTime =
            storedEnd ? Number(storedEnd) : Date.now() + 12 * 60 * 60 * 1000;

        localStorage.setItem("flash_sale_end", endTime);

        const tick = () => {
            const diff = Math.max(0, endTime - Date.now());

            const h = Math.floor(diff / 1000 / 60 / 60);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTime({
                h: String(h).padStart(2, "0"),
                m: String(m).padStart(2, "0"),
                s: String(s).padStart(2, "0"),
            });
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center gap-3 mt-4">
            <TimeBox label="HRS" value={time.h} />
            <TimeBox label="MIN" value={time.m} />
            <TimeBox label="SEC" value={time.s} />
        </div>
    );
}

function TimeBox({ value, label }) {
    return (
        <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-inner">
            <span className="text-3xl font-black text-white leading-none">
                {value}
            </span>
            <span className="text-[10px] tracking-widest text-white/70 font-bold">
                {label}
            </span>
        </div>
    );
}