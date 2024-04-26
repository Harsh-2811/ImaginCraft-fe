import React from 'react'
import Footer from '../components/Footer'
import doubleTickIcon from '../assets/doubleTickIcon.svg'
import bgAuthImage from '../assets/authimages.png'
import MovingText from '../components/MovingText'
import flashIcon from '../assets/flash.svg'
import qualityIcon from '../assets/quality.svg'
import gallaryIcon from '../assets/gallary.svg'
import fortIcon from '../assets/fortIcon.svg'
import relaibleIcon from '../assets/relaible.svg'
import possibalitiesIcon from '../assets/possibalities.svg'
import technologyIcon from '../assets/technology.svg'
import LogoSlider from '../components/LogoSlider'

const About = () => {
  return (
    <>
      <div className="max-w-[1220px] px-[20px] mx-auto my-[100px]">
        <div className="grid md:grid-cols-2">
          <div className="mt-[30px] md:mt-0 ps-[20px] md:ps-0">
            <h2 className="text-[34px] font-bold max-w-[476px]">
              We are making <br></br> the{' '}
              <span className="text-[#F16E22] ">Digital Future</span>
            </h2>
            <p className="text-[16px] text-[#565656] mt-3 max-w-[588px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[16px] text-[#565656] mt-3 max-w-[588px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="mt-4 font-semibold">
              <div className="flex items-center mt-2">
                <img src={doubleTickIcon} />
                <p className="ms-2">Architecting the Digital Future</p>
              </div>
              <div className="flex items-center mt-2">
                <img src={doubleTickIcon} />
                <p className="ms-2">Architecting the Digital Future</p>
              </div>
              <div className="flex items-center mt-2">
                <img src={doubleTickIcon} />
                <p className="ms-2">Architecting the Digital Future</p>
              </div>
            </div>

            <button className="bg-[#F16E22] mt-5 text-white px-3 rounded-md py-2">
              Get Started
            </button>
          </div>
          <div className="md:relative md:mt-0 mt-10">
            <img src={bgAuthImage} className="md:w-[85%] ml-auto" />
            <div className="px-5 py-3 bottom-10 md:absolute bg-[#0081A8] text-white">
              <h5 className="text-[45px] leading-[45px] font-extrabold">
                10K+
              </h5>
              <p className="text-[24px]">People are using</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="uppercase mx-auto font-semibold border px-3 py-2 text-[#0081A8] text-[13px] rounded-md border-[#0081A8]">
          out benifits
        </button>

        <div className="mt-3">
          <h3 className="text-[40px] text-[#2F2F2F] font-bold leading-[50px]">
            Here is some example of our
            <br></br>
            <span className="text-[#F16E22]">AI Generated Images</span>
          </h3>
        </div>

        <div className="flex items-end flex-wrap mt-[50px]">
          <div className="flex-1">
            <div className="h-[360px] mb-4">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
            <div className="h-[206px]">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1 px-4 ">
            <div className="h-[360px] mb-4">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
            <div className="h-[263px]">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[360px] mb-4">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
            <div className="h-[302px]">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1 px-4">
            <div className="h-[360px] mb-4">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
            <div className="h-[263px]">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[360px] mb-4">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
            <div className="h-[206px]">
              <img
                src={bgAuthImage}
                className="rounded-[16px] object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] px-[20px] mx-auto text-[#2F2F2F] mt-14">
        <div className="my-5">
          <div className="text-center">
            <button className="uppercase font-semibold border px-3 py-2 text-[#0081A8] text-[13px] rounded-md border-[#0081A8]">
              out benifits
            </button>
            <h1 className="text-[40px] font-semibold mt-4">
              AI Benefits Will Impress You
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[80px]">
            <div className="group cursor-pointer rounded-xl border border-[#00AEB8] min-h-[200px] bg-white flex flex-col items-center  hover:bg-[#00AEB8] transition">
              <div className=" -m-[1px] rounded-full top flex justify-center items-center">
                <img
                  src={fortIcon}
                  alt="profile image"
                  className="h-[64px] w-[64px] mb-[49px]"
                />
              </div>
              <div className="text-center p-3">
                <h3 className="group-hover:text-white text-[22px] font-bold text-[#0B2529]">
                  Excellent support
                </h3>
                <p className="group-hover:text-white mt-2 text-[16px]  text-[#565656]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <div className="group cursor-pointer rounded-xl border border-[#00AEB8] min-h-[200px] bg-white flex flex-col items-center  hover:bg-[#00AEB8] transition">
              <div className=" -m-[1px] rounded-full top flex justify-center items-center">
                <img
                  src={relaibleIcon}
                  alt="profile image"
                  className="h-[64px] w-[64px] mb-[49px]"
                />
              </div>
              <div className="text-center p-3">
                <h3 className="group-hover:text-white text-[22px] font-bold text-[#0B2529]">
                  Reliable experts
                </h3>
                <p className="group-hover:text-white mt-2 text-[16px]  text-[#565656]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <div className="group cursor-pointer rounded-xl border border-[#00AEB8] min-h-[200px] bg-white flex flex-col items-center  hover:bg-[#00AEB8] transition">
              <div className=" -m-[1px] rounded-full top flex justify-center items-center">
                <img
                  src={possibalitiesIcon}
                  alt="profile image"
                  className="h-[64px] w-[64px] mb-[49px]"
                />
              </div>
              <div className="text-center p-3">
                <h3 className="group-hover:text-white text-[22px] font-bold text-[#0B2529]">
                  Endless possibilities
                </h3>
                <p className="group-hover:text-white mt-2 text-[16px]  text-[#565656]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <div className="group cursor-pointer rounded-xl border border-[#00AEB8] min-h-[200px] bg-white flex flex-col items-center  hover:bg-[#00AEB8] transition">
              <div className=" -m-[1px] rounded-full top flex justify-center items-center">
                <img
                  src={technologyIcon}
                  alt="profile image"
                  className="h-[64px] w-[64px] mb-[49px]"
                />
              </div>
              <div className="text-center p-3">
                <h3 className="group-hover:text-white text-[22px] font-bold text-[#0B2529]">
                  Unique technology
                </h3>
                <p className="group-hover:text-white mt-2 text-[16px]  text-[#565656]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MovingText />

      <div className="max-w-[1220px] px-[20px] mx-auto mt-[70px]">
        <div className="my-5">
          <div className="flex items-center flex-wrap">
            <div className="md:w-1/2 w-full">
              <div className="grid sm:grid-cols-12 sm:grid-rows-8 gap-5">
                <div className="sm:col-span-1"></div>
                <div className="col-span-4 row-span-4">
                  <img
                    className="rounded-[8px]"
                    src="https://s3-alpha-sig.figma.com/img/776f/da1c/fb5b145ed7f3edd720edd3ff25f0ff6d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHkfZZIQLvgCLbhMIUZxh2k4xBiytS97zrJXhYW1kgMznO8hF8MkLm-UC57tMoREwEnT-LTJhfJRWsFxScDC4RMZA7yp9tpzAPqyQQI3IrbtnKos6HIjhQ8E1aoUTL4js2CN6d75PBqWrCZqM0Xo20nV-IEqxp1n5OHFrIHtfuRtwo7O3PLaAdKMmZGqyGgL0YcHBtF6QE0rkN0z5ZFl2as9CRw-Zf9ckAfjEJOVBsejKaexkU6zunvqordZno46Y~aml9Urdy8YLD-ScYh4LSC9bM6AfLAbNwPyFDh4lEMQ5DcIcFvc2OwrUHkA4fh~VQyqoVAfbR7obFNOA4FZ1w__"
                  />
                </div>
                <div className="col-span-5 row-span-4">
                  <img className="rounded-[8px]" src={bgAuthImage} />
                </div>
                <div className="col-span-6 row-span-4">
                  <img
                    className="rounded-[8px]"
                    src="https://s3-alpha-sig.figma.com/img/776f/da1c/fb5b145ed7f3edd720edd3ff25f0ff6d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHkfZZIQLvgCLbhMIUZxh2k4xBiytS97zrJXhYW1kgMznO8hF8MkLm-UC57tMoREwEnT-LTJhfJRWsFxScDC4RMZA7yp9tpzAPqyQQI3IrbtnKos6HIjhQ8E1aoUTL4js2CN6d75PBqWrCZqM0Xo20nV-IEqxp1n5OHFrIHtfuRtwo7O3PLaAdKMmZGqyGgL0YcHBtF6QE0rkN0z5ZFl2as9CRw-Zf9ckAfjEJOVBsejKaexkU6zunvqordZno46Y~aml9Urdy8YLD-ScYh4LSC9bM6AfLAbNwPyFDh4lEMQ5DcIcFvc2OwrUHkA4fh~VQyqoVAfbR7obFNOA4FZ1w__"
                  />
                </div>
                <div className="col-span-4 row-span-4">
                  <img className="rounded-[8px]" src={bgAuthImage} />
                </div>
              </div>

              {/* <div>
                                <div>
                                    <img className='rounded-[8px] h-[269px] w-[228px]' src={bgAuthImage} />
                                </div>
                                <div>
                                    <img className='rounded-[8px] h-[202px] w-[279px]' src={bgAuthImage} />
                                </div>
                                <div>
                                    <img className='rounded-[8px] h-[229px] w-[368px]' src={bgAuthImage} />
                                </div>
                                <div>
                                    <img className='rounded-[8px] h-[255px] w-[239px]' src={bgAuthImage} />
                                </div>
                            </div> */}
            </div>
            <div className="flex justify-center items-center w-full md:w-1/2">
              <div className="p-10">
                <h1 className="text-[40px] font-semibold blackText">
                  Enhance Your Creativity
                  <br></br>
                  Through <span className="text-[#F16E22]">AI Image Tools</span>
                </h1>
                <p className="mt-2 text-[#565656] text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div
                      className="p-4"
                      style={{
                        backgroundColor: 'rgba(0, 174, 184, 0.1)',
                        borderRadius: '8px',
                      }}
                    >
                      <img src={flashIcon} />
                    </div>
                    <div className="ms-4">
                      <p className="font-semibold text-xl">
                        Super Fast Image Generate
                      </p>
                      <p className="text-[#565656] text-[16px]">
                        We provide fastest ai image render
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center my-3">
                    <div
                      className="p-4"
                      style={{
                        backgroundColor: 'rgba(0, 174, 184, 0.1)',
                        borderRadius: '8px',
                      }}
                    >
                      <img src={qualityIcon} />
                    </div>
                    <div className="ms-4">
                      <p className="font-semibold text-xl">
                        High Quality AI Images
                      </p>
                      <p className="text-[#565656] text-[16px]">
                        We provide fastest ai image render
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="p-4"
                      style={{
                        backgroundColor: 'rgba(0, 174, 184, 0.1)',
                        borderRadius: '8px',
                      }}
                    >
                      <img src={gallaryIcon} />
                    </div>
                    <div className="ms-4">
                      <p className="font-semibold text-xl">
                        AI Image to Image Generate
                      </p>
                      <p className="text-[#565656] text-[16px]">
                        We provide fastest ai image render
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />

      <Footer />

      <style>
        {`
            

.top {
  height: 58px;
  border: 1px solid;
  border-top: 0;
  width: 120px;
  border-color:#00AEB8;
  background-color: white;
  padding-bottom:30px
}

.top {
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
}
                `}
      </style>
    </>
  )
}

export default About
