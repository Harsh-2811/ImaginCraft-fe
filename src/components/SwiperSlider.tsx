import { Swiper, SwiperSlide } from 'swiper/react'
import bgAuthImage from '../assets/authimages.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

const SwiperSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bgAuthImage} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSlider
