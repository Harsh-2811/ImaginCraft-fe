import { useState } from 'react'
import BG_IMAGE from '../assets/bgImage.jpg'
import nextIcon from '../assets/next.svg'
import CustomDropdown from '../components/CustomDropdown'

const Playground = () => {


  const [activeTab, setActiveTab] = useState(0)

  const activeContent = () => {
    switch (activeTab) {
      case 0:
        return <>
          <div className='flex justify-center max-w-[1150px] px-[10px] md:max-h-full md:pt-[0px] mx-auto items-center h-full flex-col'>
            <h1 className='text-[40px] font-bold text-center'>Select a Theme</h1>
            <div className='mt-5 shadow-shadow-color bg-white rounded-[8px] max-h-[calc(100%_-_115px)] overflow-y-auto shadow p-7 w-[100%]'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px]'>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
              </div>
              <button onClick={() => setActiveTab(1)} className="bg-[#F16E22] mx-auto text-[15px] text-white px-3 rounded-md flex items-center mt-5 py-2">
                Next <img className='ms-1' src={nextIcon} />
              </button>
            </div>
          </div>
        </>
        break;
      case 1:
        return <>
          <div className='flex justify-center max-w-[1150px] px-[10px] md:max-h-full md:pt-[0px] mx-auto items-center h-full flex-col'>
            <h1 className='text-[40px] font-bold text-center'>Select a Category</h1>
            <div className='mt-5 shadow-shadow-color bg-white rounded-[8px] h-[calc(100%_-_115px)] overflow-y-auto shadow p-7 w-[100%]'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px]'>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
                <div className='relative aspect-square'>
                  <img className='h-full w-full object-cover rounded-[16px]' src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg" />
                  <p className='absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2'>hello</p>
                </div>
              </div>
              <button onClick={() => setActiveTab(2)} className="bg-[#F16E22] mx-auto text-[15px] text-white px-3 rounded-md flex items-center mt-5 mb-4 py-2">
                Next <img className='ms-1' src={nextIcon} />
              </button>
            </div>
          </div>

        </>
        break;
      case 2:
        return <>

          <div className='flex justify-center max-w-[672px] px-[20px] mx-auto items-center h-full flex-col'>
            <h1 className='text-[40px] font-bold text-center'>Additional Accessories</h1>
            <div className='mt-5 shadow-shadow-color bg-white rounded-[8px] shadow p-7 w-[100%]'>
              <div className='grid md:grid-cols-2 gap-3 p-3'>
                <div>
                  <label className='text-[15px]'>Emotion Selection</label>
                  <CustomDropdown />
                </div>
                <div>
                  <label className='text-[15px]'>Select Category</label>
                  <CustomDropdown />
                </div>
                <div>
                  <label className='text-[15px]'>Want to include text?</label>

                  <div className='flex items-center'>
                    <label className="radio-button-container mt-2 text-[15px] text-black font-semibold mr-3">Yes
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio-button-container mt-2 text-[15px] text-black font-semibold">No
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className='text-[15px]'>Want to remove background?</label>

                  <div className='flex items-center'>
                    <label className="radio-button-container mt-2 text-[15px] text-black font-semibold mr-3">Yes
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio-button-container mt-2 text-[15px] text-black font-semibold">No
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='text-[15px]'>Add text here</label>
                  <input className='border h-[44px  ] text-[16px] w-100 rounded-sm px-3 mt-2 py-1' type='text' placeholder='Type here...' />
                </div>

              </div>
              <button onClick={() => setActiveTab(1)} className="bg-[#F16E22] w-max mx-auto text-[15px] text-white px-3 rounded-md flex items-center mt-5 py-2">
                Generate image <img className='ms-1' src={nextIcon} />
              </button>
            </div>
          </div>
        </>
        break;
      default:
        break;
    }
  }

  return (

    <>

      <div className="h-full w-full">
        <div
          className="bg-auth-bg bg-no-repeat h-[calc(100vh_-_90px)] bg-[length:100%_100%]  bg-center"
        >
          {activeContent()}
          <footer className='fixed bottom-0 w-full bg-[#00477A] px-[20px]'>
            <div className='max-w-[1220px] flex items-center justify-between mx-auto text-white py-4'>
              <p >Copyright © 2024 All rights reserved</p>
              <p>Design by ABC</p>
            </div>
          </footer>
        </div>
      </div>

      <style>
        {`
        
        
/* label container */
.radio-button-container {
  color: rgba(0,0,0,0.75);
  display: block;
  position: relative;
  padding-left: 30px;
  line-height: 25px;
  // margin-bottom: 12px;
  // margin-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-button-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: rgba(0,0,0,0);
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.25);
  transition: all 0.3s;
  border-color: #F16E22;

}

/* On mouse-over, add a grey background color */
.radio-button-container:hover input ~ .checkmark {
  border-color: rgba(0,0,0,0.5);
}

/* When the radio button is checked */
.radio-button-container input:checked ~ .checkmark {
  background-color: rgba(0,0,0,0);
  border-color: #F16E22;
}


/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-button-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-button-container .checkmark:after {
 	top: 4px;
	left: 4px;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #F16E22;
}
        `}
      </style>
    </>
  )
}

export default Playground
