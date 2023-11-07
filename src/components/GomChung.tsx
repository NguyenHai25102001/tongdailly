import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
    targetTimeInSeconds: number;
    title: string,
    content: string
}
const GomChung: React.FC<CountdownTimerProps> = ({ targetTimeInSeconds, title, content }) => {
    const calculateTimeRemaining = () => {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const remainingSeconds = Math.max(0, targetTimeInSeconds - currentTimeInSeconds);

        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;


        return {
            hours: hours < 10 ? `0${hours}` : hours.toString(),
            minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
            seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="wrapper-collect-together">
            <div className="p-2 bg-white">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="collect-together--title text-uppercase">{title}</div>
                    <div className="d-flex gap-2 align-items-end">
                        <div className="collect-together--status text-text-uppercase">Còn</div>
                        <div className="d-flex gap-1">
                            <span className="text-white px-2 py-1">{timeRemaining.hours}</span>
                            <div>:</div>
                            <span className="text-white px-2 py-1">{timeRemaining.minutes}</span>
                            <div>:</div>
                            <span className="text-white px-2 py-1">{timeRemaining.seconds}</span>
                        </div>
                    </div>

                </div>
                <div className="collect-together--content mt-2">{content}</div>

            </div>

        </div>
    );
}

export default GomChung;