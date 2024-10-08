import { useEffect, useState } from 'react'
import nextIcon from '../assets/next.svg'
import prevIcon from '../assets/prev.svg'
import Diamond_Icon from '../assets/blue_diamond_icon.svg'
import DOWNLOAD_ICON from '../assets/downloadIcon.svg'
import { PlayGroundCarousel } from '../components/PlayGroundCarousel'
import ORANGE_TICK_ICON from '../assets/orangeTicckIcon.svg'
import spinner from '../assets/Spinner.svg'
import premiumcate from '../assets/premiunCat.svg'
import { fetchCategoryImages } from '../redux/reducer/categoryimagesSlice'
import { fetchThemeImages } from '../redux/reducer/themeimagesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

const Playground = () => {
  const SERVER_IP = 'http://64.227.144.27:8100'
  const [activeTab, setActiveTab] = useState(0)
  const [selectedThemeItemId, setSelectedThemeItemId] = useState(null)
  const [selectedCategoryItemId, setSelectedCategoryItemId] = useState(null)
  const [selectedCategoryItemName, setSelectedCategoryItemName] = useState('')
  const [selectedCategoryItemValues, setSelectedCategoryItemValues] = useState(
    []
  )
  // const screenSize = useSelector((state: RootState) => state.auth.screenSize)
  const dispatch = useDispatch<AppDispatch>()
  const images = useSelector((state: RootState) => state.categoryimages.images)
  const themeimages = useSelector(
    (state: RootState) => state.themeimages.images
  )
  const themeImagesStatus = useSelector(
    (state: RootState) => state.themeimages.status
  )
  console.log(selectedCategoryItemValues, '@@@@@@@@@')

  useEffect(() => {
    dispatch(fetchCategoryImages())
  }, [])

  const toggleThemeSelect = (id: any) => {
    setSelectedThemeItemId(id === selectedThemeItemId ? null : id)
  }
  const toggleCategorySelect = (id: any) => {
    setSelectedCategoryItemId(id === selectedCategoryItemId ? null : id)
  }
  const toggleCategoryNameSelected = (name: string) => {
    setSelectedCategoryItemName(name === selectedCategoryItemName ? '' : name)
  }
  const toggleCategoryNameValues = (values: any) => {
    setSelectedCategoryItemValues(
      values === selectedCategoryItemName ? '' : values
    )
  }

  const activeContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <div className="flex justify-center max-w-[1150px] px-[10px] md:max-h-full md:pt-[0px] mx-auto items-center h-full flex-col">
              <h1 className="text-[40px] font-bold text-center">
                Select a Category
              </h1>
              <div className="mt-5 shadow-shadow-color bg-white rounded-[8px] max-h-[calc(100%_-_107px)] overflow-y-auto shadow w-[100%]">
                <div className="p-7">
                  <div className="flex justify-end">
                    <button
                      className="bg-[#fff] border border-[#F16E22] hover:bg-[#F16E22] text-[15px] font-bold text-[#F16E22] hover:text-white px-3 rounded-full flex items-center mb-3 py-2"
                      style={{ transition: '0.3s' }}
                    >
                      <img className="me-1" src={premiumcate} />
                      Featured Category
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-[20px]">
                    {images.map((data: any, index) => {
                      return (
                        <div
                          className={`relative aspect-square`}
                          key={index}
                          onClick={() => {
                            toggleCategorySelect(data.id)
                            toggleCategoryNameSelected(data.name)
                            toggleCategoryNameValues(data.values)
                          }}
                        >
                          {data.id === selectedCategoryItemId ? (
                            <div className="flex items-center justify-center bg-white rounded-full absolute top-2 right-2 h-[27px] w-[27px]">
                              <img src={ORANGE_TICK_ICON} alt="icon" />
                            </div>
                          ) : (
                            ''
                          )}
                          <img
                            className="h-full w-full object-cover rounded-[16px]"
                            src={SERVER_IP + data.image}
                            alt={data.name}
                          />
                          <p className="absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2">
                            {data.name}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  <button
                    onClick={() => {
                      dispatch(fetchThemeImages())
                      setActiveTab(1)
                    }}
                    disabled={selectedCategoryItemId == null}
                    className="bg-[#F16E22] disabled:bg-[#ffaa79] mx-auto text-[15px] text-white px-3 rounded-md flex items-center mt-5 py-2"
                  >
                    Next <img className="ms-1" src={nextIcon} />
                  </button>
                </div>

                <div className="bg-[#00AEB833] h-[49px] rounded-bl-[8px] rounded-br-[8px] px-[15px] flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={Diamond_Icon} className="mr-3" />
                    <p className="font-semibold text-[14px]">
                      Total Credits you have:{' '}
                      <span className="font-extrabold text-[#F16E22]">500</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[14px]">
                      Total Credits you have:{' '}
                      <span className="font-extrabold text-[#F16E22]">500</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
        break
      case 1:
        return (
          <>
            <div className="flex justify-center max-w-[1150px] px-[10px] md:max-h-full md:pt-[0px] mx-auto items-center h-full flex-col relative">
              <h1 className="text-[40px] font-bold text-center">
                Select a Theme
              </h1>
              <div className="mt-5 shadow-shadow-color bg-white rounded-[8px] max-h-[calc(100%_-_107px)] overflow-y-auto shadow w-[100%]">
                <div className="p-7">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px]">
                    {themeimages.map((data: any, index) => {
                      return (
                        <div
                          className={`relative aspect-square`}
                          key={index}
                          onClick={() => toggleThemeSelect(data.id)}
                        >
                          {data.id === selectedThemeItemId ? (
                            <div className="flex items-center justify-center bg-white rounded-full absolute top-2 right-2 h-[27px] w-[27px]">
                              <img src={ORANGE_TICK_ICON} alt="icon" />
                            </div>
                          ) : (
                            ''
                          )}
                          <img
                            className="h-full w-full object-cover rounded-[16px]"
                            src={SERVER_IP + data.image}
                            alt={data.name}
                          />
                          <p className="absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2">
                            {data.name}
                          </p>
                        </div>
                      )
                    })}
                    {/* <div className="relative aspect-square">
                      <img
                        className="h-full w-full object-cover rounded-[16px]"
                        src="https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg"
                      />
                      <p className="absolute bottom-0 w-full rounded-bl-[16px] rounded-br-[16px] bg-blue-bg text-center text-white text-[12px] font-semibold py-2">
                        hello
                      </p>
                    </div> */}
                  </div>

                  <div className="flex justify-center gap-x-5">
                    <button
                      onClick={() => setActiveTab(0)}
                      // disabled={selectedThemeItemId == null}
                      className="bg-[#F16E22] disabled:bg-[#ffaa79]  text-[15px] text-white px-3 rounded-md flex items-center mt-5 py-2"
                    >
                      <img className="me-1" src={prevIcon} />
                      Back
                    </button>

                    <button
                      onClick={() => setActiveTab(2)}
                      disabled={selectedThemeItemId == null}
                      className="bg-[#F16E22] disabled:bg-[#ffaa79] text-[15px] text-white px-3 rounded-md flex items-center mt-5 py-2"
                    >
                      Next <img className="ms-1" src={nextIcon} />
                      {themeImagesStatus === 'loading' ? (
                        <img src={spinner} height={24} width={24} />
                      ) : null}
                    </button>
                  </div>
                </div>
                <div className="bg-[#00AEB833] h-[49px] rounded-bl-[8px] rounded-br-[8px] px-[15px] flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={Diamond_Icon} className="mr-3" />
                    <p className="font-semibold text-[14px]">
                      Total Credits you have:{' '}
                      <span className="font-extrabold text-[#F16E22]">500</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[14px]">
                      Total Credits you have:{' '}
                      <span className="font-extrabold text-[#F16E22]">500</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
        break
      case 2:
        return (
          <>
            <div className="flex justify-center max-w-[672px] px-[20px] mx-auto items-center h-full flex-col">
              <h1 className="text-[40px] font-bold text-center">
                Additional Accessories
              </h1>
              <div className="mt-5 shadow-shadow-color flex flex-col justify-between overflow-y-auto bg-white rounded-[8px] shadow w-[100%]">
                <div className="p-[15px]">
                  <div className="grid md:grid-cols-2 gap-[25px] p-3">
                    <div>
                      <label className="text-[15px] mb-2">Select Effect</label>
                      {/* <CustomDropdown /> */}
                      <div className="w-full">
                        <select className="w-full border rounded-[5px] h-[45px] border-[#ddd]">
                          <option>select</option>
                          <option>Kids illustration</option>
                          <option>Oldschool Comic</option>
                          <option>Toon Anime</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[15px]">
                        Select {selectedCategoryItemName}
                      </label>
                      <select className="w-full border rounded-[5px] h-[45px] border-[#ddd]">
                        {selectedCategoryItemValues.map((val, ind) => {
                          return (
                            <option key={ind} value={val}>
                              {val}
                            </option>
                          )
                        })}
                      </select>{' '}
                    </div>

                    <div>
                      <label className="text-[15px]">Remove background?</label>

                      <div className="flex items-center mt-3">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-400"></div>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[15px]">Purpose</label>
                      <input
                        className="border h-[44px  ] text-[16px] w-100 rounded-sm px-3 mt-2 py-1"
                        type="text"
                        placeholder="Type here..."
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-5">
                    <button
                      onClick={() => setActiveTab(1)}
                      className="bg-[#F16E22] w-fit text-[15px] text-white px-3 rounded-md flex items-center mx-0 mt-5 py-2"
                    >
                      <img className="me-1" src={prevIcon} />
                      Back
                    </button>
                    <button
                      onClick={() => setActiveTab(3)}
                      className="bg-[#F16E22] w-fit text-[15px] text-white px-3 rounded-md flex items-center mx-0 mt-5 py-2"
                    >
                      Generate image <img className="ms-1" src={nextIcon} />
                    </button>
                  </div>
                </div>

                <div className="bg-[#00AEB833] h-[49px] rounded-bl-[8px] rounded-br-[8px] px-[15px] flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={Diamond_Icon} className="mr-3" />
                    <p className="font-semibold text-[14px]">
                      Total Credits you have:{' '}
                      <span className="font-extrabold text-[#F16E22]">500</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[14px]">
                      Total Credits you have:{' '}
                      <span className="font-extrabold text-[#F16E22]">500</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
        break

      case 3:
        return (
          <>
            <div className="flex justify-center max-w-[1150px] px-[10px] md:max-h-full md:pt-[0px] mx-auto items-center h-full flex-col">
              <div className="max-w-[920px] px-[20px] max-h-[calc(100vh_-_149px)] overflow-y-auto">
                {/* <div className='grid grid-cols-2 gap-[20px]'> */}
                <div className="lg:flex flex-row">
                  <div className="w-full  min-w-[200px] max-w-[400px] md:max-w-[500px]">
                    <PlayGroundCarousel />
                  </div>
                  <div className="lg:max-w-[377px] w-full ms-[10px]">
                    <div className="bg-white rounded-[8px] rounded-b-none p-[25px] w-full">
                      <div className="flex items-center text-[16px] mb-3">
                        <span className="text-[#00477A] font-extrabold">
                          Selected Theme:{' '}
                        </span>
                        <span className="text-black">Digital Watercolor</span>
                      </div>
                      <div className="flex items-center text-[16px] border-2 pt-3 border-x-0 border-b-0">
                        <span className="text-[#00477A] font-extrabold">
                          Selected Theme:{' '}
                        </span>
                        <span className="text-black">Digital Watercolor</span>
                      </div>
                    </div>
                    <div className="bg-[#00AEB833] rounded-bl-[8px] rounded-br-[8px] px-[25px] p-3">
                      <div className="flex items-center">
                        <img src={Diamond_Icon} className="mr-3" />
                        <p className="font-semibold text-[14px]">
                          Total Credits you have:{' '}
                          <span className="font-extrabold text-[#F16E22]">
                            500
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center mt-3">
                        <img src={Diamond_Icon} className="mr-3" />
                        <p className="font-semibold text-[14px]">
                          Total Credits you have:{' '}
                          <span className="font-extrabold text-[#F16E22]">
                            500
                          </span>
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab(0)}
                      className="bg-[#F16E22] mx-auto text-[15px] text-white px-3 rounded-md flex items-center mt-8 py-2"
                    >
                      <img className="me-2" src={DOWNLOAD_ICON} /> Download All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      default:
        break
    }
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="bg-auth-bg bg-no-repeat h-[calc(100vh_-_147px)] bg-[length:100%_100%]  bg-center">
          {activeContent()}
          <footer className="fixed bottom-0 w-full bg-[#00477A] px-[20px]">
            <div className="max-w-[1220px] flex items-center justify-between mx-auto text-white py-4">
              <p>Copyright © 2024 All rights reserved</p>
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
  border-color: #F16E22;
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
