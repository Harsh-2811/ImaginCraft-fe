import { Link, Outlet } from 'react-router-dom'
import ImaginCraftLogo from '../assets/logo.png'
import React from 'react'
interface Links {
    link: React.FC
}
export const Header: React.FC = () => {
    const links: Array<Links> = [
        {
            link: () => (<>
                <Link to={'/'} className='text-lg'>Home</Link>
            </>)
        },
        {
            link: () => (<>
                <Link to={'/about-us'} className='text-lg'>About Us</Link>
            </>)
        },
        {
            link: () => (<>
                <Link to={'/contact-us'} className='text-lg'>Contact Us</Link>
            </>)
        },
        {
            link: () => (<>
                <Link to={'/playground'} className='text-lg'>Playground</Link>
            </>)
        },
        {
            link: () => (<>
                <button className='bg-[#F16E22] text-white px-3 rounded-md py-2'>Log in or sign up</button>
            </>)
        }

    ]
    return (
        <>
            <div className="h-[90px] w-full border-b-2">
                <div className="flex justify-between flex-row items-center content-center">
                    <div className="h-[56px] w-[309px] p-4 ml-10">
                        <img src={ImaginCraftLogo} alt="imaginCraft Logo" />
                    </div>
                    <div className='flex mt-6 gap-6 mr-16 items-center'>
                        {
                            links?.map((link: Links, index: number) => (<React.Fragment key={index}>{link?.link('no props')}</React.Fragment>))
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}