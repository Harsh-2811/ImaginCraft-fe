import React from 'react'
import flashIcon from '../assets/flash.svg'
import qualityIcon from '../assets/quality.svg'
import gallaryIcon from '../assets/gallary.svg'
import rightImg from '../assets/rightImg.png'
import logoText from '../assets/logo_text.png'
import robotImage from '../assets/robotImg.png'
import playgroundRouteIcon from '../assets/playgroundRouteIcon.svg'

const Home = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="my-14">
          <div className="flex justify-between">
            <div className="flex w-10/12">
              <img className="h-[190px]" src={robotImage} />
              <div>
                <h1 className="text-[72px] font-semibold text-[#F16E22] leading-[96px]">
                  Generate <span className="text-[#2F2F2F]">image </span>{' '}
                </h1>
                <h1 className="text-[72px] font-semibold text-[#F16E22] flex">
                  {' '}
                  <span className="text-[#2F2F2F]">with</span>{' '}
                  <img className="h-[88px] mt-[18px] ms-3" src={logoText} />
                </h1>
                <p className="text-[#565656] text-xl">
                  Create production-quality visual assets for your projects with
                  unprecedented quality, speed, and style-consistency.
                </p>
                <button className="bg-[#F16E22] mt-5 text-white px-3 rounded-md py-2">
                  Log in or sign up
                </button>
              </div>
            </div>

            <div>
              <a className="cursor-pointer" href="/playground">
                <img className="mt-5" src={playgroundRouteIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="my-5">
          <div className="flex items-center flex-wrap">
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
            <div className="md:w-1/2 w-full">
              <img className="mx-auto" src={rightImg} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-[#2F2F2F] mt-14">
        <div className="my-5">
          <div className="text-center">
            <button className="uppercase border px-3 py-2 text-[#0081A8] text-[13px] rounded-md border-[#0081A8]">
              blogs
            </button>
            <h1 className="text-[40px] font-semibold mt-4">
              READ THE LATEST
              <br></br>
              RESEARCH INSIGHTS
            </h1>
          </div>

          <div className="blogs_container grid md:grid-cols-2 gap-4 text-[#0B2529] mt-10">
            <div className="blog_card border rounded-xl p-5 flex w-full">
              <div className="flex" style={{ objectFit: 'contain' }}>
                <img
                  className="w-[240px] h-[240px] rounded-lg max-w-fit"
                  src="https://pics.craiyon.com/2023-09-12/b69072768e6a495280a21dd43945f398.webp"
                />
              </div>
              <div className="flex flex-col justify-between ms-5">
                <div>
                  <div className="uppercase text-[14px] px-3 py-2 rounded-full border w-max mb-4">
                    ai generated
                  </div>
                  <p className=" text-xl">
                    WordPress onderhoud en de gevolgen van niet tijdig updaten!
                  </p>
                </div>
                <p className="text-[#455052] font-medium">Mar 21, 2024</p>
              </div>
            </div>
            <div className="blog_card border rounded-xl p-5 flex w-full">
              <div className="flex" style={{ objectFit: 'contain' }}>
                <img
                  className="w-[240px] h-[240px] rounded-lg max-w-fit"
                  src="https://pics.craiyon.com/2023-09-12/b69072768e6a495280a21dd43945f398.webp"
                />
              </div>
              <div className="flex flex-col justify-between ms-5">
                <div>
                  <div className="uppercase text-[14px] px-3 py-2 rounded-full border w-max mb-4">
                    ai generated
                  </div>
                  <p className=" text-xl">
                    WordPress onderhoud en de gevolgen van niet tijdig updaten!
                  </p>
                </div>
                <p className="text-[#455052] font-medium">Mar 21, 2024</p>
              </div>
            </div>
            <div className="blog_card border rounded-xl p-5 flex w-full">
              <div className="flex" style={{ objectFit: 'contain' }}>
                <img
                  className="w-[240px] h-[240px] rounded-lg max-w-fit"
                  src="https://pics.craiyon.com/2023-09-12/b69072768e6a495280a21dd43945f398.webp"
                />
              </div>
              <div className="flex flex-col justify-between ms-5">
                <div>
                  <div className="uppercase text-[14px] px-3 py-2 rounded-full border w-max mb-4">
                    ai generated
                  </div>
                  <p className=" text-xl">
                    WordPress onderhoud en de gevolgen van niet tijdig updaten!
                  </p>
                </div>
                <p className="text-[#455052] font-medium">Mar 21, 2024</p>
              </div>
            </div>
            <div className="blog_card border rounded-xl p-5 flex w-full">
              <div className="flex" style={{ objectFit: 'contain' }}>
                <img
                  className="w-[240px] h-[240px] rounded-lg max-w-fit"
                  src="https://pics.craiyon.com/2023-09-12/b69072768e6a495280a21dd43945f398.webp"
                />
              </div>
              <div className="flex flex-col justify-between ms-5">
                <div>
                  <div className="uppercase text-[14px] px-3 py-2 rounded-full border w-max mb-4">
                    ai generated
                  </div>
                  <p className=" text-xl">
                    WordPress onderhoud en de gevolgen van niet tijdig updaten!
                  </p>
                </div>
                <p className="text-[#455052] font-medium">Mar 21, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
