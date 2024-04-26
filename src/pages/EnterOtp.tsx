import { DesignWrapper } from '../components/designWrapper'
import { Link } from 'react-router-dom'
import bgAuthImage from '../assets/authimages.png'
import appLogo from '../assets/logo.png'

export const EnterOtp = () => {
  return (
    <>
      <DesignWrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
          {/* login left side */}
          <div className="relative h-[697px]  max-w-full lg:max-w-[690px] md:col-span-6 lg:col-span-7">
            {/* <div className="bg-authside-bg h-full opacity-100 w-full bg-no-repeat"></div> */}
            <div className="bg-white w-[204px] px-2 py-3 absolute top-0 left-0 rounded-tl-[5px] rounded-br-[5px] ">
              <img src={appLogo} />
            </div>
            <img src={bgAuthImage} className="w-full h-full max-w-[690px]" />
            <div className="absolute bottom-0 flex flex-col p-4 lg:p-8">
              <div className="">
                <p className="font-bold text-3xl lg:text-5xl text-white">
                  Welcome back!
                </p>
              </div>
              <div className="mt-1">
                <p className="font-semibold text-sm lg:text-base text-white">
                  Sign in with your email and personal details to get started
                </p>
              </div>
            </div>
          </div>

          {/* login right side */}
          <div className="bg-white md:col-span-6 lg:col-span-5">
            <div className="mt-10 text-center">
              <p className="text-[34px] font-bold text-blue-800">
                Forgot password
              </p>
            </div>
            <div className="mt-2">
              <div className="mt-5">
                <form>
                  <div className="flex flex-col mt-4">
                    <label className="px-16 text-[15px]">Email OTP</label>
                    <div className="flex mt-1 px-16 flex-row gap-[10px] items-center justify-between mx-auto w-full">
                      <div className="w-26 h-[44px]">
                        <input
                          className="w-full border-[#ADADAD] h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                      <div className="w-26 h-[44px]">
                        <input
                          className="w-full border-[#ADADAD] h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                      <div className="w-26 h-[44px]">
                        <input
                          className="w-full border-[#ADADAD] h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                      <div className="w-26 h-[44px]">
                        <input
                          className="w-full border-[#ADADAD] h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex px-16 flex-row mt-4 items-center justify-between mx-auto w-full">
                      <button
                        type="button"
                        className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-[8px] text-[16px] px-5 py-2.5  dark:focus:ring-orange-900"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-center">
                <p className="font-semibold">
                  Back to{' '}
                  <Link to={'/signin'} className="text-orange-400">
                    Sign In
                  </Link>{' '}
                  or{' '}
                  <Link to={'/signup'} className="text-orange-400">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DesignWrapper>
    </>
  )
}
