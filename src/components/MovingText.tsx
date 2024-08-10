import { useEffect, useState } from 'react'

function MovingText() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollTop = window.pageYOffset
      const scrollHeight = document.body.offsetHeight
      const windowHeight = window.innerHeight
      const normalizedScrollPosition = scrollTop / (scrollHeight - windowHeight)
      setScrollPosition(normalizedScrollPosition * 10)
    }

    window.addEventListener('scroll', updateScrollPosition)

    return () => window.removeEventListener('scroll', updateScrollPosition)
  }, [])

  return (
    <>
      <div className="w-full overflow-hidden flex justify-center">
        <p
          className="text-[85px] h-[160px] moveText text-nowrap font-bold text-center flex align-middle items-center"
          style={{ transform: `translate(${scrollPosition * 100}px)` }}
        >
          <span>AI IMAGE GENERATE</span>{' '}
          <span className="text-[200px] ">*</span>
          <span>AI IMAGE GENERATE</span> <span className="text-[200px]">*</span>
          <span>AI IMAGE GENERATE</span> <span className="text-[200px]">*</span>
          <span>AI IMAGE GENERATE</span> <span className="text-[200px]">*</span>
        </p>
      </div>

      <style>
        {`
          .moveText {
            -webkit-text-stroke: 1px #00aeb8;
            -webkit-text-fill-color: transparent;
          }
          .moveText span:nth-child(even) {
            -webkit-text-stroke: 1px #00aeb8;
            -webkit-text-fill-color: transparent;
            padding-top: 50px;
          }
        `}
      </style>
    </>
  )
}

export default MovingText
