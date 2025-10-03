import React, { use } from "react";
import SelectedPlayer from "./SelectedPlayer";

const Selected = ({
  selectedID,
  playersPromise,
  handleDelete,
  selectedPlayerData,
}) => {
  const players = use(playersPromise);

  // console.log(players);
  //   console.log(selectedID);

  const selectedPlayer = players.filter((player) =>
    selectedID.includes(player.id)
  );

  selectedPlayerData(selectedPlayer);

  return (
    <div>
      {selectedPlayer.map((playerSl) => (
        <SelectedPlayer
          handleDelete={handleDelete}
          key={playerSl.id}
          playerSl={playerSl}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default Selected;
