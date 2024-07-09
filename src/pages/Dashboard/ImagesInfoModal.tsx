import React from 'react'
import ModalBlank from '../../components/ModalBlank';
import authimages from "../../assets/authimages.png";
import Download from "../../assets/download.svg";


const ImagesInfoModal = ({ DangerModalOpen, setDangerModalOpen }) => {
    return (
        <>
            <div className="m-1.5">
                <ModalBlank
                    id="danger-modal"
                    modalOpen={DangerModalOpen}
                    setModalOpen={setDangerModalOpen}
                >
                    <div className="p-5 w-full flex space-x-8 relative">
                        {/* Icon */}
                        <div className="w-2/4 flex items-center justify-center">
                            <img src={authimages} alt="" className='rounded-lg' />
                        </div>
                        {/* Content */}
                        <div className='w-3/4'>
                            {/* Modal header */}
                            <div className="mb-2 mt-2 pb-2 border-b">
                                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                    Images Details
                                </div>
                            </div>
                            {/* Modal content */}
                            <div className="text-sm mb-6">
                                <div className="space-y-2">
                                    <p className='text-orange-400 text-14pxFont font-bold'>Generated Date: <span className='text-black font-medium'>10 May 2024</span></p>
                                    <p className='text-orange-400 text-14pxFont font-bold'>Generated Time: <span className='text-black font-medium'>11:33AM</span></p>
                                    <p className='text-orange-400 text-14pxFont font-bold'>Used Credit for this image: <span className='text-black font-medium'>10</span></p>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div>
                                <button className='bg-green-400 flex items-center px-4 py-2 rounded-lg text-white'>
                                    <img src={Download} alt="" className='me-2' />
                                    Download
                                </button>
                            </div>
                        </div>
                    <div className='absolute top-[13px] right-[15px] cursor-pointer' onClick={() => setDangerModalOpen(false)}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_735_905)">
                                <path d="M0.174045 1.01497C-0.0580149 0.782911 -0.0580149 0.406562 0.174045 0.17438C0.406104 -0.0578012 0.782453 -0.0578012 1.01463 0.17438L7.49997 6.65972L13.9853 0.17438C14.2174 -0.0578012 14.5937 -0.0578012 14.826 0.17438C15.0581 0.40644 15.0581 0.782911 14.826 1.01497L8.34044 7.50018L14.8259 13.9856C15.058 14.2177 15.058 14.594 14.8259 14.8262C14.5937 15.0584 14.2174 15.0584 13.9852 14.8262L7.49985 8.34089L1.01463 14.8262C0.782575 15.0584 0.406226 15.0584 0.174045 14.8262C-0.0580149 14.5942 -0.0580149 14.2178 0.174045 13.9856L6.65938 7.50018L0.174045 1.01497Z" fill="#F16E22" />
                            </g>
                            <defs>
                                <clipPath id="clip0_735_905">
                                    <rect width="15" height="15.0002" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div> 
                    </div>
                </ModalBlank>
            </div>
        </>
    )
}

export default ImagesInfoModal