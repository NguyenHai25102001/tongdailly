import React from "react";
import SelectSearch from "../components/SelectSearch";
import image from "../assets/image";
import { GrLinkNext } from "react-icons/gr";
import BuyHouseIteam from "../components/BuyHouseIteam";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import ButtonAll from "../components/ButtonAll";
import { Header } from "../components";
import TopBuyHouse from "../components/TopBuyHouse";

function BuyHouse() {
  const selectSearch = [
    {
      title: 'Xem tất cả danh mục',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="7.33348" height="7.33348" fill="white"/>
        <rect x="8.66602" y="8.66797" width="7.33348" height="7.33348" fill="white"/>
        <rect y="8.66797" width="7.33348" height="7.33348" fill="white"/>
      </svg>`,
      color: '#FF5E3A'
    }, {
      title: 'Gợi ý nhà bán hiển thị',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M18.7111 17.306L14.0273 12.6028C15.2316 11.2207 15.8914 9.48166 15.8914 7.67124C15.8914 3.44139 12.3269 0 7.94571 0C3.56452 0 0 3.44139 0 7.67124C0 11.9011 3.56452 15.3425 7.94571 15.3425C9.59048 15.3425 11.1579 14.8635 12.4979 13.9543L17.2173 18.6931C17.4146 18.8909 17.6799 19 17.9642 19C18.2333 19 18.4886 18.9009 18.6824 18.7208C19.0942 18.3383 19.1074 17.7039 18.7111 17.306ZM7.94571 2.00119C11.1841 2.00119 13.8186 4.54471 13.8186 7.67124C13.8186 10.7978 11.1841 13.3413 7.94571 13.3413C4.70732 13.3413 2.07279 10.7978 2.07279 7.67124C2.07279 4.54471 4.70732 2.00119 7.94571 2.00119Z" fill="white"/>
    </svg>`,
      color: '#AE462E'
    }, {
      title: 'Xem nhà bán đã xem',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M18.7111 17.306L14.0273 12.6028C15.2316 11.2207 15.8914 9.48166 15.8914 7.67124C15.8914 3.44139 12.3269 0 7.94571 0C3.56452 0 0 3.44139 0 7.67124C0 11.9011 3.56452 15.3425 7.94571 15.3425C9.59048 15.3425 11.1579 14.8635 12.4979 13.9543L17.2173 18.6931C17.4146 18.8909 17.6799 19 17.9642 19C18.2333 19 18.4886 18.9009 18.6824 18.7208C19.0942 18.3383 19.1074 17.7039 18.7111 17.306ZM7.94571 2.00119C11.1841 2.00119 13.8186 4.54471 13.8186 7.67124C13.8186 10.7978 11.1841 13.3413 7.94571 13.3413C4.70732 13.3413 2.07279 10.7978 2.07279 7.67124C2.07279 4.54471 4.70732 2.00119 7.94571 2.00119Z" fill="white"/>
    </svg>`,
      color: '#AE462E'
    },

  ];
  return (
    <div className="wrapper__buy-house w-100">
      <Header
      />
      <div className="mt-4">
        <SelectSearch selectSearch={selectSearch} />
      </div>
      {/* banner */}
      <div className="d-flex my-3">
        <img src={image.banner} className="w-100" alt="..." />
      </div>
      {/* end banner */}
      {/* Nha ban tai chợ*/}
      <div className="mt-3">
        <div className="d-flex justify-content-between p-2">
          <div className="title text-uppercase">NHÀ BÁN TẠI CHỢ 13 - TRUNG QUỐC</div>
          <div className="fw-bolder"><GrLinkNext /> </div>
        </div>
        <div className="d-flex flex-column gap-3">
          {
            [...Array(5)].map((_, index) => (

              <div className="" key={index}>
                <BuyHouseIteam />
              </div>

            ))
          }

        </div>
        <div className="my-3">
          <ButtonAll color='#009F9D' />
        </div>

      </div>
      {/* end nha bán tại chợ */}
      {/*  */}
      <div className="mt-3">
        <div className="d-flex justify-content-between p-2">
          <div className="title text-uppercase">NHÀ BÁN XẾP TOP GOM CHUNG</div>
          <div className="fw-bolder"><GrLinkNext /> </div>
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
            {
              [...Array(10)].map((_, index) => (
                <SwiperSlide key={index}>
                  <TopBuyHouse name="ten nha ban ban ban" />
                </SwiperSlide>
              ))
            }



          </Swiper>

          <div className="my-3">
            <ButtonAll color="#009F9D" />
          </div>


        </div>

      </div>
      <div className="mb-5" style={{
        height: '100px'
      }}></div>

    </div>
  );
}

export default BuyHouse;