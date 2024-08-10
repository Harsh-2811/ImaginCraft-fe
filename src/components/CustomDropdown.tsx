import { useState } from 'react'
import UP_ICON from '../assets/fa-up.svg'
import DOWN_ICON from '../assets/fa-down.svg'

const CustomDropdown = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setIsSelected] = useState('Choose one')
  return (
    <div>
      <div className="dropdown w-full">
        <div
          onClick={() => {
            setIsActive(!isActive)
          }}
          className="dropdown-btn"
        >
          {selected}

          <div>
            <img src={isActive ? UP_ICON : DOWN_ICON} height={10} width={10} />
          </div>
          {/* <span
                        className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                    /> */}
        </div>
        <div
          className="dropdown-content p-4"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          <h4 className="font-bold text-[#2f2f2f]">Mobile</h4>
          <div
            onClick={(e) => {
              setIsSelected((e.target as HTMLDivElement).textContent as string)
              setIsActive(!isActive)
            }}
            className="item"
          >
            One
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected((e.target as HTMLDivElement).textContent as string)
              setIsActive(!isActive)
            }}
          >
            Two
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected((e.target as HTMLDivElement).textContent as string)
              setIsActive(!isActive)
            }}
          >
            Three
          </div>
        </div>
      </div>

      <style>
        {`
                
                
.dropdown {
    margin: 0 auto;
    z-index: 1;
    width: 100%;
    position: relative;
  }
  .dropdown,
  .dropdown * {
    z-index: 10;
  }
  .dropdown .dropdown-btn {
    cursor: pointer;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #777;
    font-weight: 500;
  }
  .dropdown-content {
    position: absolute;
    /* top: 110%; */
    left: 0;
    z-index: 10;
    width: 100%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.07);
    background:white
  }
  .dropdown-content .item {
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }
  .dropdown-content .item:hover {
    background: #fcfcfc;
  }
  
  button {
    z-index: 1;
    display: block;
    width: 300px;
    margin: 0 auto;
  }
  
                `}
      </style>
    </div>
  )
}

export default CustomDropdown
