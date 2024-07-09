import React from 'react'

const ProfileBody = () => {
  return (
    <>
    <div className='m-5'>
      <div className='flex gap-8'>
        <div className='w-1/2'>
          <h6>Full Name</h6>
          <input disabled className='border rounded-md ps-2 py-2 w-full opacity-50' type="text" value="Harsh Patel"/>
        </div>
        <div className='w-1/2'>
          <h6>Email Address</h6>
          <input disabled className='border rounded-md ps-2 py-2 w-full opacity-50' type="text" value="harshpatel@gmail.com"  />
        </div>
      </div>

      <div className='flex gap-8 mt-5'>
        <div className='w-1/2'>
          <h6>Password</h6>
          <input disabled className='border rounded-md ps-2 py-2 w-full opacity-50' type="password" value="Harsh Patel"/>
        </div>
        <div className='w-1/2'>
          <h6>Confirm Password</h6>
          <input disabled className='border rounded-md ps-2 py-2 w-full opacity-50' type="password" value="123456" />
        </div>
      </div>

    </div>
    </>
  )
}

export default ProfileBody