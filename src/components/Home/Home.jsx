import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import Motto from '../Motto/Motto';
import WeAre from '../WeAre/WeAre';
import SwiperHome from '../SwiperHome/SwiperHome';

function Home() {
  return (
    <>
        <Motto/>
        <WeAre/>
        <SwiperHome/>
    </>
  )
}

export default Home