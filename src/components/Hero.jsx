import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1140px] flex flex-col md:flex-row gap-1 justify-center items-center p-4">
      <div
        style={{
          backgroundImage:
            "url(https://spweb-uploads.s3.theark.cloud/2025/01/Bat-Cave-FIre-Chief-765x460.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="md:w-[70%] w-full md:h-[500px] h-[250px] flex items-end"
      >
        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent p-2">
          <p className="text-white uppercase">u.s. disaster relief</p>
          <h1 className="text-white font-bold lg:text-xl">
            Fire Chief Reflects on God's Work in His Community After Helene
          </h1>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center w-full md:w-[30%] gap-1">
        <div
          style={{
            backgroundImage:
              "url(https://spweb-uploads.s3.theark.cloud/2024/11/2493US-B1-119_Homescreen-1-765x460.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full md:h-[248px] h-[250px] flex items-end"
        >
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent p-2">
            <p className="text-white uppercase">u.s. disaster relief</p>
            <h1 className="text-white font-bold lg:text-xl">
              Join Us At Sharing Hope in Jesus' Name 2025
            </h1>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://spweb-uploads.s3.theark.cloud/2024/12/SudanHS-765x460.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full md:h-[248px] h-[250px] flex items-end"
        >
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent p-2">
            <p className="text-white uppercase">
              international crisis response
            </p>
            <h1 className="text-white font-bold lg:text-xl">
              Emergency Field Hospital Opens in War-Torn Sudan
            </h1>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
