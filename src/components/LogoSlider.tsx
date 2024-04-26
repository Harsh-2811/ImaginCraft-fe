import React from 'react'

const LogoSlider = () => {
  return (
    <>
      <div className="logo-slider">
        <div className="logo-slide-track">
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="logo-slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>

      <style>
        {`

          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 7));
            }
          }
          .logo-slider {
            height: 100px;
            margin: auto;
            overflow: hidden;
            position: relative;
            width: auto;
          }
          .logo-slider .logo-slide-track {
            animation: scroll 40s linear infinite;
            display: flex;
            width: calc(250px * 14);
          }
          .logo-slider .logo-slide {
            height: 100px;
            width: 250px;
          }
        
        `}
      </style>
    </>
  )
}

export default LogoSlider
