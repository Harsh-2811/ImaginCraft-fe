import { Link, Outlet } from 'react-router-dom'
import ImaginCraftLogo from '../assets/logo.png'
import React from 'react'
interface Links {
  link: React.FC
}
export const Header: React.FC = () => {
  const links: Array<Links> = [
    {
      link: () => (
        <>
          <Link to={'/'} className="md:text-lg">
            Home
          </Link>
        </>
      ),
    },
    {
      link: () => (
        <>
          <Link to={'/about-us'} className="md:text-lg">
            About Us
          </Link>
        </>
      ),
    },
    {
      link: () => (
        <>
          <Link to={'/contact-us'} className="md:text-lg">
            Contact Us
          </Link>
        </>
      ),
    },
    {
      link: () => (
        <>
          <Link to={'/playground'} className="md:text-lg">
            Playground
          </Link>
        </>
      ),
    },
    {
      link: () => (
        <>
          <Link
            to={'/sign-in'}
            className="bg-[#F16E22] text-white px-3 max-w-[157px] rounded-md py-2"
          >
            Log in or sign up
          </Link>
        </>
      ),
    },
  ]
  return (
    <>
      <div className="h-[90px] w-full border-b-2">
        <div className="flex justify-between flex-row items-center content-center">
          <div className="h-[56px] w-[309px] md:p-4 mls-10">
            <a href="/">
              <img src={ImaginCraftLogo} alt="imaginCraft Logo" />
            </a>
          </div>
          <div className="flex mt-6 gap-6 mr-16 items-center ">
            {links?.map((link: Links, index: number) => (
              <React.Fragment key={index}>
                {link?.link('no props')}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
