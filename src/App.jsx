// import all i needed
import { Suspense, useState } from "react";
import "./App.css";
import Available from "./components/Available/Available";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/footer/Subscribe";
import Navbar from "./components/navbar/Navbar";
import Selected from "./components/Selected/Selected";
import { ToastContainer } from "react-toastify";

// load data and return a promise ;
const loadPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

// i must call the loadPlayer function ;
const playersPromise = loadPlayers();

function App() {
  // toggling using state ;
  const [toggle, setToggle] = useState(true);
  // coin
  const [coin, setCoin] = useState(10000000);

  // selected id ;
  let selectedData;
  const [selectedID, setSelectedID] = useState([]);
  const selectedPlayerData = (props) => {
    selectedData = props;
  };
  // delete btn
  const handleDelete = (props) => {
    const deletePlayerID = [];
    const afterDelete = selectedData.filter((ply) => props.id != ply.id);
    afterDelete.map((delPla) => deletePlayerID.push(delPla.id));
    const availableCoin = coin;
    const afterDeletePlayerPrice = parseInt(
      props.price.split(",").join("").split("USD").join("")
    );
    setCoin(afterDeletePlayerPrice + availableCoin);

    setSelectedID(deletePlayerID);
  };

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>

      {/* after banner there have a common area in available player and selected player section here it is  */}
      <div className=" max-w-[1280px] mt-20 mx-auto flex justify-between mb-5">
        <h4 className="font-bold text-2xl">
          {/* using toggling sate change the header of each section ;  */}
          {toggle
            ? "Available Players"
            : `Selected Player (${selectedID.length}/6)`}
        </h4>
        <div>
          {/* toggling the button onclick -> set true and false and change the bg and font by dynamic class name 
          here is one this in onclick don't setToggle without function bz it will excuted without click ;  */}
          <button
            onClick={() => setToggle(true)}
            className={`btn border-r-0 rounded-r-none ${
              toggle ? "bg-[#E7FE29] font-bold" : ""
            } `}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn border-l-0 rounded-l-none ${
              !toggle ? "bg-[#E7FE29] font-bold" : ""
            } `}
          >
            Selected (<span>{selectedID.length}</span>)
          </button>
        </div>
      </div>
      {/* toggle as it set true and false ;  */}
      {toggle ? (
        <Suspense
          fallback={
            <div className="max-w-[1280px] mx-auto flex justify-center">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <Available
            playersPromise={playersPromise}
            coin={coin}
            setCoin={setCoin}
            selectedID={selectedID}
            setSelectedID={setSelectedID}
          ></Available>
        </Suspense>
      ) : (
        <Selected
          selectedID={selectedID}
          playersPromise={playersPromise}
          handleDelete={handleDelete}
          selectedPlayerData={selectedPlayerData}
        ></Selected>
      )}

      <Subscribe></Subscribe>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
