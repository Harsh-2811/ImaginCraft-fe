import React from 'react'
import ProfileBody from './ProfileBody'
import DashboardHeader from './DashboardHeader'
import SidebarPanel from './SidebarPanel'

const Profile = () => {
  return (
    <>
      <div className="flex py-2 ps-2 h-[945px]">
        <div className="w-1/5 h-full">
          <SidebarPanel />
        </div>
        <div className="w-4/5">
          <DashboardHeader />
          <ProfileBody />
        </div>
      </div>
    </>
  )
}

export default Profile
