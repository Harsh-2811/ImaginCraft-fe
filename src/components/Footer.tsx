import whiteAppLogo from '../assets/footerLogo.svg'
import sendNewsletterIcon from '../assets/sendIcon.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'

const Footer = () => {
  return (
    <footer className="bg-[#00477A] text-[#E8EAED]">
      <div className="max-w-[1220px] mx-auto px-[20px]">
        <div className=" text-center lg:text-left">
          <div className="py-[100px] text-center md:text-left">
            <div className="gap-3 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-12 lg:grid-cols-12">
              <div className="col-span-1 sm:col-span-4 md:col-span-4 lg:grid-cols-4">
                <img src={whiteAppLogo} className="mx-auto md:mx-0" />
                <p className="pt-5">
                  Lorem Ipsum is simply dummy text printing addon typesetting
                  into industry.
                </p>
                <p className="text-xl pt-3">+31 0 00 00 00 00</p>
                <div className="mt-4 flex items-center">
                  <div className="h-[44px] w-[44px] border rounded-full p-1 flex items-center justify-center">
                    <a className="">
                      <img className="h-[20px] w-[20px]" src={facebookIcon} />
                    </a>
                  </div>
                  <div className="h-[44px] w-[44px] border rounded-full p-1 flex items-center justify-center ms-3">
                    <a className="">
                      <img className="h-[20px] w-[20px]" src={instagramIcon} />
                    </a>
                  </div>
                  <div className="h-[44px] px-3 border rounded-full p-1 flex items-center justify-center ms-3">
                    <a className="">hey@wpupdater.nl</a>
                  </div>
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
                <h6 className="mb-4 flex justify-center font-semibold text-[18px] uppercase md:justify-start text-white">
                  Snelle links
                </h6>
                <p className="mb-3">
                  <a href="/">Home</a>
                </p>
                <p className="mb-3">
                  <a href="#!">Pakketten</a>
                </p>
                <p className="mb-3">
                  <a href="/about">About us</a>
                </p>
                <p>
                  <a href="#blog">Blog</a>
                </p>
              </div>
              <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white text-[18px]">
                  Belangrijke links
                </h6>
                <p className="mb-3">
                  <a href="#!">Voorwaarden</a>
                </p>
                <p className="mb-3">
                  <a href="#!">Privacybeleid</a>
                </p>
                <p className="mb-3">
                  <a href="#!">FAQ</a>
                </p>
                <p>
                  <a href="#!">Contact</a>
                </p>
              </div>
              <div className="col-span-1 sm:col-span-4 md:col-span-4 lg:col-span-4">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white text-[18px]">
                  Nieuwsbrief
                </h6>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    className="bg-[#00477A] w-full border-b-[1px] h-[33px] pb-[10px] focus:border-0 focus:border-b-[1px] outline-none"
                    placeholder="Email"
                  />
                  <button className="bg-[#0081A8] p-2">
                    <img src={sendNewsletterIcon} alt="icon" />
                  </button>
                </div>
                <p className="pt-3">
                  Inclusief updates en speciale promoties via e-mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#80808066]"></div>
      <div className="max-w-[1220px] mx-auto px-[20px]">
        <div className="flex text-[#E8EAED] items-center justify-between py-4">
          <p>Copyright © 2024 All rights reserved</p>
          <p>Design by ABC</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
