import React from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

const DashboardHeader = () => {
  const location = useLocation()
  const { pathname } = location
  const onLogout = async () => {
    localStorage.removeItem('user-token')
    toast.success('successfully logged out')
    window.location.href = '/'
  }
  return (
    <>
      <div className="flex justify-between items-center m-5 pt-1 pb-5 border-b">
        <div>
          <h1 className="text-4xl font-bold">
            {pathname.includes('dashboard')
              ? 'Dashboard'
              : pathname.includes('profile')
                ? 'Profile'
                : pathname.includes('apikeys')
                  ? 'API Keys'
                  : pathname.includes('billing-details')
                    ? 'Billing Details'
                    : pathname.includes('imageshistory')
                      ? 'Images History'
                      : ''}
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center cursor-pointer" onClick={onLogout}>
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4998 3.34355L20.5365 8.38027C20.8318 8.67559 21 9.08164 21 9.5C21 9.91836 20.8318 10.3244 20.5365 10.6197L15.4998 15.6564C15.2373 15.9189 14.8846 16.0625 14.5154 16.0625C13.7484 16.0625 13.125 15.4391 13.125 14.6721V12.125H7.875C7.14902 12.125 6.5625 11.5385 6.5625 10.8125V8.1875C6.5625 7.46152 7.14902 6.875 7.875 6.875H13.125V4.32793C13.125 3.56094 13.7484 2.9375 14.5154 2.9375C14.8846 2.9375 15.2373 3.08516 15.4998 3.34355ZM6.5625 2.9375H3.9375C3.21152 2.9375 2.625 3.52402 2.625 4.25V14.75C2.625 15.476 3.21152 16.0625 3.9375 16.0625H6.5625C7.28848 16.0625 7.875 16.649 7.875 17.375C7.875 18.101 7.28848 18.6875 6.5625 18.6875H3.9375C1.76367 18.6875 0 16.9238 0 14.75V4.25C0 2.07617 1.76367 0.3125 3.9375 0.3125H6.5625C7.28848 0.3125 7.875 0.899023 7.875 1.625C7.875 2.35098 7.28848 2.9375 6.5625 2.9375Z"
                fill="#00477A"
              />
            </svg>
            <p className="ms-1.5 text-[15px] font-medium text-blue-600">
              Logout
            </p>
          </div>
          <div>
            <button className="bg-orange-400 rounded-lg py-2 px-4 text-white text-[15px]">
              Purchase Plans
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader
