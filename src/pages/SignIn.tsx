import { DesignWrapper } from '../components/designWrapper'
import facebookLogo from '../assets/facebook.png'
import googleLogo from '../assets/google.png'
import { Link } from 'react-router-dom'
import bgAuthImage from '../assets/authimages.png'
import appLogo from '../assets/logo.png'

export const SignIn = () => {
  return (
    <>
      <DesignWrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
          {/* login left side */}
          <div className="relative mt-[50px] md:mt-0 max-h-[697px] max-w-full lg:max-w-[690px] md:col-span-6 lg:col-span-7">
            {/* <div className="bg-authside-bg  bg-[length:100%_100%] h-[697px] opacity-100 w-[690px] bg-no-repeat"></div> */}
            <div className="bg-white w-[204px] px-2 py-3 absolute top-0 left-0 rounded-tl-[5px] rounded-br-[5px] ">
              <img src={appLogo} />
            </div>
            <img
              src={bgAuthImage}
              className="w-full h-full max-h-[80%} rounded-br-[8px] md:rounded-bl-[8px] md:rounded-tl-[8px] rounded-tl-[8px] md:rounded-tr-[0px] md:rounded-br-[0px]"
            />
            <div className="absolute flex flex-col p-4 bottom-0 lg:p-8">
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
          <div className="bg-white md:col-span-6 lg:col-span-5 rounded-br-[8px] md:rounded-br-[8px] md:rounded-tr-[8px] rounded-bl-[8px] md:rounded-tl-[0px] md:rounded-bl-[0px]">
            <div className="mt-10 text-center">
              <p className="text-3xl font-bold text-blue-800">Sign In</p>
            </div>
            <div className="mt-2 p-8">
              <div className="flex flex-col">
                <label className="">Email Address</label>
                <input
                  type="text"
                  className="border rounded px-2 py-2"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex mt-4 flex-col">
                <label className="">Password</label>
                <input
                  type="text"
                  className="border rounded px-2 py-2"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="flex mt-2 flex-row justify-between">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Remember Me
                  </label>
                </div>
                <div>
                  <p className="text-orange-600">
                    <Link to={'/forgot-password'}>Forgot Password?</Link>
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
                >
                  Sign In
                </button>
              </div>
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex-1 border-t-2 border-gray-200"></div>
                  <span className="px-3 font-semibold bg-white">
                    Or With Social Profile
                  </span>
                  <div className="flex-1 border-t-2 border-gray-200"></div>
                </div>
              </div>
              <div className="flex justify-center mt-4 gap-4">
                <img
                  src={facebookLogo}
                  alt="facebook logo"
                  height={45}
                  width={45}
                />
                <img
                  src={googleLogo}
                  alt="google logo"
                  height={45}
                  width={45}
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-semibold">
                  Don't have an account?{' '}
                  <Link to={'/sign-up'} className="text-orange-500">
                    Sign Up
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
