import SelectSearch from "../components/SelectSearch";
import image from "../assets/image";
import GomChung from "../components/GomChung";
import ProductItem from "../components/ProductItem";
import ButtonAll from "../components/ButtonAll";

import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import { GrLinkNext } from "react-icons/gr";
import TopBuyHouse from "../components/TopBuyHouse";
import { Header } from "../components";


function Home() {
    const selectSearch = [
        {
            title: 'Xem tất cả danh mục',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect width="7.33348" height="7.33348" fill="white"/>
            <rect x="8.66602" y="8.66797" width="7.33348" height="7.33348" fill="white"/>
            <rect y="8.66797" width="7.33348" height="7.33348" fill="white"/>
          </svg>`,
            color: '#009F9D'
        }, {
            title: 'Gợi ý nhà bán hiển thị',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M18.7111 17.306L14.0273 12.6028C15.2316 11.2207 15.8914 9.48166 15.8914 7.67124C15.8914 3.44139 12.3269 0 7.94571 0C3.56452 0 0 3.44139 0 7.67124C0 11.9011 3.56452 15.3425 7.94571 15.3425C9.59048 15.3425 11.1579 14.8635 12.4979 13.9543L17.2173 18.6931C17.4146 18.8909 17.6799 19 17.9642 19C18.2333 19 18.4886 18.9009 18.6824 18.7208C19.0942 18.3383 19.1074 17.7039 18.7111 17.306ZM7.94571 2.00119C11.1841 2.00119 13.8186 4.54471 13.8186 7.67124C13.8186 10.7978 11.1841 13.3413 7.94571 13.3413C4.70732 13.3413 2.07279 10.7978 2.07279 7.67124C2.07279 4.54471 4.70732 2.00119 7.94571 2.00119Z" fill="white"/>
        </svg>`,
            color: '#177877'
        }, {
            title: 'Xem nhà bán đã xem',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M18.7111 17.306L14.0273 12.6028C15.2316 11.2207 15.8914 9.48166 15.8914 7.67124C15.8914 3.44139 12.3269 0 7.94571 0C3.56452 0 0 3.44139 0 7.67124C0 11.9011 3.56452 15.3425 7.94571 15.3425C9.59048 15.3425 11.1579 14.8635 12.4979 13.9543L17.2173 18.6931C17.4146 18.8909 17.6799 19 17.9642 19C18.2333 19 18.4886 18.9009 18.6824 18.7208C19.0942 18.3383 19.1074 17.7039 18.7111 17.306ZM7.94571 2.00119C11.1841 2.00119 13.8186 4.54471 13.8186 7.67124C13.8186 10.7978 11.1841 13.3413 7.94571 13.3413C4.70732 13.3413 2.07279 10.7978 2.07279 7.67124C2.07279 4.54471 4.70732 2.00119 7.94571 2.00119Z" fill="white"/>
        </svg>`,
            color: '#115251'
        },

    ];
    const SEVEN_HOURS_IN_SECONDS = 7 * 60 * 60; // 7 hours in seconds

    // Set your target time as current time plus 7 hours
    const targetTimeInSeconds = Math.floor(Date.now() / 1000) + SEVEN_HOURS_IN_SECONDS;
    return (
        <div className="Wrapper_home">
               <Header />
            <div className="mt-4">
                <SelectSearch selectSearch={selectSearch} />
            </div>
            <div className="d-flex mt-3">
                <img src={image.banner} className="w-100" alt="..." />
            </div>
            {/* Gom chung 1 ngay */}
            <div className="mt-2">
                <GomChung targetTimeInSeconds={targetTimeInSeconds}
                    title={'gom chung 1 ngày'}
                    content={'Bắt đầu vào 00 :00 và kết thúc vào 23:59 hàng ngày'} />
            </div>
            <div className="mt-3 swipper-product ">
                <Swiper
                    slidesPerView={2}

                    spaceBetween={15}
                    grabCursor={false}
                    pagination={{
                        clickable: false,
                    }}

                    className="mySwiper"

                >
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                </Swiper>

                <div className="my-3">
                    <ButtonAll color="#FF5E3A" />
                </div>


            </div>
            {/* end gom chung 1 ngày */}

            {/*Gom chung 2 ngày  */}
            <div className="infor-gc p-2 bg-white d-flex flex-column gap-1">
                <div className="date-title text-uppercase">gom chung 2 ngày</div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-uppercase">bắt đầu vào</div>
                    <div className="d-flex gap-1 align-items-center">
                        <span>06</span>
                        <div>:</div>
                        <span>00</span>
                        <span>T2 -27/09</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-uppercase">ngày kết thúc</div>
                    <div className="d-flex gap-1 align-items-center">
                        <span>06</span>
                        <div>:</div>
                        <span>00</span>
                        <span>T2 -27/09</span>
                    </div>
                </div>

            </div>

            <div className="mt-3 swipper-product ">
                <Swiper
                    slidesPerView={2}

                    spaceBetween={15}
                    grabCursor={false}
                    pagination={{
                        clickable: false,
                    }}

                    className="mySwiper"

                >
                    <SwiperSlide ><ProductItem /></SwiperSlide>
                    <SwiperSlide ><ProductItem /></SwiperSlide>
                    <SwiperSlide ><ProductItem /></SwiperSlide>
                    <SwiperSlide ><ProductItem /></SwiperSlide>


                </Swiper>

                <div className="my-3">
                    <ButtonAll color="#FF5E3A" />
                </div>


            </div>
            {/* end gom chung 2 ngày */}

            {/* Gom chung 1 tuần */}
            <div className="mt-2">
                <GomChung targetTimeInSeconds={targetTimeInSeconds}
                    title={'gom chung 1 tuần'}
                    content={"Bắt đầu 00:00 T2 - kết thúc 23:59 CN hàng tuần "} />
            </div>
            <div className="mt-3 swipper-product ">
                <Swiper
                    slidesPerView={2}

                    spaceBetween={15}
                    grabCursor={false}
                    pagination={{
                        clickable: false,
                    }}

                    className="mySwiper"

                >
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                    <SwiperSlide><ProductItem /></SwiperSlide>
                </Swiper>

                <div className="my-3">
                    <ButtonAll color="#FF5E3A" />
                </div>


            </div>
            {/* end gom chung 1 tuần */}


            {/* Top gom chung */}
            <div className="">
                <div className="d-flex justify-content-between p-2">
                    <div className="title text-uppercase">sản phẩm xếp top xem chung</div>
                    <div className=""><GrLinkNext /></div>
                </div>
                <div className="mt-3 swipper-product ">
                    <Swiper
                        slidesPerView={2}

                        spaceBetween={15}
                        grabCursor={false}
                        pagination={{
                            clickable: false,
                        }}

                        className="mySwiper"

                    >
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                        <SwiperSlide><ProductItem /></SwiperSlide>
                    </Swiper>

                    <div className="my-3">
                        <ButtonAll color="#FF5E3A" />
                    </div>


                </div>

            </div>

            {/* end top gom chung */}
            {/* nhà mua xếp top xem chung */}
            <div className="">
                <div className="d-flex justify-content-between p-2">
                    <div className="title text-uppercase">nhà mua xếp top xem chung</div>
                    <div className=""><GrLinkNext /></div>
                </div>
                <div className="mt-3 swipper-product">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        grabCursor={false}
                        pagination={{
                            clickable: false,
                        }}

                        className="mySwiper"

                    >
                        <SwiperSlide><TopBuyHouse /></SwiperSlide>
                        <SwiperSlide><TopBuyHouse /></SwiperSlide>
                        <SwiperSlide><TopBuyHouse /></SwiperSlide>
                        <SwiperSlide><TopBuyHouse /></SwiperSlide>
                        <SwiperSlide><TopBuyHouse /></SwiperSlide>

                    </Swiper>

                    <div className="my-3">
                        <ButtonAll color="#FF5E3A" />
                    </div>


                </div>

            </div>
            {/* end nhà mua xếp top xem chung */}


            {/* dành cho bạn */}
            <div className="">
                <div className="d-flex justify-content-between p-2">
                    <div className="title text-uppercase">Dành cho bạn</div>
                    {/* <div className=""><GrLinkNext/></div> */}
                </div>
                <div className="mt-3 ">
                    <div className="d-flex flex-wrap justify-content-between">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>




                </div>

            </div>

            {/* dành cho bạn */}





        </div>
    );
}
export default Home;