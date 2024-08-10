import Footer from '../components/Footer'
import MovingText from '../components/MovingText'
import LogoSlider from '../components/LogoSlider'
import EMAIL_ICON from '../assets/emailIcon.svg'
import PHONE_ICON from '../assets/phoneIcon.svg'
import LOCATION_ICON from '../assets/locationIcon.svg'
import nextIcon from '../assets/next.svg'

const ContactUs = () => {
  return (
    <>
      <div className="max-w-[926px] px-[20px] text-center mx-auto">
        <div className="text-center">
          <button className="uppercase font-semibold border mt-10 px-3 py-2 text-[#0081A8] text-[13px] rounded-md border-[#0081A8]">
            Contact us
          </button>

          <div className="text-centermax-w-[588px]">
            <h1 className="text-[40px] font-semibold blackText mt-1">
              Contact us for <span className="text-[#F16E22]">Questions</span>
            </h1>
            <p className="mt-2 text-center text-[#565656] text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br></br> Lorem Ipsum has been the industry's standard dummy text
              ever since the
              <br></br>
              1500s, when an unknown printer took a galley of type and scrambled
              it to
              <br></br>make a type specimen book.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[50px]">
            <div className="group bg-[#FEF8F4] hover:bg-light-sky-bg text-center rounded-[8px] p-[20px]">
              <div className=" bg-[#F16E22] group-hover:bg-[#00AEB8] h-[70px] w-[70px] rounded-full flex justify-center items-center mx-auto">
                <img src={LOCATION_ICON} />
              </div>
              <h3 className="text-[20px] text-[#0B1629] font-semibold mt-2">
                Address
              </h3>
              <p className="text-[#454952] text-[15px]">
                Bedrijfswaardering-MKB
              </p>
              <p className="text-[#454952] text-[15px]">
                {' '}
                Teteringsedijk 55, 4817 MA Breda
              </p>
            </div>
            <div className="group bg-[#FEF8F4] hover:bg-light-sky-bg text-center rounded-[8px] p-[20px]">
              <div className="bg-[#F16E22] group-hover:bg-[#00AEB8] h-[70px] w-[70px] rounded-full flex justify-center items-center mx-auto">
                <img src={PHONE_ICON} />
              </div>
              <h3 className="text-[20px] text-[#0B1629] font-semibold mt-2">
                Phone
              </h3>
              <p className="text-[#454952] text-[15px]">(06)-29202473</p>
              <p className="text-[#454952] text-[15px]">(06)-29202473</p>
            </div>
            <div className="group bg-[#FEF8F4] hover:bg-light-sky-bg text-center rounded-[8px] p-[20px]">
              <div className="bg-[#F16E22] group-hover:bg-[#00AEB8] h-[70px] w-[70px] rounded-full flex justify-center items-center mx-auto">
                <img src={EMAIL_ICON} />
              </div>
              <h3 className="text-[20px] text-[#0B1629] font-semibold mt-2">
                Email
              </h3>
              <p className="text-[#454952] text-[15px]">
                contact@yourdomain.com
              </p>
              <p className="text-[#454952] text-[15px]">info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      <MovingText />
      <div className="max-w-[1220px] p-[20px] mx-auto">
        <div className="grid md:grid-cols-2  gap-[30px]">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
              frameBorder="0"
              className="border-0 w-full h-full rounded-[16px]"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-gray-50 p-[25px] rounded-[16px]">
            <h3 className="text-[28px] text-[#0B2529] font-extrabold">
              Contact Us
            </h3>

            <form className="">
              <input
                placeholder="Name"
                className="rounded-[8px] border outline-none border-gray-200 p-[15px] placeholder:text-[#455052] text-[18px] bg-white w-full h-[56px] text-[#455052]"
              />
              <div className="grid grid-cols-2 gap-[15px] my-4">
                <input
                  placeholder="Email"
                  className="rounded-[8px] border outline-none border-gray-200 p-[15px] placeholder:text-[#455052] text-[18px] bg-white w-full h-[56px] text-[#455052]"
                />
                <input
                  placeholder="Phone number"
                  className="rounded-[8px] border outline-none border-gray-200 p-[15px] placeholder:text-[#455052] text-[18px] bg-white w-full h-[56px] text-[#455052]"
                />
              </div>
              <input
                placeholder="Subject"
                className="rounded-[8px] border outline-none border-gray-200 p-[15px] placeholder:text-[#455052] text-[18px] bg-white w-full h-[56px] text-[#455052]"
              />
              <textarea
                placeholder="Subject"
                className="mt-3 rounded-[8px] border outline-none border-gray-200 p-[15px] placeholder:text-[#455052] text-[18px] bg-white w-full h-[120px] text-[#455052]"
              />

              <div className="flex items-center my-3">
                <input
                  id="privacy-check"
                  type="checkbox"
                  className="w-4 mr-2 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="privacy-check">
                  I agree to the terms and conditions in the privacy policy
                </label>
              </div>
              <button className="bg-[#F16E22] w-max text-[15px] text-white px-3 rounded-md flex items-center mt-5 py-2">
                Submit <img className="ms-1" src={nextIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-[30px]">
        <LogoSlider />
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
