import React, { Component } from 'react'
import Slider from 'react-slick'
import './slickslider.css'
import bgAuthImage from '../assets/authimages.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function CenterMode() {
  return (
    <div className="w-full overflow-hidden">
      {/* <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      /> */}
      <Slider
        className={'center'}
        centerMode={true}
        infinite={true}
        centerPadding={'0px'}
        slidesToShow={5}
        speed={100}
        // adaptiveHeight={true}
      >
        <div className="slick_slide_content">
          {/* <h3>1</h3> */}
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          {/* <h3>2</h3> */}
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          {/* <h3>3</h3> */}
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          {/* <h3>4</h3> */}
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          {/* <h3>5</h3> */}
          <img src={bgAuthImage} alt="slide_image" />
        </div>
        <div className="slick_slide_content">
          {/* <h3>6</h3> */}
          <img src={bgAuthImage} alt="slide_image" />
        </div>
      </Slider>
    </div>
  )
}

export default CenterMode
