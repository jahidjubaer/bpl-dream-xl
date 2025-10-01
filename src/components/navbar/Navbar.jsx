import React from "react";
import dollarImg from "../../assets/dollar1.png";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1280px] mx-auto mt-12 flex items-center">
      <div className="flex-1">
        <a>
          <img src={logoImg} alt="" srcset="" />
        </a>
      </div>
      <div className="flex gap-10  items-center">
        <ul className="flex gap-7 text-gray-600 font-semibold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
        <button className="btn font-bold border-sky-100  btn-ghost">
          <span>0 </span>
          <span>Coin</span>
          <img src={dollarImg} alt="" srcset="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
