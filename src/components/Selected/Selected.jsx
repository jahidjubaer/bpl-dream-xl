import React from "react";

const Selected = () => {
  return (
    <div className="max-w-[1280px] mx-auto my-5">
      <div className="h-[128px] flex justify-between items-center p-6 rounded-2xl shadow-sm">
        <div className="flex gap-5 items-center">
          <div className="h-[80px] w-[80px] ">
            <img
              className="h-full w-full rounded-xl  "
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/363300/363385.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Darrell Steward</h2>
            <p className="text-gray-500">Left-Hand-Bat</p>
          </div>
        </div>

        <button className="btn btn-square border-none bg-white shadow-none">
          <i class="fa-solid fa-trash-can fa-lg text-[#fb5050]"></i>
        </button>
      </div>
    </div>
  );
};

export default Selected;
