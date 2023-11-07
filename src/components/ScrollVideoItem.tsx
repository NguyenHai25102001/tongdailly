import React from 'react';
import image from '../assets/image';
import formatPrice from './formatPrice';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import SelectShare from './SelectShare';
import $ from 'jquery';
import SelectShareScroll from './SelectShareScroll';
const ScrollVideoItem = () => {
    const imageSile = [
        { path: 'https://swiperjs.com/demos/images/nature-1.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-4.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-5.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-6.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-7.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-8.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-9.jpg' },
        { path: 'https://swiperjs.com/demos/images/nature-10.jpg' },
    ]

    const [activeShare, setActiveShare] = React.useState(false);

    const toggleShare = () => {
        if (activeShare) {
            $('.wrapper__tabbar').show();
            $('.show').addClass('d-none');
            setActiveShare(false)
        } else {

            setActiveShare(true)
            $('.wrapper__tabbar').hide();
            $('.show').removeClass('d-none');
        }

        console.log(activeShare);
    };
    return (
        <div className="wrapper__scroll_video-item position-relative"
        >
            <div className="scroll-info z-3">
                <div className="name overflow-hidden text-white">Tên nhà bán nnnnnnnnnnnnnnnnnnnnnn</div>
                <div className="discription overflow-hidden text-white">Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm</div>
                <div className="rounded-2 p-1 border border-1 border-white">
                    <div className="d-flex price justify-content-center">
                        {formatPrice(250000)} đ <div className=""><span className='d-flex ms-2'>Gia gom hien tai</span></div>
                    </div>
                </div>

            </div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {
                    imageSile.map((item, index) => (

                        <SwiperSlide>
                            <div className="content" key={index}
                                style={{
                                    backgroundImage: `url(${item.path})`,
                                    backgroundSize: 'cover',
                                }}>
                                <div className="pt"></div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="icon-filter d-inline-block z-3">
                <div className="mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                        <path d="M19.5 4.31242C19.8978 4.31242 20.2794 4.16097 20.5607 3.89138C20.842 3.6218 21 3.25616 21 2.87491C21 2.49365 20.842 2.12801 20.5607 1.85843C20.2794 1.58884 19.8978 1.43739 19.5 1.43739L8.598 1.43739C8.33469 1.00036 7.95598 0.637458 7.49993 0.385145C7.04389 0.132831 6.52658 0 6 0C5.47342 0 4.95611 0.132831 4.50006 0.385145C4.04402 0.637458 3.66532 1.00036 3.402 1.43739L1.5 1.43739C1.10217 1.43739 0.720644 1.58884 0.439339 1.85843C0.158033 2.12801 0 2.49365 0 2.87491C0 3.25616 0.158033 3.6218 0.439339 3.89138C0.720644 4.16097 1.10217 4.31242 1.5 4.31242H3.402C3.66532 4.74945 4.04402 5.11235 4.50006 5.36467C4.95611 5.61698 5.47342 5.74981 6 5.74981C6.52658 5.74981 7.04389 5.61698 7.49993 5.36467C7.95598 5.11235 8.33469 4.74945 8.598 4.31242L19.5 4.31242ZM19.5 12.9375C19.8978 12.9375 20.2794 12.7861 20.5607 12.5165C20.842 12.2469 21 11.8813 21 11.5C21 11.1187 20.842 10.7531 20.5607 10.4835C20.2794 10.2139 19.8978 10.0625 19.5 10.0625H17.598C17.3347 9.62546 16.956 9.26255 16.4999 9.01024C16.0439 8.75793 15.5266 8.62509 15 8.62509C14.4734 8.62509 13.9561 8.75793 13.5001 9.01024C13.044 9.26255 12.6653 9.62546 12.402 10.0625L1.5 10.0625C1.10217 10.0625 0.720644 10.2139 0.439339 10.4835C0.158033 10.7531 0 11.1187 0 11.5C0 11.8813 0.158033 12.2469 0.439339 12.5165C0.720644 12.7861 1.10217 12.9375 1.5 12.9375L12.402 12.9375C12.6653 13.3745 13.044 13.7374 13.5001 13.9898C13.9561 14.2421 14.4734 14.3749 15 14.3749C15.5266 14.3749 16.0439 14.2421 16.4999 13.9898C16.956 13.7374 17.3347 13.3745 17.598 12.9375H19.5ZM21 20.1251C21 20.5063 20.842 20.872 20.5607 21.1416C20.2794 21.4112 19.8978 21.5626 19.5 21.5626L8.598 21.5626C8.33469 21.9996 7.95598 22.3625 7.49993 22.6149C7.04389 22.8672 6.52658 23 6 23C5.47342 23 4.95611 22.8672 4.50006 22.6149C4.04402 22.3625 3.66532 21.9996 3.402 21.5626H1.5C1.10217 21.5626 0.720644 21.4112 0.439339 21.1416C0.158033 20.872 0 20.5063 0 20.1251C0 19.7438 0.158033 19.3782 0.439339 19.1086C0.720644 18.839 1.10217 18.6876 1.5 18.6876H3.402C3.66532 18.2506 4.04402 17.8876 4.50006 17.6353C4.95611 17.383 5.47342 17.2502 6 17.2502C6.52658 17.2502 7.04389 17.383 7.49993 17.6353C7.95598 17.8876 8.33469 18.2506 8.598 18.6876L19.5 18.6876C19.8978 18.6876 20.2794 18.839 20.5607 19.1086C20.842 19.3782 21 19.7438 21 20.1251Z" fill="white" />
                    </svg>
                </div>
                <div className="mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.0007 11.2446L12.368 7.87727L16.8578 12.3671V16.8569H1.14355V13.4895M11.2456 13.4895L6.7558 8.99972L1.14355 14.612V1.14258H16.8578V13.4895H11.2456Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.63485 6.75407C6.56471 6.75407 7.31852 6.00026 7.31852 5.07039C7.31852 4.14053 6.56471 3.38672 5.63485 3.38672C4.70498 3.38672 3.95117 4.14053 3.95117 5.07039C3.95117 6.00026 4.70498 6.75407 5.63485 6.75407Z" fill="white" />
                    </svg>
                </div>

            </div>
            <div className="icon d-inline-block z-1">
                <div className="d-flex justify-content-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="56" viewBox="0 0 43 56" fill="none">
                        <rect width="43" height="43" rx="9" fill="#D9D9D9" fill-opacity="0.5" />
                        <path d="M34.8536 16.42L30.7912 9.42C30.6287 9.16 30.3849 9 30.1249 9H13.8751C13.6151 9 13.3713 9.16 13.2088 9.42L9.14638 16.42C9.09763 16.6 9.04888 16.78 9.00013 16.96C8.98388 19.18 10.4464 21 12.2501 21C13.2251 21 14.0863 20.48 14.6876 19.64C15.2888 20.48 16.1501 21 17.1251 21C18.1 21 18.9613 20.48 19.5625 19.64C20.1638 20.48 21.025 21 22 21C22.975 21 23.8362 20.48 24.4375 19.64C25.0387 20.48 25.9 21 26.875 21C27.8499 21 28.7112 20.48 29.3124 19.64C29.9137 20.48 30.7749 21 31.7499 21C33.5536 21 35.0161 19.18 34.9999 16.96C34.9511 16.78 34.9024 16.6 34.8536 16.42Z" fill="white" />
                        <path d="M31.4286 22.8201C30.5941 22.8201 29.7817 22.5319 29.0714 22C27.6509 23.0617 25.7777 23.0617 24.3571 22C22.9366 23.0617 21.0619 23.0617 19.6429 22C18.2239 23.0617 16.3476 23.0617 14.9286 22C13.7484 22.8851 12.287 22.9988 11 22.4243V32.97C11 34.0906 11.704 35 12.5714 35H25.1429V24.8501H29.8571V35H31.4286C32.296 35 33 34.0906 33 32.97V22.4486C32.5003 22.678 31.9739 22.8201 31.4286 22.8201ZM20.4286 30.94H14.1429V24.8501H20.4286V30.94Z" fill="white" />
                        <circle cx="21.5" cy="47.5" r="8.5" fill="#009F9D" />
                        <path d="M21.5 42V54" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M16 48H27" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M12.5 4.31201L12.0795 3.65848C11.6334 2.96505 11.1314 2.37749 10.5837 1.90144L10.5837 1.90142C9.50468 0.963404 8.29767 0.5 6.98376 0.5C5.21244 0.5 3.57507 1.29419 2.36969 2.76363L12.5 4.31201ZM12.5 4.31201L12.9205 3.6585M12.5 4.31201L12.9205 3.6585M12.9205 3.6585C13.3668 2.96486 13.8686 2.3775 14.4161 1.90145C15.4953 0.963401 16.7023 0.5 18.0162 0.5C19.7876 0.5 21.4247 1.29419 22.6301 2.76366C23.8252 4.22073 24.5 6.23392 24.5 8.44467C24.5 10.6946 23.7594 12.7684 22.1182 14.9941L22.1182 14.9942C20.6359 17.0047 18.4967 19.0557 15.9683 21.4776L15.9682 21.4776L15.946 21.4989C15.0913 22.3178 14.1217 23.2467 13.1156 24.2357L13.1153 24.2359C12.9363 24.4121 12.7169 24.5 12.5 24.5C12.283 24.5 12.0638 24.4122 11.8843 24.2355L11.884 24.2352C10.8702 23.2389 9.89417 22.3039 9.03503 21.4808L9.03233 21.4782L9.03231 21.4782M12.9205 3.6585L9.03231 21.4782M9.03231 21.4782C6.50347 19.056 4.3643 17.0047 2.88199 14.9944M9.03231 21.4782L2.36965 2.76368C1.17477 4.22075 0.5 6.23393 0.5 8.44489C0.5 10.6946 1.24075 12.7684 2.88199 14.9944M2.88199 14.9944L2.47955 15.2911L2.88199 14.9944Z" stroke="white" />
                    </svg>
                </div>
                {/* click share */}
                <div role='button' id="clickShare" onClick={toggleShare} className="d-flex justify-content-center mb-3"><svg xmlns="c" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.1156 20.338C24.2472 20.338 22.5991 21.2207 21.5224 22.5723L11.5353 17.5081C11.666 17.0246 11.76 16.525 11.76 15.9993C11.76 15.4269 11.6484 14.888 11.4926 14.3636L21.4357 9.32286C22.5065 10.7357 24.1972 11.6591 26.117 11.6591C29.3692 11.6591 32 9.05055 32 5.82882C32.0001 2.61 29.3692 0 26.1171 0C22.8723 0 20.2386 2.60999 20.2386 5.82875C20.2386 6.35602 20.3326 6.85702 20.4648 7.34202L10.4792 12.4062C9.40097 11.0531 7.7499 10.1676 5.87853 10.1676C2.62929 10.1676 0 12.779 0 15.9993C0 19.2195 2.62936 21.8295 5.87853 21.8295C7.80131 21.8295 9.49059 20.9032 10.5658 19.489L20.5044 24.5298C20.3486 25.0526 20.2356 25.5959 20.2356 26.1698C20.2356 29.39 22.8693 32 26.1141 32C29.3663 32 31.9971 29.39 31.9971 26.1698C31.9986 22.9466 29.3678 20.338 26.1156 20.338Z" fill="white" />
                </svg></div>

                <div className="d-flex justify-content-center aic rounded bg-danger fs-4 text-white"><i className="bi bi-eye-fill"></i></div>

            </div>
            {/* Share */}
            <div className={"show position-absolute bg-white p-2 w-100 " + (activeShare ? '' : 'd-none')} id='show' style={{
                bottom: 0,
                zIndex: '99',
            }}>
                <SelectShareScroll url={'https://www.tiktok.com/foryou'} status={activeShare}
                    handleClose={toggleShare} />
            </div>


        </div>
    )
}
export default ScrollVideoItem;