import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import formatPrice from './formatPrice';
export default function SelectBuyHouseIteam() {
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
    return (
        <div className="wrapper-select_buy_house_iteam bg-white rounded-4">

            <div className="">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        imageSile.map((item, index) => (
                            <SwiperSlide>
                                <div className="image rounded-top-4" key={index}
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

            </div>
            <div className="p-3">
                <div className="discription overflow-hidden mb-2">
                    Mô tả sản phẩmmmmmmmmmmmmmmm......................
                </div>
                <div className="name mb-2">Tên thương hiệu</div>
                <div className="price d-flex">{formatPrice('250000')} đ
                    <div className="d-flex ms-2">
                        <span className='px-1'>Giá gom hiện tại</span></div></div>
                <div className="content d-flex justify-content-between mt-2">
                    <div className="">Giá dom thấp nhất <span>{formatPrice('190000')} đ</span></div>
                    <div className="">Đã đạt <span className='content-product'>390 sản phẩm</span></div>
                </div>
                <div className="content d-flex justify-content-between">
                    <div className="">Đang có <span className='content-product'>19 người trong nhóm</span></div>
                    <div className="">Đã bán <span className='content-product'>{formatPrice('200000')} sản phẩm</span></div>
                </div>

                <div className="mt-4 d-flex justify-content-between">
                    <button className='btn btn-outline-secondary rounded-pill text-uppercase text-dark px-3 py-2'>
                        Gửi yêu cầu
                    </button>
                    <button className='btn btn-success rounded-pill text-uppercase text-white px-3 py-2'>
                        mua gom chung
                    </button>

                </div>


            </div>

        </div>
    )

}