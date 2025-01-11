import React from "react";
import { icons } from "../constants";

const Footer = () => {
  return (
    <section className="bg-[#ced3d4]">
      <div className="max-w-[1140px] p-8 mx-auto flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-2">
            {icons.map((icon, index) => (
              <a key={index} href={icon.link}>
                <i
                  className={`${icon.icon} p-2 bg-[#9d9d9d]`}
                  style={{ color: "white" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = icon.color)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#9d9d9d")
                  }
                ></i>
              </a>
            ))}
          </div>

          <p className="text-xs">
            © Copyright 2024 Samaritan’s Purse. All rights reserved.
          </p>

          <p className="text-xs">
            Samaritan’s Purse <br /> PO Box 3000 <br /> Boone, NC 28607 <br />
            828.262.1980
          </p>

          <p className="text-xs">
            Solicitation Disclosure | Privacy Center | Statement of Faith |
            Mission Statement | Employment | Franklin Graham | Worldwide Offices
            | Contact Us
          </p>

          <p className="text-xs">
            Samaritan’s Purse is a 501(c)(3) tax-exempt charity. All
            contributions designated for specific projects shall be applied to
            those projects, and we may assess up to 10 percent to be used for
            administering the gift. Occasionally, we receive more contributions
            for a given project than can be wisely applied to that project. When
            that happens, we use these funds to meet a similar pressing need.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3 items-start mt-4 md:mt-0">
          <h1 className="font-bold text-lg">STAY INFORMED ABOUT OUR WORK</h1>

          <p className="text-sm">
            Sign up to receive email updates on the work of Samaritan’s Purse,
            prayer alerts, and volunteer opportunities.
          </p>

          <button className="text-white font-bold bg-[#0064f9] text-sm px-4 py-2 rounded-lg">
            Click to sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
