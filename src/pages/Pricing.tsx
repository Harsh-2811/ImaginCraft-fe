import React from 'react'
import Footer from '../components/Footer'
import LogoSlider from '../components/LogoSlider'
import RIGHT_ORANGE_ICON from '../assets/orangeRightIcon.svg'
import RIGHT_BLUE_ICON from '../assets/blueRightCircle.svg'

const Pricing = () => {
  return (
    <>
      <div className="max-w-[926px] px-[20px] mx-auto">
        <div className="text-center">
          <button className="uppercase font-semibold border mt-10 px-3 py-2 text-[#0081A8] text-[13px] rounded-md border-[#0081A8]">
            Pricing
          </button>

          <div className="text-centermax-w-[588px]">
            <h1 className="text-[40px] font-semibold blackText mt-1">
              Explore Our{' '}
              <span className="text-[#F16E22]">Plans and Pricing</span>
            </h1>
          </div>
        </div>
        <div className="mt-5 flex max-w-full text-xs font-semibold tracking-wider text-center whitespace-nowrap rounded-3xl bg-teal-500 bg-opacity-10 w-[220px]">
          <div className="gap-2.5 px-6 py-4 text-white bg-teal-500 rounded-3xl min-h-[44px] max-md:px-5">
            MONTHLY
          </div>
          <div className="gap-2.5 self-start px-6 py-3.5 text-indigo-900 max-md:px-5">
            YEARLY
          </div>
        </div>
        <div className="max-w-[1200px] mt-5 mx-auto bg-[#F16E221A] px-8 rounded-3xl">
          <div className="relative flex gap-10 sm:flex-col flex-col md:flex-row">
            <div className="my-6 flex flex-col justify-between">
              <div>
                <div>
                  <span className="text-[36px] font-bold text-[#231D4F]">
                    $19
                  </span>
                  <span className="text-17pxFont text-[#848199]">/month</span>
                </div>
                <div className="max-w-[232px] mx-auto">
                  <h2 className="text-[28px] font-bold text-[#231D4F] mt-2">
                    Starter
                  </h2>
                  <p className="text-15pxFont text-[#848199] mt-2 mb-4">
                    Unleash the power of automation.
                  </p>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-[#F16E22] text-white rounded-3xl mb-3  w-full py-3 font-semibold">
                Choose Plan
              </button>
            </div>
            <div className="my-6 flex flex-col justify-between">
              <div>
                <div>
                  <span className="text-[36px] font-bold text-[#231D4F]">
                    $19
                  </span>
                  <span className="text-17pxFont text-[#848199]">/month</span>
                </div>
                <div className="max-w-[232px] mx-auto">
                  <h2 className="text-[28px] font-bold text-[#231D4F] mt-2">
                    Professional
                  </h2>
                  <p className="text-15pxFont text-[#848199] mb-4 mt-2">
                    Advanced tools to take your work to the next level.
                  </p>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_ORANGE_ICON} />
                    <span className="ps-3 text-15pxFont text-[#848199]">
                      Lorem ipsum text
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-[#F16E22] text-white rounded-3xl mb-3  w-full py-3 font-semibold">
                Choose Plan
              </button>
            </div>
            <div className="-mt-6 mb-6 right-3 z-10 px-6 py-2 top-0 bg-[#00AEB8] rounded-3xl">
              <div className="flex justify-end mt-2">
                <p className="uppercase text-white text-10pxFont px-3 font-extrabold py-2 bg-[#00477A] max-w-max rounded-[33px]">
                  most popular
                </p>
              </div>
              <div>
                <span className="text-[36px] font-bold text-white">$89</span>
                <span className="text-17pxFont text-white">/month</span>
              </div>
              <div className="max-w-[232px] mx-auto">
                <h2 className="text-[28px] font-bold text-white mt-2">
                  Company
                </h2>
                <p className="text-15pxFont text-white mb-4 mt-2">
                  Automation plus enterprise-grade features.
                </p>
                <div className="mb-4">
                  <div className="flex items-center my-2">
                    <img src={RIGHT_BLUE_ICON} />
                    <span className="ps-3 text-15pxFont text-white">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_BLUE_ICON} />
                    <span className="ps-3 text-15pxFont text-white">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_BLUE_ICON} />
                    <span className="ps-3 text-15pxFont text-white">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_BLUE_ICON} />
                    <span className="ps-3 text-15pxFont text-white">
                      Lorem ipsum text
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <img src={RIGHT_BLUE_ICON} />
                    <span className="ps-3 text-15pxFont text-white">
                      Lorem ipsum text
                    </span>
                  </div>
                </div>
                <button className="bg-[#00477A] text-white rounded-3xl mb-3 w-full py-3 font-semibold">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LogoSlider />

      <Footer />
    </>
  )
}

export default Pricing
