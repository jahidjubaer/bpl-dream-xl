import React from "react";
import { toast } from "react-toastify";

const SelectedPlayer = ({ playerSl,handleDelete }) => {
  return (
    <div className="max-w-[1280px] mx-auto my-5">
      <div className="h-[128px] flex justify-between items-center p-6 rounded-2xl shadow-sm">
        <div className="flex gap-5 items-center">
          <div className="h-[80px] w-[80px] ">
            <img
              className="h-full w-full object-cover rounded-xl  "
              src={playerSl.img}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">{playerSl.name}</h2>
            <p className="text-gray-500">{playerSl.playingRole}</p>
          </div>
        </div>

        <button onClick={() => {
          handleDelete(playerSl)
          toast.info("Player Deleted");
        } } className="btn btn-square border-none bg-white shadow-none">
          <i className="fa-solid fa-trash-can fa-lg text-[#fb5050]"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
