import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from 'swiper/modules';
import formatPrice from '../components/formatPrice';
import SelectShare from '../components/SelectShare';
const ProductDefaults = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const currentURL = window.location.href;
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
    const handleBack = () => {
        window.history.back();
    }
    const handleShareFacebook = () => {
        // Mở một cửa sổ mới để chia sẻ lên Facebook
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`, '_blank');
    };
    const id = 10;

    const handleCopyURL = () => {
        // Sao chép URL vào clipboard
        const textArea = document.createElement('textarea');
        textArea.value = currentURL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    };

    const handleShareInstagram = () => {
        // Mở Instagram trong ứng dụng di động (điện thoại di động)
        window.location.href = `instagram://share?text=Kiểm tra sản phẩm này&url=${currentURL}`;
    };
    const [statusShare, setStatusShare] = React.useState(false);
    const handleStatusShare = (id: number) => {
        setStatusShare(!statusShare);

    }
    const shareRef = useRef<HTMLDivElement>(null);


    return (
        <div className="wrapper__product_default">
            <div className="bg-white pb-3">
                <div className="header--icon d-flex justify-content-between px-2 align-items-center">
                    <div className="fs-4 text-white  rounded-circle "
                        onClick={handleBack}><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <circle cx="14.5" cy="14.5" r="14.5" fill="#666666" fill-opacity="0.5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0017 12.7168H22.0117C22.526 12.7168 22.943 13.1338 22.943 13.6481C22.943 14.1625 22.526 14.5795 22.0117 14.5795H10.0024L14.3044 18.8815C14.6681 19.2452 14.6681 19.8349 14.3044 20.1986C13.9407 20.5623 13.351 20.5623 12.9873 20.1986L7.11041 14.3217C6.93287 14.1521 6.82227 13.913 6.82227 13.6481C6.82227 13.6481 6.82227 13.648 6.82227 13.6479C6.82226 13.6262 6.82301 13.6045 6.82452 13.5829C6.82813 13.5307 6.83603 13.4797 6.84788 13.4303C6.88654 13.2686 6.96892 13.1154 7.09505 12.9892L12.9873 7.097C13.351 6.73329 13.9407 6.73329 14.3044 7.097C14.6681 7.46071 14.6681 8.05039 14.3044 8.4141L10.0017 12.7168Z" fill="white" />
                            <mask id="mask0_16895_2632" maskUnits="userSpaceOnUse" x="6" y="6" width="17" height="15">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0017 12.7168H22.0117C22.526 12.7168 22.943 13.1338 22.943 13.6481C22.943 14.1625 22.526 14.5795 22.0117 14.5795H10.0024L14.3044 18.8815C14.6681 19.2452 14.6681 19.8349 14.3044 20.1986C13.9407 20.5623 13.351 20.5623 12.9873 20.1986L7.11041 14.3217C6.93287 14.1521 6.82227 13.913 6.82227 13.6481C6.82227 13.6481 6.82227 13.648 6.82227 13.6479C6.82226 13.6262 6.82301 13.6045 6.82452 13.5829C6.82813 13.5307 6.83603 13.4797 6.84788 13.4303C6.88654 13.2686 6.96892 13.1154 7.09505 12.9892L12.9873 7.097C13.351 6.73329 13.9407 6.73329 14.3044 7.097C14.6681 7.46071 14.6681 8.05039 14.3044 8.4141L10.0017 12.7168Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_16895_2632)">
                            </g>
                        </svg></div>
                    <div className="d-flex gap-2">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <circle cx="14.5" cy="14.5" r="14.5" fill="#666666" fill-opacity="0.5" />
                            <circle cx="13.5588" cy="13.5588" r="7.55879" fill="white" />
                            <path d="M23.3674 21.8655L19.3305 17.5309C19.0898 17.2726 18.7006 17.2737 18.4611 17.5333C18.2217 17.7932 18.2228 18.2131 18.4633 18.4717L22.5002 22.8062C22.6202 22.9349 22.7768 22.9993 22.9338 22.9993C23.0917 22.9993 23.2495 22.934 23.3696 22.8038C23.609 22.5439 23.6079 22.124 23.3674 21.8655Z" fill="white" />
                        </svg></div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <circle cx="14.5" cy="14.5" r="14.5" fill="#666666" fill-opacity="0.5" />
                                <path d="M22.648 14.7325L20.8653 11.9318L22.648 9.13115C22.7313 8.99757 22.7515 8.83082 22.703 8.67913C22.6541 8.52744 22.542 8.40839 22.3993 8.35819L16.5807 6.30088C16.3725 6.22602 16.1474 6.31041 16.0269 6.50328L14.4992 8.94733L12.9716 6.50328C12.8501 6.30941 12.6231 6.22551 12.4178 6.30088L6.59918 8.35819C6.45651 8.40842 6.34441 8.52747 6.29545 8.67913C6.24694 8.83082 6.26719 8.99757 6.35055 9.13119L8.13324 11.9319L6.35058 14.7325C6.26723 14.8661 6.24697 15.0329 6.29548 15.1846C6.34444 15.3363 6.45654 15.4553 6.59921 15.5055L12.4178 17.5628C12.6226 17.6363 12.8504 17.5543 12.9716 17.3604L14.4993 14.9164L16.0269 17.3604C16.1482 17.5545 16.3762 17.6362 16.5807 17.5628L22.3993 15.5055C22.542 15.4553 22.6541 15.3362 22.7031 15.1846C22.7516 15.0329 22.7313 14.8661 22.648 14.7325ZM14.4993 13.4472L10.2371 11.9319L14.4993 10.4165L18.7614 11.9319L14.4993 13.4472Z" fill="white" />
                                <path d="M16.8886 18.5375C16.2817 18.7547 15.5955 18.5191 15.2273 17.9297L14.5021 16.7695L13.7769 17.9297C13.4094 18.518 12.724 18.7557 12.1132 18.5365L8.2334 17.1572V20.1598C8.2334 20.3813 8.3662 20.5777 8.56304 20.6475L14.3467 22.7038C14.3641 22.7104 14.3815 22.7154 14.399 22.7194C14.399 22.7194 14.3995 22.7194 14.3995 22.7199H14.3999C14.4338 22.7275 14.4682 22.7315 14.5021 22.7315C14.5384 22.7315 14.5742 22.727 14.61 22.7184C14.626 22.7144 14.6415 22.7099 14.657 22.7044L20.4412 20.6476C20.638 20.5777 20.7708 20.3813 20.7708 20.1598V17.1572L16.8886 18.5375Z" fill="white" />
                            </svg>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <circle cx="14.5" cy="14.5" r="14.5" fill="#666666" fill-opacity="0.5" />
                                <circle cx="7" cy="14" r="2" fill="white" />
                                <circle cx="15" cy="14" r="2" fill="white" />
                                <circle cx="23" cy="14" r="2" fill="white" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="">
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            imageSile.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="image"
                                        style={{
                                            backgroundImage: `url(${image.path})`,
                                            backgroundSize: 'cover',
                                        }}>
                                        <div className="ph"></div>

                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>
                <div className="d-flex mt-3 px-3 justify-content-between align-items-center">
                    <div className="d-flex price">
                        {formatPrice('250000')} đ
                        <div className="ms-2 align-items-center">
                            <span>Giá gom hiện tại</span>
                        </div>
                    </div>
                    <div className="fs-4" role='button'
                        onClick={() => handleStatusShare(id)}><i className="bi bi-share-fill"></i></div>
                </div>
                <div className="d-flex mt-1 px-3 justify-content-between align-items-center gap-3">
                    <div className="discription">Mô tả sản phẩmmmmmmmmmmmmmmm......................</div>
                    <div className="fs-4"><i className="bi bi-heart"></i></div>
                </div>
                <div className="px-3 ">

                    <div className="color"> Màu sắc:</div>
                    <div className="mt-1">
                        <Swiper
                            // onSwiper={(swiper: Swiper) => {
                            //     return setThumbsSwiper(swiper);
                            // }}
                            loop={true}
                            spaceBetween={11}
                            slidesPerView={8}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs, Controller]}
                            className="mySwiper"
                        >
                            {
                                imageSile.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="imag-select rounded"
                                            style={{
                                                backgroundImage: `url(${image.path})`,
                                                backgroundSize: 'cover',
                                            }}>
                                            <div className="ph"></div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="px-3 py-2 bg-white mt-3">
                <div className="title-conttent mb-2">Quy trình đặt hàng </div>
                <div className="ps-3 tcl d-flex justify-content-between align-items-center w-100 mb-4">
                    <div className="">Vận chuyển</div>
                    <div className=""><i className="bi bi-arrow-right"></i></div>
                </div>
                <div className="ps-3 tcl d-flex justify-content-between align-items-center w-100 mb-4">
                    <div className="">Vận chuyển</div>
                    <div className=""><i className="bi bi-arrow-right"></i></div>
                </div>
                <div className="ps-3 tcl d-flex justify-content-between align-items-center w-100 mb-4">
                    <div className="">Vận chuyển</div>
                    <div className=""><i className="bi bi-arrow-right"></i></div>
                </div>
            </div>
            <div className="px-3 py-2 bg-white mt-3">
                <div className="title-conttent mb-2">Đánh giá khách hàng</div>

            </div>
            <div className="px-3 py-2 bg-white mt-3">
                <div className="title-conttent mb-2">Sản phẩm khác cùng gian hàng  </div>

            </div>
            <div className="pb-5"></div>


            <SelectShare url={'https://www.tiktok.com/foryou'} status={statusShare}
                handleClose={handleStatusShare} />
        </div>
    )
}
export default ProductDefaults;