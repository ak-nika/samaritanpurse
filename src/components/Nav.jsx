import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      <div className="bg-[#373737]">
        <div className="max-w-[1140px] m-auto flex items-center justify-between p-2">
          <img
            src="https://sp-comm-arkfiles.s3.theark.cloud/website/global/sp-white-logo.png"
            alt="Logo"
            width={200}
          />

          <ul className="lg:flex items-center justify-center gap-5 hidden">
            <li>
              <a href="#" className="text-white uppercase">
                Who we are
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                What we do
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                Video
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                podcast
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                get involved
              </a>
            </li>
            <li>
              <a href="#" className="text-white uppercase">
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white uppercase bg-[#c07b02] border-2 border-[#aa6e06] p-2"
              >
                Give
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </li>
          </ul>

          <div className="relative flex justify-center items-center gap-3 lg:hidden">
            <a href="#" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>

            <ul
              className={`absolute right-0 top-8 bg-[#373737] overflow-hidden flex flex-col gap-3 ${
                isDropdownOpen ? "h-auto p-4" : "h-0"
              }`}
            >
              <li>
                <a href="#" className="text-white uppercase">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase">
                  What we do
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase">
                  Video
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase">
                  podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase">
                  get involved
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase">
                  Store
                </a>
              </li>
            </ul>

            <ul className="flex justify-center items-center gap-3">
              <li>
                <a
                  href="#"
                  className="text-white uppercase bg-[#c07b02] border-2 border-[#aa6e06] p-2"
                >
                  Give
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#8c8c35]">
        <div className="max-w-[1140px] m-auto flex items-center justify-between px-2">
          <h1 className="text-white uppercase py-2">helping in jesus' name</h1>

          <div className="flex items-center gap-5">
            <h1 className="text-white uppercase">january 10, 2025</h1>

            <button
              className="bg-white uppercase h-full p-2 flex items-center gap-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              Ministry highlights
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`max-w-[1140px] mx-auto mt-5 rounded-xl shadow-xl flex flex-col md:flex-row justify-center items-center relative overflow-hidden transition-all ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="w-full md:w-[62%]">
          <img
            src="https://sp-comm-arkfiles.s3.theark.cloud/website/landing-pages/helene-rebuild-program/img/2093US-D-839__S.jpg"
            alt="image"
          />
        </div>

        <div className="p-4 flex flex-col gap-4">
          <h1 className="text-center font-bold text-4xl">
            Need Help After Helene?
          </h1>

          <p className="text-center capitalize text-[#555556] text-xl">
            rebuild assistance available
          </p>

          <p className="font-bold text-center">
            Call{" "}
            <a
              className="text-[#3a83ff] my-10 underline"
              href="tel:000-000-000"
            >
              000-000-000
            </a>
          </p>

          <button className="w-full bg-[#0064f9] p-2 text-white shadow rounded">
            Learn More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
