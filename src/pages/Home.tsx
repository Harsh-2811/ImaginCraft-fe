import flashIcon from '../assets/flash.svg'
import qualityIcon from '../assets/quality.svg'
import gallaryIcon from '../assets/gallary.svg'
import rightImg from '../assets/rightImg.png'
import logoText from '../assets/logo_text.png'
import robotImage from '../assets/robotImg.png'
import Footer from '../components/Footer'
import doubleTickIcon from '../assets/doubleTickIcon.svg'
import supportIcon from '../assets/excelletSupportIcon.svg'
import brainIcon from '../assets/brain.svg'
import diamondIcon from '../assets/diamond.svg'
import customizeIcon from '../assets/customize.svg'
import MovingText from '../components/MovingText'
import CircularText from '../components/CircularText'
import SwiperSlider from '../components/SwiperSlider'

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
                <h1 className="text-[72px] font-semibold text-[#F16E22] flex flex-wrap">
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
                <CircularText />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SwiperSlider />
      </div>
      <div className="text-center ">
        <button className="border border-[#0081A8] text-[#0081A8] text-[13px] font-semibold rounded-[5px] py-2 px-3 mb-3 uppercase">
          huge collection
        </button>
        <h2 className="text-[#2F2F2F] text-[40px] text-center font-bold mb-10 leading-[50px]">
          Generate all AI image for <br></br> your working
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2 text-[#2F2F2F]">
        <div className="relative ">
          <div className="absolute top-[130px]  w-[95%] h-[394px]">
            <img
              className="h-full w-full rounded-tr-[16px] rounded-br-[16px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/776f/da1c/fb5b145ed7f3edd720edd3ff25f0ff6d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHkfZZIQLvgCLbhMIUZxh2k4xBiytS97zrJXhYW1kgMznO8hF8MkLm-UC57tMoREwEnT-LTJhfJRWsFxScDC4RMZA7yp9tpzAPqyQQI3IrbtnKos6HIjhQ8E1aoUTL4js2CN6d75PBqWrCZqM0Xo20nV-IEqxp1n5OHFrIHtfuRtwo7O3PLaAdKMmZGqyGgL0YcHBtF6QE0rkN0z5ZFl2as9CRw-Zf9ckAfjEJOVBsejKaexkU6zunvqordZno46Y~aml9Urdy8YLD-ScYh4LSC9bM6AfLAbNwPyFDh4lEMQ5DcIcFvc2OwrUHkA4fh~VQyqoVAfbR7obFNOA4FZ1w__"
            />
          </div>
          <div className="border border-[#F16E22] border-l-0 h-[455px] rounded-tr-[16px] rounded-br-[16px] bg-light-orange">
            <div className="flex justify-center mt-[32px]">
              <div>
                <h4 className="font-extrabold	text-[38px] mb-0 pb-0 leading-[45px]">
                  1M+
                </h4>
                <p className="font-semibold	text-[13px] text-[#0081A8] uppercase">
                  Peoples are using
                </p>
              </div>
              <div className="mx-5">
                <h4 className="font-extrabold	text-[38px] mb-0 pb-0 leading-[45px]">
                  100%
                </h4>
                <p className="font-semibold	text-[13px] text-[#0081A8] uppercase">
                  Happy Customers
                </p>
              </div>
              <div>
                <h4 className="font-extrabold	text-[38px] mb-0 pb-0 leading-[45px]">
                  1M+
                </h4>
                <p className="font-semibold	text-[13px] text-[#0081A8] uppercase">
                  Peoples are using
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] md:mt-0 ps-[20px] md:ps-0">
          <h2 className="text-[34px] font-bold max-w-[476px]">
            Architecting the{' '}
            <span className="text-[#00AEB8] ">Digital Future</span>
          </h2>
          <p className="text-[16px] text-[#565656] mt-3 max-w-[476px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-[16px] text-[#565656] mt-3 max-w-[476px]">
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
        </div>
      </div>

      <MovingText />

      <div className="grid md:grid-cols-4 text-white ">
        <div className="h-[90vh] bg-[#00477A] relative">
          <div className="p-6 h-full flex flex-col justify-between cardContent">
            <div>
              <img src={supportIcon} className="h-[60px] w-[60px]" />{' '}
            </div>
            <div className="bottom-6 cardTextContent">
              <h3 className="font-bold text-[24px]">Excellent support</h3>
              <p className="text-[16px] duration-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className="h-[90vh] bg-[#0081A8] relative cardContent">
          <div className="p-6 p-6 h-full flex flex-col justify-between cardContent">
            <div>
              <img src={brainIcon} className="h-[60px] w-[60px]" />{' '}
            </div>
            <div className="cardTextContent bottom-6">
              <h3 className="font-bold text-[24px]">Speed & Efficiency</h3>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className="h-[90vh] bg-[#00477A] relative cardContent">
          <div className="p-6 p-6 h-full flex flex-col justify-between cardContent">
            <div>
              <img src={diamondIcon} className="h-[60px] w-[60px]" />{' '}
            </div>
            <div className="cardTextContent bottom-0">
              <h3 className="font-bold text-[24px]">Quality & Realism</h3>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className="h-[90vh] bg-[#0081A8] relative cardContent">
          <div className="p-6 p-6 h-full flex flex-col justify-between cardContent">
            <div>
              <img src={customizeIcon} className="h-[60px] w-[60px]" />{' '}
            </div>
            <div className="cardTextContent bottom-0">
              <h3 className="font-bold text-[24px]">Customize & Refine</h3>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-[70px]">
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

      <Footer />
    </>
  )
}

export default Home
