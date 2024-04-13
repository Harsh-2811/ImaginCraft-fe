import BG_IMAGE from "../assets/bgImage.jpg"

const Playground = () => {
  return (
    <div className='h-full w-full' >
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BG_IMAGE})` }}>

        </div>
    </div>
  )
}

export default Playground;