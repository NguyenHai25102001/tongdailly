import React from "react";
import { BiPlus } from "react-icons/bi";
import image from "../assets/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import formatPrice from "./formatPrice";
import { Link } from "react-router-dom";
const BuyHouseIteam = () => {
    
    return (
        <div className="wrapper__buy-house-iteam bg-white w-100 rounded pb-4">
            <div className="buy-house-iteam--content ps-3 py-3 pe-2 w-100 ">
                <div className=" justify-content-between position-relative">
                    <div className="d-flex gap-2">
                        <div className="buy-house--image"
                            style={{
                                backgroundImage: `url(${image.product_1})`,
                                backgroundSize: 'cover',
                                borderRadius: '50%'
                            }}>
                            <div className="img-iteam"></div>
                        </div>
                        <Link to={'/list-buy-house'} className="d-flex flex-column justify-content-center">
                            <div className="buy-house--name">Tên nhà bán ...</div>
                            <span>Gian hàng có 2988 sản phẩm</span>
                            <span>Đã bán 234 sản phẩm</span>
                        </Link>
                    </div>
                    <div className="position-absolute " style={{ top: '0', right: '0.5rem' }}>
                        <div className="p-1 d-flex gap-1 border border-1 border-dark mb-1">
                            <div className="">
                                <BiPlus />
                            </div>
                            <div className="">Theo dõi</div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                <path d="M9.35065 19.2C14.5149 19.2 18.7013 14.9019 18.7013 9.6C18.7013 4.29807 14.5149 0 9.35065 0C4.18643 0 0 4.29807 0 9.6C0 14.9019 4.18643 19.2 9.35065 19.2Z" fill="#D80027" />
                                <path d="M9.35282 5.00977L10.362 8.19835H13.6276L10.9856 10.169L11.9947 13.3576L9.35282 11.3869L6.71091 13.3576L7.72004 10.169L5.07812 8.19835H8.34369L9.35282 5.00977Z" fill="#FFDA44" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            {/* iteam */}
            <div className="mt-2 ps-2">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >

                    {
                        [...Array(5)].map((_, idx) => (
                            <SwiperSlide>
                                <div className="rounded item" key={idx}>
                                    <div className="iteam--image rounded"
                                        style={{
                                            backgroundImage: `url(${image.product_1})`,
                                            backgroundSize: 'cover',
                                        }}>
                                        <div className="image"></div>
                                    </div>
                                    <div className="content mt-2 text-center pb-3">
                                        <div className="price mb-1">
                                            {formatPrice('250000')} đ
                                        </div>
                                        <span className="price-gom">Giá gom hiện tại</span>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>

            </div>





        </div>
    );
}

export default BuyHouseIteam;