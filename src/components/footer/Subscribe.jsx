import React from "react";
import heroBg from "../../assets/bg-shadow.png";

const Subscribe = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-50 relative mb-[-180px] z-10 re  border-1 border-white p-4 bg-[#FFFFFF]/15  rounded-2xl">
      <div
        className="  mt-6 rounded-2xl   bg-white p-1 "
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[800px] mx-auto text-center my-24">
          <h2 className="text-4xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-xl mb-4 text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-4 justify-center">
            <input type="email" placeholder="Enter you email" className="input" />
            <button className="btn bg-linear-to-bl from-violet-500 to-fuchsia-500 p-3 text-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
