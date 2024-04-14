import { DesignWrapper } from '../components/designWrapper'
import { Link } from 'react-router-dom'

export const EnterOtp = () => {
  return (
    <>
      <DesignWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* login left side */}
          <div className="relative h-[697px]">
            <div className="bg-authside-bg h-full opacity-100 w-full bg-no-repeat"></div>
            <div className="absolute inset-0 flex flex-col p-4 mt-[500px] lg:p-8">
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
          <div className="bg-white ml-32">
            <div className="mt-10 text-center">
              <p className="text-3xl font-bold text-blue-800">Enter Otp</p>
            </div>
            <div className="mt-2">
              <div className="mt-5">
                <form>
                  <div className="flex flex-col">
                    <label className="ml-16">Email OTP</label>
                    <div className="flex mt-1 flex-row gap-3 items-center justify-between mx-auto w-full max-w-lg">
                      <div className="w-26 h-12">
                        <input
                          className="w-full border-black h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                      <div className="w-26 h-12">
                        <input
                          className="w-full border-black h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                      <div className="w-26 h-12">
                        <input
                          className="w-full border-black h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                      <div className="w-26 h-12">
                        <input
                          className="w-full border-black h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded border text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row mt-4 items-center justify-between mx-auto w-full max-w-lg">
                      <button
                        type="button"
                        className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded text-sm px-5 py-2.5  dark:focus:ring-orange-900"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-center mt-[26rem]">
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
