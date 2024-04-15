import { DesignWrapper } from '../components/designWrapper'
import { Link } from 'react-router-dom'
import bgAuthImage from "../assets/authimages.png"
import appLogo from "../assets/logo.png"


export const NewPassword = () => {
  return (
    <>
      <DesignWrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
          {/* login left side */}
          <div className="relative h-[697px] max-w-full lg:max-w-[690px] md:col-span-6 lg:col-span-7">
            {/* <div className="bg-authside-bg h-full opacity-100 w-full bg-no-repeat"></div> */}
            <div className='bg-white w-[204px] px-2 py-3 absolute top-0 left-0 rounded-tl-[5px] rounded-br-[5px] '>
              <img src={appLogo} />
            </div>
            <img src={bgAuthImage} className='w-full h-full' />
            <div className="absolute bottom-0 flex flex-col p-4 mt-[500px] lg:p-8">
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
            <div className="mt-2 p-8 flex justify-between flex-col h-full">
              <div>
                <div className=" mb-5 text-center">
                  <p className="text-3xl font-bold text-blue-800">
                    Update Password
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="">New Password</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-2"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="flex mt-4 flex-col">
                  <label className="">Confirm Password</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-2"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
                  >
                    Create Password
                  </button>
                </div>
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
