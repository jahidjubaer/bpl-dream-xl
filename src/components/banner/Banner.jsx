import React from "react";
import heroBg from "../../assets/bg-shadow.png";
import heroImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="hero max-w-[1280px] mx-auto bg-[#131313] rounded-3xl mt-6 text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content mx-[175px] text-center ">
        <div className="my-6">
          <img className=" mx-auto mb-4" src={heroImg} alt="" />

          <h1 className="text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="py-6 text-xl">Beyond Boundaries Beyond Limits</p>
          
            <button className="btn  bg-black  border-[#E7FE29] border-1">
              <div className="bg-[#E7FE29] rounded-sm px-4 py-1 ">Claim Free Credit</div>
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
