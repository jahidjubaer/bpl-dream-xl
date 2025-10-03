import React, { useState } from "react";

import { toast } from "react-toastify";

const Player = ({ player, coin, setCoin, setSelectedID, selectedID }) => {
  // console.log(player);
  // handle chose btn

  const playerPrice = parseInt(
    player.price.split(",").join("").split("USD").join("")
  );

  const handlePlayer = (id) => {
    // console.log(selectedID);
    const newID = [...selectedID, id];
    // console.log(selectedID.length);
    // coin remaining
    const remainingCoin = coin - playerPrice;
    if (remainingCoin < playerPrice) {
      toast.error("you don't have enough coin.");
      return;
    }
    if (selectedID.length >= 6) {
      toast.warn("You already selected 6 the player");
      return;
    }
    toast.success("Purchased");

    setSelectedID(newID);

    setCoin(remainingCoin);
    setChoose(true);
  };

  const [choose, setChoose] = useState(false);
  return (
    <div className="border-[#131313]/10 border-1 shadow-sm rounded-xl p-6">
      <div className="  h-[300px] ">
        <img
          className="h-full w-full  object-cover rounded-xl "
          src={player.img}
          alt=""
        />
      </div>

      <div className="flex items-center gap-3 mt-6">
        <i className="fa-solid fa-user"></i>
        <h2 className="font-bold text-xl">{player.name}</h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-flag fa-lg text-gray-500"></i>
          <p className="text-xl text-gray-500">{player.country}</p>
        </div>
        <div className="bg-[#131313]/5 p-2 rounded-lg">
          {player.playingRole}
        </div>
      </div>
      <hr className="my-4 text-gray-200" />

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Rating</h3>
        <p>{player.Rating}</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <h3 className="text-sm font-semibold">{player.battingStyle} </h3>
        <p className="text-sm font-semibold">{player.bowlingStyle}</p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Price $<span>{player.price}</span>
        </h3>
        <button
          disabled={choose}
          onClick={() => handlePlayer(player.id)}
          className="btn bg-white"
        >
          {choose ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
