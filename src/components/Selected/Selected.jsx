import React, { use } from "react";
import SelectedPlayer from "./SelectedPlayer";

const Selected = ({ selectedID, playersPromise }) => {
  const players = use(playersPromise);

  // console.log(players);
//   console.log(selectedID);

  const selectedPlayer = players.filter((player) =>
    selectedID.includes(player.id)
  );
//   console.log(selectedPlayer);

  return (
    
        <div>
            {selectedPlayer.map(playerSl => <SelectedPlayer playerSl = {playerSl}></SelectedPlayer>)}
        </div>
  );
};

export default Selected;
