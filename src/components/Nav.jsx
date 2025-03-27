import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lilChange, setLilChange] = useState(false);
  const nav = useNavigate();

  function goToGive() {
    setIsOpen(false);
    nav("/give");
  }

  return (
    <nav>
      <div className="bg-[#373737] relative">
        <div className="max-w-[1140px] m-auto flex items-center justify-between p-2">
          <Link to={"/"}>
            <img
              src="https://sp-comm-arkfiles.s3.theark.cloud/website/global/sp-white-logo.png"
              alt="Logo"
              width={200}
            />
          </Link>

          <ul className="lg:flex items-center justify-center gap-5 hidden">
            <li>
              <Link to={"/about"} className="text-white uppercase">
                About Samaritan&apos;s Purse
              </Link>
              {/* <Link to="/" className="text-white uppercase">
               
              </a> */}
            </li>
            <li>
              <Link to="/history" className="text-white uppercase">
                History
              </Link>
            </li>
            <li>
              <Link to="/faith" className="text-white uppercase">
                Statement of Faith
              </Link>
            </li>
            <li>
              <Link to="/festivals" className="text-white uppercase">
                Festivals
              </Link>
            </li>
            <li>
              <Link to="/biography" className="text-white uppercase">
                Biography
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white uppercase">
                Store
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-white uppercase bg-[#c07b02] border-2 border-[#aa6e06] p-2"
                onClick={() => setLilChange(!lilChange)}
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
              className={`absolute z-50 right-0 top-8 bg-[#373737] overflow-hidden flex flex-col gap-3 ${isDropdownOpen ? "h-auto p-4" : "h-0"
                }`}
            >
              <li>
                <Link to={"/about"} className="text-white uppercase">
                  About Samaritan&apos;s Purse
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-white uppercase">
                  History
                </Link>
              </li>
              <li>
                <Link to="/faith" className="text-white uppercase">
                  Statement of Faith
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-white uppercase">
                  Festivals
                </Link>
              </li>
              <li>
                <Link to="/biography" className="text-white uppercase">
                  Biography
                </Link>
              </li>
            </ul>

            <ul className="flex justify-center items-center gap-3">
              <li>
                <a
                  href="#"
                  className="text-white uppercase bg-[#c07b02] border-2 border-[#aa6e06] p-2"
                  onClick={() => setLilChange(!lilChange)}
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

        <div
          className={`${lilChange ? "block" : "hidden"
            } w-full bg-[#222222] max-w-[1140px] flex flex-col md:flex-row justify-between absolute z-20 left-[50%] -translate-x-[50%] text-white p-8`}
        >
          <div className="w-full md:w-1/2">
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="text-[10px]">Give Now</p>
                <h3 className="text-[25px]">Where Most Needed</h3>
                <p className="text-[10px]">Where Most Needed - 012000</p>
              </div>

              <div className="h-10">
                <input
                  type="text"
                  placeholder="$0.00"
                  className="outline-none border-none text-black p-4 w-[200px] h-full"
                />
                <Link to={"/give"}>
                  <button className="bg-[#c07b02] h-full w-[50px]">Give</button>
                </Link>
              </div>
            </div>

            <a className="block mt-20" href="#">
              VIEW ALL ITEM GIFTS
            </a>
            <p className="text-[10px] mt-10">
              † You can also make a gift by mail. <br /> Send to: Samaritan’s
              Purse, PO Box 3000, Boone, NC <br /> 28607
            </p>
          </div>

          <div className="w-full md:w-[40%] flex max-sm:flex-col justify-around mt-4 md:mt-0">
            <ul className="max-sm:mt-2 md:mt-0">
              <li>
                <a className="hover:text-[#999] text-sm" href="#">
                  Gift Catalog
                </a>
              </li>
              <li>
                <a className="hover:text-[#999] text-sm" href="#">
                  Recurring Donations
                </a>
              </li>
              <li>
                <a className="hover:text-[#999] text-sm" href="#">
                  Support a Physician
                </a>
              </li>
              <li>
                <a className="hover:text-[#999] text-sm" href="#">
                  Books
                </a>
              </li>
              <li>
                <a className="hover:text-[#999] text-sm" href="#">
                  Solicitation Disclosure
                </a>
              </li>
            </ul>

            <div>
              <div>
                <p className="text-sm font-bold border-b-2 border-dotted">
                  Planned Giving
                </p>

                <ul className="ml-6">
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Planned Giving
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      IRAs
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Wills
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Charitable Gift Annuities
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Asset-Based Giving
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-bold border-b-2 border-dotted">
                  Creative Giving
                </p>

                <ul className="ml-6">
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Workplace Giving
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Stocks
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Non-Cash Giving
                    </a>
                  </li>
                  <li>
                    <a className="text-sm hover:text-[#999]" href="#">
                      Memorial Giving
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#8c8c35]">
        <div className="max-w-[1140px] m-auto flex items-center justify-between px-2">
          <h1 className="text-white uppercase py-2">
            helping in jesus&apos; name
          </h1>

          <div className="flex items-center gap-5">
            <h1 className="text-white uppercase">March 27, 2025</h1>

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
        className={`max-w-[1140px] mx-auto mt-5 rounded-xl shadow-xl flex flex-col md:flex-row justify-center items-center relative overflow-hidden transition-all ${isOpen ? "h-auto" : "h-0"
          }`}
      >
        <div className="w-full md:w-[62%]">
          <img
            src="https://s3.theark.cloud/sp-comm-arkfiles/website/images/2025/water-day/img/2521VN-E1-394__S.jpg"
            alt="image"
          />
        </div>

        <div className="p-4 flex flex-col gap-4">
          <h1 className="text-center font-bold text-4xl">
            Clean Water. Changed Lives.
          </h1>

          <div>
            <div className="flex justify-end">
              <small style={{ letterSpacing: 1.6, fontSize: 10 }}>
                Clean Water Projects 013659
              </small>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <button className="w-11/12 bg-[#0064f9] p-2 text-white shadow rounded">
                  Learn More
                </button>
              </div>
              <div
                className="flex rounded-md w-2/3 align-center"
                style={{ borderWidth: 2, borderColor: "#00cc00" }}
              >
                <div className="w-1/2 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    className="w-full h-full p-2 pl-7 border rounded"
                    placeholder="0.00"
                  />
                </div>

                <div className="w-1/2">
                  <div onClick={goToGive} className="w-full h-full bg-green-500 flex justify-center items-center text-white text-xl">
                    Give
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
