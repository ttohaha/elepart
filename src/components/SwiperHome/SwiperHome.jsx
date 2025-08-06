import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperHome.css";

import img_back1 from '../../img/swiperHome.jpg'
import img_back2 from '../../img/swiperHome..png'

function SwiperHome() {
   return (
        <div className="custom-slider">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide>
            <div className="slide-content" style={{ backgroundImage: `url(${img_back1})` }}>
                <h2>Ремонт тепловизоров, прицелов, средств связи</h2>
                <p>
                    Тепловизоры, цифровые прицелы, радиостанции 
                </p>
                <button className="header-top-contacts-button motto-button">Получить консультацию</button>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="slide-content" style={{ backgroundImage: `url(${img_back2})` }}>
                <h2>Обслуживание тепловизоров и прицелов Pulsar</h2>
                <p>
                Выполним техническое обслуживание вашего тепловизора и <br /> ночного прицела Pulsar
                </p>
                <button className="header-top-contacts-button motto-button">Получить консультацию</button>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
}

export default SwiperHome