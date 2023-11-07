import React from "react";
import icon from "../assets/icon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
interface SelectItem {
    title: string;
    icon: string;
    color: string
}

interface SelectSearchProps {
    selectSearch: SelectItem[];
}

function SelectSearch({ ...props }) {
    return (
        <div className="wrapper__selectSearch">
            <div className="">
                <div className="selectSearch-title p-2">Cách tìm sản phẩm</div>
                <div className="slts mt-2 gap-2 flex-wrap ps-2 ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        grabCursor={false}
                        pagination={{
                            clickable: false,
                        }}
                        className="mySwiper"
                    >
                        {
                            props.selectSearch.map((item: SelectItem, index: number) => (
                                <SwiperSlide key={index}>
                                    <div className="slt-item">
                                        <div className="p-2 rounded d-flex gap-1" style={{ background: item.color }}>
                                            <div className="text-white">{item.title}</div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                {item.icon && (
                                                    <div>{React.createElement('div', {
                                                        dangerouslySetInnerHTML: { __html: item.icon },
                                                    })}</div>

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>



                </div>
            </div>


        </div>
    );
}

export default SelectSearch;