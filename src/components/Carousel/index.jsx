/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Swiper from "swiper";
import {
  SwiperSlide,
  useSwiper,
  Swiper as SwiperComponent,
} from "swiper/react";
import { Navigation } from "swiper/modules";
import DayCard from "../DayCard";

import styles from "./carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <></>;
};

const Carousel = ({ data}) => {
  return (
    <div className={styles.wrapper}>
      <SwiperComponent
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <DayCard info={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Carousel;
