import { DesignWrapper } from '../components/designWrapper'
import facebookLogo from '../assets/facebook.png'
import googleLogo from '../assets/google.png'
import { Link } from 'react-router-dom'
import bgAuthImage from '../assets/authimages.png'
import appLogo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { loginUser } from '../redux/reducer/userSlice'
import { useState } from 'react'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailvalidation, setEmailValidation] = useState('')
  const [passvalidation, setPassValidation] = useState('')
  const [emailbordervalidationcolor, setEmailBorderValidationColor] =
    useState('#e5e7eb')
  const [passbordervalidationcolor, setPassBorderValidationColor] =
    useState('#e5e7eb')
  const dispatch: AppDispatch = useDispatch()
  // const { status, error } = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === '') {
      setEmailValidation('Please fill this field')
      setEmailBorderValidationColor('#FF0000')
    } else if (!email.includes('@')) {
      setEmailValidation('Please include an @ in the email address')
      setEmailBorderValidationColor('#FF0000')
    } else if (password === '') {
      setPassValidation('Please fill this field')
      setEmailBorderValidationColor('#e5e7eb')
      setPassBorderValidationColor('#FF0000')
      setEmailValidation('')
    } else {
      setPassValidation('')
      setPassBorderValidationColor('')
      setEmailBorderValidationColor('')
      dispatch(loginUser({ email, password }))
    }
  }
  const togglePasswordVisibility = () => {
    if (password) {
      setShowPassword(!showPassword)
    }
  }
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
                  type="email"
                  className="border rounded px-2 py-2"
                  style={{ borderColor: emailbordervalidationcolor }}
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p style={{ color: emailbordervalidationcolor }}>
                  {emailvalidation}
                </p>
              </div>
              <div className="flex mt-4 flex-col relative">
                <label className="">Password</label>
                <input
                  style={{ borderColor: passbordervalidationcolor }}
                  type={showPassword ? 'text' : 'password'}
                  className="border rounded px-2 py-2"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p style={{ color: passbordervalidationcolor }}>
                  {passvalidation}
                </p>

                <button
                  type="button"
                  className={`flex items-center absolute left-[24rem] ${passvalidation === '' ? 'top-[25px]' : 'top-[5px]'} bottom-0 right-0`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye"
                        width="20.568"
                        height="20.568"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#FB923C"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        id="Group_155"
                        data-name="Group 155"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.568"
                        height="20.568"
                        viewBox="0 0 20.568 20.568"
                      >
                        <path
                          id="Path_216"
                          data-name="Path 216"
                          d="M0,0H20.568V20.568H0Z"
                          fill="none"
                        />
                        <path
                          id="Path_217"
                          data-name="Path 217"
                          d="M18.426,9a9.945,9.945,0,0,1-7.713,3.428A9.945,9.945,0,0,1,3,9"
                          transform="translate(-0.429 -1.287)"
                          fill="none"
                          stroke="#c5c5c5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_218"
                          data-name="Path 218"
                          d="M3,14.457,5.143,11.2"
                          transform="translate(-0.429 -1.601)"
                          fill="none"
                          stroke="#c5c5c5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_219"
                          data-name="Path 219"
                          d="M20.644,14.436,18.508,11.2"
                          transform="translate(-2.646 -1.601)"
                          fill="none"
                          stroke="#c5c5c5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_220"
                          data-name="Path 220"
                          d="M9,16.428,9.429,13"
                          transform="translate(-1.287 -1.859)"
                          fill="none"
                          stroke="#c5c5c5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_221"
                          data-name="Path 221"
                          d="M14.929,16.428,14.5,13"
                          transform="translate(-2.073 -1.859)"
                          fill="none"
                          stroke="#c5c5c5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                  )}
                </button>
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
                  type="submit"
                  className="w-full focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
                  onClick={handleSubmit}
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
