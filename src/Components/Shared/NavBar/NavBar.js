import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap  items-center justify-between px-2 py-3 bg-transparent mb-3 z-10 ">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              MeetUp
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.61 0H25.041C25.7332 0 26.3971 0.274981 26.8865 0.764451C27.376 1.25392 27.651 1.91778 27.651 2.61C27.651 3.30221 27.376 3.96608 26.8865 4.45555C26.3971 4.94502 25.7332 5.22 25.041 5.22H2.61C1.91778 5.22 1.25392 4.94502 0.764451 4.45555C0.274981 3.96608 7.77841e-08 3.30221 7.77841e-08 2.61C7.77841e-08 1.91778 0.274981 1.25392 0.764451 0.764451C1.25392 0.274981 1.91778 0 2.61 0V0ZM2.61 9.39H25.041C25.3838 9.39 25.7231 9.45751 26.0398 9.58867C26.3565 9.71984 26.6442 9.91209 26.8865 10.1545C27.1289 10.3968 27.3212 10.6845 27.4523 11.0012C27.5835 11.3179 27.651 11.6572 27.651 12C27.651 12.3428 27.5835 12.6821 27.4523 12.9988C27.3212 13.3155 27.1289 13.6032 26.8865 13.8455C26.6442 14.0879 26.3565 14.2802 26.0398 14.4113C25.7231 14.5425 25.3838 14.61 25.041 14.61H2.61C2.26725 14.61 1.92786 14.5425 1.6112 14.4113C1.29454 14.2802 1.00681 14.0879 0.764451 13.8455C0.52209 13.6032 0.329839 13.3155 0.198674 12.9988C0.0675097 12.6821 2.27824e-08 12.3428 2.27824e-08 12C2.27824e-08 11.6572 0.0675097 11.3179 0.198674 11.0012C0.329839 10.6845 0.52209 10.3968 0.764451 10.1545C1.00681 9.91209 1.29454 9.71984 1.6112 9.58867C1.92786 9.45751 2.26725 9.39 2.61 9.39V9.39ZM2.61 18.781H25.041C25.3838 18.781 25.7231 18.8485 26.0398 18.9797C26.3565 19.1108 26.6442 19.3031 26.8865 19.5455C27.1289 19.7878 27.3212 20.0755 27.4523 20.3922C27.5835 20.7089 27.651 21.0483 27.651 21.391C27.651 21.7338 27.5835 22.0731 27.4523 22.3898C27.3212 22.7065 27.1289 22.9942 26.8865 23.2365C26.6442 23.4789 26.3565 23.6712 26.0398 23.8023C25.7231 23.9335 25.3838 24.001 25.041 24.001H2.61C2.26725 24.001 1.92786 23.9335 1.6112 23.8023C1.29454 23.6712 1.00681 23.4789 0.764451 23.2365C0.52209 22.9942 0.329839 22.7065 0.198674 22.3898C0.0675096 22.0731 0 21.7338 0 21.391C0 21.0483 0.0675096 20.7089 0.198674 20.3922C0.329839 20.0755 0.52209 19.7878 0.764451 19.5455C1.00681 19.3031 1.29454 19.1108 1.6112 18.9797C1.92786 18.8485 2.26725 18.781 2.61 18.781V18.781Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                 
                  <span className="ml-2 active nav-text">Home</span>
                </button>
              </li>
              <li className="nav-item">
                <Link to="/join-meeting"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  
                  <span className="ml-2">Join Meeting</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  
                  <span className="ml-2">Features</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  
                  <button className="rounded-full joinBtn">Join</button>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
