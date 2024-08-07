import React, { useState } from 'react';
import ImagesInfoModal from './ImagesInfoModal';
import bgAuthImage from "../../assets/authimages.png"
import DOWNLOAD_ICON from "../../assets/download.svg"
import ORANGE_SEARCH from "../../assets/search_orange.svg"

const ImagesHistoryBody = () => {
    const [DangerModalOpen, setDangerModalOpen,] = useState(false)
    return (
        <>
            <div className="m-5">
                <div className='grid gap-5 md:grid-cols-2 grid-cols-1 mb-5'>
                    <div className='relative'>
                        <input className='border border-[#ADADAD] w-full rounded-[4px] py-2 px-4' type='text' placeholder='Search..' />
                        <img src={ORANGE_SEARCH} className='absolute top-0 right-3 top-2' />
                    </div>
                    <div className='flex justify-end'>
                        <select className='border border-[#ADADAD] rounded-[4px] w-[200px] py-2 px-2'>
                            <option value='All'>Select Category</option>
                            <option value='History'>History</option>
                            <option value='Authentic'>Authentic</option>
                        </select>
                        <select className='border border-[#ADADAD] rounded-[4px] w-[200px] py-2 px-2 ms-5'>
                            <option value='All'>Select Theme</option>
                            <option value='History'>History</option>
                            <option value='Authentic'>Authentic</option>
                        </select>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
                    <div className='border border-[#ADADAD] rounded-lg flex flex-wrap p-4'>
                        <div className='sm:w-[45%] w0full'>
                            <img className='w-full rounded-lg' src={bgAuthImage} alt="" />
                        </div>
                        <div className='sm:w-[55%] w-full pl-4'>
                            <h4 className='text-20pxFont font-bold pb-3 mt-2 sm:mt-0' style={{ borderBottom: "1px solid #DDDDDD" }}>Image Details</h4>
                            <div className='mb-2'>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Date:</span>
                                    <span className='text-14pxFont font-semibold'> 10 May 2024</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Time:</span>
                                    <span className='text-14pxFont font-semibold'> 11:33AM</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Category: </span>
                                    <span className='text-14pxFont font-semibold'>Category 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Element:</span>
                                    <span className='text-14pxFont font-semibold'>Element 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Credit Used: </span>
                                    <span className='text-14pxFont font-semibold'>20</span>
                                </div>
                            </div>
                            <button className='flex items-center bg-[#00AEB8] text-white rounded-lg px-3 py-2 font-semibold'>
                                <img src={DOWNLOAD_ICON} className='pe-2' alt="download" />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>

                    <div className='border border-[#ADADAD] rounded-lg flex flex-wrap p-4'>
                        <div className='sm:w-[45%] w0full'>
                            <img className='w-full rounded-lg' src={bgAuthImage} alt="" />
                        </div>
                        <div className='sm:w-[55%] w-full pl-4'>
                            <h4 className='text-20pxFont font-bold pb-3 mt-2 sm:mt-0' style={{ borderBottom: "1px solid #DDDDDD" }}>Image Details</h4>
                            <div className='mb-2'>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Date:</span>
                                    <span className='text-14pxFont font-semibold'> 10 May 2024</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Time:</span>
                                    <span className='text-14pxFont font-semibold'> 11:33AM</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Category: </span>
                                    <span className='text-14pxFont font-semibold'>Category 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Element:</span>
                                    <span className='text-14pxFont font-semibold'>Element 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Credit Used: </span>
                                    <span className='text-14pxFont font-semibold'>20</span>
                                </div>
                            </div>
                            <button className='flex items-center bg-[#00AEB8] text-white rounded-lg px-3 py-2 font-semibold'>
                                <img src={DOWNLOAD_ICON} className='pe-2' alt="download" />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>

                    <div className='border border-[#ADADAD] rounded-lg flex flex-wrap p-4'>
                        <div className='sm:w-[45%] w0full'>
                            <img className='w-full rounded-lg' src={bgAuthImage} alt="" />
                        </div>
                        <div className='sm:w-[55%] w-full pl-4'>
                            <h4 className='text-20pxFont font-bold pb-3 mt-2 sm:mt-0' style={{ borderBottom: "1px solid #DDDDDD" }}>Image Details</h4>
                            <div className='mb-2'>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Date:</span>
                                    <span className='text-14pxFont font-semibold'> 10 May 2024</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Time:</span>
                                    <span className='text-14pxFont font-semibold'> 11:33AM</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Category: </span>
                                    <span className='text-14pxFont font-semibold'>Category 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Element:</span>
                                    <span className='text-14pxFont font-semibold'>Element 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Credit Used: </span>
                                    <span className='text-14pxFont font-semibold'>20</span>
                                </div>
                            </div>
                            <button className='flex items-center bg-[#00AEB8] text-white rounded-lg px-3 py-2 font-semibold'>
                                <img src={DOWNLOAD_ICON} className='pe-2' alt="download" />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>

                    <div className='border border-[#ADADAD] rounded-lg flex flex-wrap p-4'>
                        <div className='sm:w-[45%] w0full'>
                            <img className='w-full rounded-lg' src={bgAuthImage} alt="" />
                        </div>
                        <div className='sm:w-[55%] w-full pl-4'>
                            <h4 className='text-20pxFont font-bold pb-3 mt-2 sm:mt-0' style={{ borderBottom: "1px solid #DDDDDD" }}>Image Details</h4>
                            <div className='mb-2'>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Date:</span>
                                    <span className='text-14pxFont font-semibold'> 10 May 2024</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Generated Time:</span>
                                    <span className='text-14pxFont font-semibold'> 11:33AM</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Category: </span>
                                    <span className='text-14pxFont font-semibold'>Category 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Element:</span>
                                    <span className='text-14pxFont font-semibold'>Element 01</span>
                                </div>
                                <div className='py-1'>
                                    <span className='font-bold text-[#F16E22] text-14pxFont'>Credit Used: </span>
                                    <span className='text-14pxFont font-semibold'>20</span>
                                </div>
                            </div>
                            <button className='flex items-center bg-[#00AEB8] text-white rounded-lg px-3 py-2 font-semibold'>
                                <img src={DOWNLOAD_ICON} className='pe-2' alt="download" />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                <ImagesInfoModal
                    DangerModalOpen={DangerModalOpen}
                    setDangerModalOpen={setDangerModalOpen}
                />
            }
        </>
    )
}

export default ImagesHistoryBody;