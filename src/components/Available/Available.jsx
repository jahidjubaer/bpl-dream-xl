import React, { use } from "react";
import Player from "./Player";

const Available = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  //   console.log(playersData);

  return (
    <div className=" max-w-[1280px]  mx-auto ">
      <div className="grid grid-cols-3 gap-6 ">
        {playersData.map((player) => (
          <Player player={player} key={player.id}></Player>
        ))}
      </div>
    </div>
  );
};

export default Available;
