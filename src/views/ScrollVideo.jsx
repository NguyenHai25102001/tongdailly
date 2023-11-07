import React, { useState, useRef } from 'react';
import '../sass/test.css';
import ScrollVideoItem from '../components/ScrollVideoItem';

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
        const sensitivity = 100; // Điều kiện nhạy để chuyển slide

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
    //
    const [active, isActive] = React.useState(1);
    const list = [
        { title: 'Dành cho bạn' },
        { title: 'Đang follow' }
    ]

    return (
        <div className='position-relative'>
            <div className="position-absolute w-100 z-3" style={{ top: '3%' }}>
                <div className="d-flex justify-content-center gap-5 text-white " style={{
                    fontSize: '1rem'
                }}>
                    {
                        list.map((item, index) => (
                            <div onClick={() => isActive(index)} role='button' className={(active === index ? 'fw-bold' : '')}>{item.title}</div>
                        ))
                    }


                </div>

            </div>

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
