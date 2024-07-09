import React, { useState } from 'react';
import Images_History from "../../assets/imagesHistory.png";
import Info from "../../assets/info.svg"
import Download from "../../assets/download.svg"
import ImagesInfoModal from './ImagesInfoModal';

const ImagesHistoryBody = () => {
    const [DangerModalOpen,setDangerModalOpen,] = useState(false)
    return (
        <>
            <div className="m-5">
                <div className='flex flex-wrap'>
                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 p-2 relative'>
                        <img className='w-full' src={Images_History} alt="" />
                        <div className='flex gap-x-2 bottom-[2rem] right-[2rem] absolute'>
                            <div className='bg-orange-400 py-3 px-3 rounded-lg cursor-pointer'
                            onClick={() => setDangerModalOpen(true)}
                            >
                                <img src={Info} alt="" />
                            </div>
                            <div className='bg-green-400 pt-[0.8rem] pb-2 px-4 rounded-lg cursor-pointer'>
                                <img src={Download} alt="" />
                            </div>
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