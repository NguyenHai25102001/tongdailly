import React, { useState, useRef, useEffect } from 'react';
import '../sass/test.css';
import ScrollVideoItem from '../components/ScrollVideoItem';
import SelectShare from '../components/SelectShare';

function ScrollVideo() {
    const [slideIndex, setSlideIndex] = useState(0);
    const startY = useRef(null);

    const handleStart = (e) => {
        startY.current = e.clientY || e.touches[0].clientY;
    };

    const handleMove = (e) => {
        if (startY.current === null) return;

        const currentY = e.clientY || e.touches[0].clientY;
        const deltaY = currentY - startY.current;
        const sensitivity = 200; // Điều kiện nhạy để chuyển slide

        if (deltaY > sensitivity) {
            // Kéo chuột xuống hoặc vuốt lên trên thiết bị cảm ứng
            if (slideIndex >= 0) {
                setSlideIndex(slideIndex - 1);
            }
            startY.current = currentY;
        } else if (deltaY < -sensitivity) {
            // Kéo chuột lên hoặc vuốt xuống trên thiết bị cảm ứng
            if (slideIndex < 8) {
                setSlideIndex(slideIndex + 1);
            }
            startY.current = currentY;
        }
    };

    const handleEnd = () => {
        startY.current = null;
    };

    return (
        <div className='position-relative'>
            <div
                className="slider-container"
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
            >
                <div className="slider" style={{ transform: `translateY(-${slideIndex * 100}vh)` }}>
                    {
                        [...Array(9)].map((v, index) => (
                            <div
                                className={`slide ${slideIndex === index ? 'active' : 'd-none2'}`}
                                key={index}
                            >
                                <ScrollVideoItem />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default ScrollVideo;
