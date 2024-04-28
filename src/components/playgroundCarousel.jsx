import React, { Component } from 'react'
import Slider from 'react-slick'
import bgAuthImage from '../assets/authimages.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DOWNLOAD_ICON from '../assets/downloadIcon.svg'

const playgroundCarousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'myCustomCarousel',
  }
  return (
    <>
      <div className="w-full overflow-hidden relative">
        <Slider
          {...settings}
          nextArrow={<button>{'>'}</button>}
          prevArrow={<button>{'<'}</button>}
        >
          <div className="relative">
            <img
              src={bgAuthImage}
              className="rounded-[8px]"
              alt="slide_image"
            />
            <button className="absolute bottom-4 right-4 z-10 bg-[#0081A8] mx-auto text-[15px] text-white px-3 rounded-md py-2 flex items-center">
              <img className="me-2" src={DOWNLOAD_ICON} />
              Download
            </button>
          </div>
          <div>
            <img
              src={bgAuthImage}
              className="rounded-[8px]"
              alt="slide_image"
            />
          </div>
          <div>
            <img
              src={bgAuthImage}
              className="rounded-[8px]"
              alt="slide_image"
            />
          </div>
        </Slider>
      </div>

      <style>
        {`
        
        .myCustomCarousel .slick-arrow {
          color: white !important;
          border: none;
          outline: none;
          background: #0081A8 !important;
          height:30px;
          width:30px;
          border-radius: 50%;
        }
        .slick-prev {
          left: 5% !important;
          z-index: 1;
        }
        .slick-next {
          right: 5% !important;
          z-index: 1;
        }
        .slick-next:before{
          content: url("../src/assets/nextIcon.svg") !important;
          color:white;
        }
        .slick-prev:before{
          content: url("../src/assets/prevIcon.svg") !important;
          color:white;
        }

        `}
      </style>
    </>
  )
}

export default playgroundCarousel
