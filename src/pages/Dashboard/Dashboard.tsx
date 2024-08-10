import SidebarPanel from './SidebarPanel'
import DashboardHeader from './DashboardHeader'
import DashboardBody from './DashboardBody'

const Dashboard = () => {
  return (
    <>
      <div className="flex py-2 ps-2 h-[945px]">
        <div className="w-1/5 h-full">
          <SidebarPanel />
        </div>
        <div className="w-4/5">
          <DashboardHeader />
          <DashboardBody />
        </div>
      </div>
    </>
  )
}

export default Dashboard
