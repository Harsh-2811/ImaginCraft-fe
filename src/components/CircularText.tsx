import { useEffect } from 'react'
import arrowIcon from '../assets/playgroundRouteIcon.svg'

const CircularText = () => {
  useEffect(() => {
    const text: any = document.querySelector('.text')
    if (text) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char: any, i: number) =>
            `<span style="transform:rotate(${i * 5.9}deg)">${char}</span>`
        )
        .join('')
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-[165px] w-[165px] rounded-full bg-[#00AEB8]">
      <div className="circle">
        <div className="logo">
          <img src={arrowIcon} />
        </div>
        <div className="text capitalize font-semibold">
          <p>Meer informatie over onze diensten</p>
        </div>
      </div>
    </div>
  )
}

export default CircularText
