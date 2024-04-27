import React, { Component } from 'react'
import Slider from 'react-slick'
import './slickslider.css'
import bgAuthImage from '../assets/authimages.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function CenterMode() {
  var settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 5,
    speed: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div className="slick_slide_content">
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          <img src={bgAuthImage} alt="slide_image" />
        </div>
      </Slider>
    </div>
  )
}

export default CenterMode
