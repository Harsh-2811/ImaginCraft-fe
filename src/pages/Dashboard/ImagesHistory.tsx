import React from 'react'
import ImagesHistoryBody from './ImagesHistoryBody'
import DashboardHeader from './DashboardHeader'
import SidebarPanel from './SidebarPanel'

const ImagesHistory = () => {
  return (
    <>
      <div className="flex py-2 ps-2 h-[945px]">
        <div className="w-1/5 h-full">
          <SidebarPanel />
        </div>
        <div className="w-4/5">
          <DashboardHeader />
          <ImagesHistoryBody />
        </div>
      </div>
    </>
  )
}

export default ImagesHistory
