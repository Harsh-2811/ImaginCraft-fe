import React from 'react'
import logowhite from "../../assets/logowhite.svg";
import { useLocation, useNavigate } from 'react-router-dom';


const SidebarPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className='bg-blue-600 w-full h-full rounded-xl'>
        <div className='flex justify-center p-5 border-b'>
          <img src={logowhite} alt="" />

        </div>
        <div className='mt-5 px-5'>
          <ul className='text-white'>
            <li className={`flex px-4 py-[0.6rem] items-center rounded-lg cursor-pointer ${pathname.includes("dashboard") ? "bg-orange-400" : ""}`}
             onClick={() => navigate("/dashboard")}
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_775_768)">
                  <path d="M5.85547 1.67189H3.61589L0 6.4284L3.61589 11.1849H5.85547L2.23958 6.4284L5.85547 1.67189ZM10.1445 1.67189H12.3841L16 6.4284L12.3841 11.1849H10.1445L13.7604 6.4284L10.1445 1.67189ZM9.13672 0.00522185L9.91276 0.186211C10.0352 0.214857 10.1107 0.337253 10.0833 0.459649L7.15365 13.0495C7.125 13.1706 7.0026 13.2474 6.88021 13.2201L6.10547 13.0391C5.98307 13.0104 5.90755 12.888 5.9349 12.7656L8.86458 0.175795C8.89323 0.054701 9.01562 -0.0221219 9.13672 0.00522185Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_775_768">
                    <rect width="16" height="13.2253" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ms-3'>Dashboard</p>
            </li>
            <li className={`flex px-4 py-[0.6rem] items-center rounded-lg cursor-pointer ${pathname.includes("imageshistory") ? "bg-orange-400" : ""} `}
            onClick={() => navigate("/imageshistory")}
            >
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_775_726)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H16V12.7188H0V0ZM4.5 3.30729C5.07422 3.30729 5.54036 3.77344 5.54036 4.34766C5.54036 4.92318 5.07422 5.38802 4.5 5.38802C3.92578 5.38802 3.45964 4.92187 3.45964 4.34766C3.45964 3.77214 3.92578 3.30729 4.5 3.30729ZM8.88021 7.77344L10.9622 4.17448L13.1745 9.76823H2.85286V9.07422L3.72005 9.03125L4.58724 6.90625L5.02083 8.42448H6.32161L7.44922 5.51953L8.88021 7.77344ZM1.1888 1.05339H14.8125V11.6641H1.1888V1.05339Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_775_726">
                    <rect width="16" height="12.7188" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ms-3'>Image Galary</p>
            </li>

            <li className={`flex px-4 py-[0.6rem] items-center rounded-lg cursor-pointer ${pathname.includes("profile") ? "bg-orange-400" : ""}`}
            onClick={() => navigate("/profile")}
            >
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_775_707)">
                  <path d="M8 9.11304C9.21242 9.11304 10.3752 8.63298 11.2325 7.77847C12.0898 6.92396 12.5714 5.76499 12.5714 4.55652C12.5714 3.34806 12.0898 2.18909 11.2325 1.33457C10.3752 0.480061 9.21242 0 8 0C6.78758 0 5.62482 0.480061 4.76751 1.33457C3.9102 2.18909 3.42857 3.34806 3.42857 4.55652C3.42857 5.76499 3.9102 6.92396 4.76751 7.77847C5.62482 8.63298 6.78758 9.11304 8 9.11304ZM6.36786 10.8217C2.85 10.8217 0 13.6624 0 17.1688C0 17.7526 0.475 18.2261 1.06071 18.2261H14.9393C15.525 18.2261 16 17.7526 16 17.1688C16 13.6624 13.15 10.8217 9.63214 10.8217H6.36786Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_775_707">
                    <rect width="16" height="18.2261" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ms-3'>Personal Details</p>
            </li>

            {/* <li className={`flex px-4 py-[0.6rem] items-center rounded-lg cursor-pointer ${pathname.includes("apikeys") ? "bg-orange-400" : ""} `}
            onClick={() => navigate("/apikeys")}
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_775_768)">
                  <path d="M5.85547 1.67189H3.61589L0 6.4284L3.61589 11.1849H5.85547L2.23958 6.4284L5.85547 1.67189ZM10.1445 1.67189H12.3841L16 6.4284L12.3841 11.1849H10.1445L13.7604 6.4284L10.1445 1.67189ZM9.13672 0.00522185L9.91276 0.186211C10.0352 0.214857 10.1107 0.337253 10.0833 0.459649L7.15365 13.0495C7.125 13.1706 7.0026 13.2474 6.88021 13.2201L6.10547 13.0391C5.98307 13.0104 5.90755 12.888 5.9349 12.7656L8.86458 0.175795C8.89323 0.054701 9.01562 -0.0221219 9.13672 0.00522185Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_775_768">
                    <rect width="16" height="13.2253" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ms-3'>API Keys</p>
            </li> */}

            <li className={`flex px-4 py-[0.6rem] items-center rounded-lg cursor-pointer ${pathname.includes("billing-details") ? "bg-orange-400" : ""} `}
             onClick={() => navigate("/billing-details")}
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_775_720)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.38937 0H9.63517V5.66957C9.63517 5.88251 9.80792 6.05527 10.0209 6.05527H16V18.3988C16 18.7787 15.8439 19.1258 15.5923 19.3782L15.5892 19.3813C15.3368 19.6321 14.9905 19.7878 14.611 19.7878H1.38937C1.00676 19.7878 0.659324 19.6317 0.407729 19.3801C0.156135 19.1285 0 18.7811 0 18.3988V1.38899C0 1.00676 0.156135 0.659324 0.407729 0.407729C0.659324 0.156135 1.00676 0 1.38937 0ZM10.407 0.0861836C10.4424 0.109999 10.4747 0.138175 10.5032 0.170048L15.7805 5.28348H10.407V0.0861836ZM3.52889 16.2214C3.31556 16.2214 3.1428 16.0487 3.1428 15.8357C3.1428 15.6228 3.31556 15.4497 3.52889 15.4497H12.4711C12.6844 15.4497 12.8572 15.6228 12.8572 15.8357C12.8572 16.0487 12.6844 16.2214 12.4711 16.2214H3.52889ZM3.52889 13.2707C3.31556 13.2707 3.1428 13.098 3.1428 12.885C3.1428 12.6717 3.31556 12.4989 3.52889 12.4989H12.332C12.5453 12.4989 12.7181 12.6717 12.7181 12.885C12.7181 13.098 12.5453 13.2707 12.332 13.2707H3.52889ZM3.52889 10.32C3.31556 10.32 3.1428 10.1472 3.1428 9.93391C3.1428 9.72097 3.31556 9.54821 3.52889 9.54821H10.652C10.8649 9.54821 11.0381 9.72097 11.0381 9.93391C11.0381 10.1472 10.8649 10.32 10.652 10.32H3.52889ZM3.52889 7.36889C3.31556 7.36889 3.1428 7.19614 3.1428 6.98319C3.1428 6.76986 3.31556 6.5971 3.52889 6.5971H7.5057C7.71903 6.5971 7.89179 6.76986 7.89179 6.98319C7.89179 7.19614 7.71903 7.36889 7.5057 7.36889H3.52889ZM3.52889 4.41816C3.31556 4.41816 3.1428 4.24541 3.1428 4.03208C3.1428 3.81913 3.31556 3.64638 3.52889 3.64638H5.67034C5.88367 3.64638 6.05643 3.81913 6.05643 4.03208C6.05643 4.24541 5.88367 4.41816 5.67034 4.41816H3.52889Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_775_720">
                    <rect width="16" height="19.7878" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ms-3'>Billing History</p>
            </li>

          </ul>

        <div className='flex items-center mt-[572px] px-4'>
          <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.095 16.4114L0.196533 5.08764H6.69238L10.095 16.4114ZM10.4556 0.0187988L7.84253 4.31347H13.2617L10.4556 0.0187988ZM14.0444 4.28442L11.1375 0H16.5122L14.0444 4.28442ZM7.11792 4.32544L9.66431 0H4.20581L7.11792 4.32544ZM17.3821 0.509277L14.8118 4.31347H21L17.3821 0.509277ZM3.8042 0.509277L6.5061 4.31347H0L3.8042 0.509277ZM7.64429 5.05346H13.3916L10.6025 16.2422L7.64429 5.05346ZM11.093 16.4131L20.8735 5.08764H14.3777L11.093 16.4131Z" fill="white" />
          </svg>
          <p className='text-white text-sm mb-1'><span className='ms-2 font-bold text-orange-400'>15 </span> Days free trials are remaining.</p>

        </div>

        </div>
      </div>
    </>
  )
}

export default SidebarPanel;