import React, { use } from "react";
import Player from "./Player";

const Available = ({ playersPromise }) => {
  const playersData = use(playersPromise);
//   console.log(playersData);

  return (
    <div className=" max-w-[1280px] mt-20 mx-auto ">
        <div>
            <h4>Available Players</h4>
            <button></button>
        </div>
     <div className="grid grid-cols-3 gap-6 "> 
         {playersData.map((player) => (
        <Player player={player} key={player.id}></Player>
        
      ))}
     </div>
    </div>
  );
};

export default Available;
