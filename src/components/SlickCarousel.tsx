import React from 'react'
import Slider from 'react-slick'
import './slickslider.css'
import bgAuthImage from '../assets/authimages.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function CenterMode() {
  const screenSize = useSelector((state: RootState) => state.auth.screenSize)
  console.warn('screenSize', screenSize)
  console.log(
    ' screenSize?.width >= 1199',
    screenSize?.width >= 1199
      ? 5
      : screenSize?.width >= 800 && screenSize?.width <= 1199
        ? 4
        : screenSize?.width >= 600 && screenSize?.width <= 799
          ? 3
          : screenSize?.width >= 400 && screenSize?.width <= 599
            ? 2
            : 5
  )
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow:
      screenSize?.width >= 1199
        ? 5
        : screenSize?.width >= 800 && screenSize?.width <= 1199
          ? 4
          : screenSize?.width >= 600 && screenSize?.width <= 799
            ? 3
            : screenSize?.width >= 400 && screenSize?.width <= 599
              ? 2
              : 1,
    speed: 100,
  }
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <img
          className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
          src={bgAuthImage}
          alt="slide_image"
        />
        <img
          className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
          src={bgAuthImage}
          alt="slide_image"
        />
        <img
          className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
          src={bgAuthImage}
          alt="slide_image"
        />
        <img
          className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
          src={bgAuthImage}
          alt="slide_image"
        />
        <img
          className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
          src={bgAuthImage}
          alt="slide_image"
        />
        <img
          className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
          src={bgAuthImage}
          alt="slide_image"
        />
      </Slider>
    </div>
  )
}

export default CenterMode
