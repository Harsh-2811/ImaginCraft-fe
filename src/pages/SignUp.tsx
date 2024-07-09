import { DesignWrapper } from '../components/designWrapper'
import facebookLogo from '../assets/facebook.png'
import googleLogo from '../assets/google.png'
import { Link } from 'react-router-dom'
import bgAuthImage from '../assets/authimages.png'
import appLogo from '../assets/logo.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'

export const SignUp = () => {
  const [value, setValue] = useState()
  const [isOrganization, setIsOrganization] = useState(false) // State to track radio button selection

  const handleRadioChange = (event) => {
    setIsOrganization(event.target.value === 'organization');
  }
  return (
    <>
      <DesignWrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
          {/* login left side */}
          <div className="relative h-[840px] max-w-full lg:max-w-[816px] md:col-span-6 lg:col-span-7">
            {/* <div className="bg-authside-bg h-full opacity-100 w-full bg-no-repeat"></div> */}
            <div className="bg-white w-[204px] px-2 py-3 absolute top-0 left-0 rounded-tl-[5px] rounded-br-[5px] ">
              <img src={appLogo} />
            </div>
            <img src={bgAuthImage} className="w-full h-full" />
            <div className="absolute bottom-0 flex flex-col p-4 mt-[500px] lg:p-8">
              <div className="">
                <p className="font-bold text-3xl lg:text-5xl text-white">
                  You are new here!
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
              <p className="text-3xl font-bold text-blue-800">Sign Up</p>
            </div>
            <div className='px-8 pt-8 gap-4 signup_radio flex items-center'>

              <div className="flex items-center">
                <input
                  checked={!isOrganization} // Set checked based on state
                  id="orange-radio"
                  type="radio"
                  value="individual"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleRadioChange}
                />
                <label for="orange-radio" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Individual User</label>
              </div>
              <div className="flex items-center">
                <input
                  checked={isOrganization} // Set checked based on state (inverse of individual)
                  id="default-radio-1"
                  type="radio"
                  value="organization"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleRadioChange}
                />
                <label for="default-radio-1" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Organization</label>
              </div>
            </div>
            <div className="mt-2 px-8 pb-8 pt-4">
              <div className='flex'>


                <div className="flex flex-col w-[250px]">
                  <label className="">Full Name</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-2"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className='ms-2 w-[258px] phone_no'>
                  <label className="">Enter Phone No.</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    country={'in'}
                  />
                </div>
              </div>


              <div className="flex flex-col mt-4">
                <label className="">Email Address</label>
                <input
                  type="text"
                  className="border rounded px-2 py-2"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className='flex gap-2 mt-4 w-full'>

                <div className="flex flex-col w-[50%]">
                  <label className="">Password</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-2"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="">Confirm Password</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-2"
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              {
                isOrganization && (
                  <>
                    <div className="flex mt-4 flex-col w-[100%]">
                      <label className="">Organization Name</label>
                      <input
                        type="text"
                        className="border rounded px-2 py-2"
                        placeholder="Enter Organization Name"
                      />
                    </div>
                    <div className="flex mt-4 flex-col w-[100%]">
                      <label className="">Website URL</label>
                      <input
                        type="text"
                        className="border rounded px-2 py-2"
                        placeholder="Enter Website URL"
                      />

                    </div>
                  </>
                )
              }

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
                    I agree to the <a className="text-orange-400">Terms</a> and{' '}
                    <a className="text-orange-400">Privacy Policy.</a>
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
                >
                  Sign Up
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
                  Already have an account?{' '}
                  <Link to={'/sign-in'} className="text-orange-500">
                    Sign In
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
