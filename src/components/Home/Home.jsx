import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import Motto from '../Motto/Motto';
import WeAre from '../WeAre/WeAre';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  return (
    <>
        <Motto/>
        <WeAre/>
    </>
  )
}

export default Home