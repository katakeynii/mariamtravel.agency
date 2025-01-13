"use client";

import React from 'react';
import { useEffect, useState } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-01-31T23:59:59');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-2 lg:gap-4 my-4">
            <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs lg:text-sm">Jours</div>
            </div>
            <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs lg:text-sm">Heures</div>
            </div>
            <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs lg:text-sm">Minutes</div>
            </div>
            <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs lg:text-sm">Secondes</div>
            </div>
        </div>
    );
};

export default Timer; 