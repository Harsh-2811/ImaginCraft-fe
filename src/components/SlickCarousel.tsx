import Slider from 'react-slick'
import './slickslider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchSliderImages } from '../redux/reducer/sliderSlice'
import { AppDispatch } from '../redux/store'

function CenterMode() {
  const screenSize = useSelector((state: RootState) => state.auth.screenSize)
  const dispatch = useDispatch<AppDispatch>()
  const images = useSelector((state: RootState) => state?.slider?.images)
  // const status = useSelector((state: RootState) => state.slider.status);
  // const error = useSelector((state: RootState) => state.slider.error);
  useEffect(() => {
    dispatch(fetchSliderImages())
  }, [])

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
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {images?.map((img: any, index) => {
          return (
            <img
              key={index}
              className={`h-[${screenSize?.width <= 799 ? '280px' : '408px'}] mx-auto object-cover rounded-[16px]`}
              src={img?.image}
              alt="slide_image"
            />
          )
        })}
        {/* 
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
        /> */}
      </Slider>
    </div>
  )
}

export default CenterMode
