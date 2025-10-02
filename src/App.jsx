// import all i needed
import { Suspense, useState } from "react";
import "./App.css";
import Available from "./components/Available/Available";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/footer/Subscribe";
import Navbar from "./components/navbar/Navbar";
import Selected from "./components/Selected/Selected";

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
  const [coin, setCoin] = useState(1000000);
  // selected
  const [selected, setSelected] = useState(0);
  // selected id ;
  const [selectedID, setSelectedID] = useState([])

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>

      {/* after banner there have a common area in available player and selected player section here it is  */}
      <div className=" max-w-[1280px] mt-20 mx-auto flex justify-between mb-5">
        <h4 className="font-bold text-2xl">
          {/* using toggling sate change the header of each section ;  */}
          {toggle ? "Available Players" : "Selected Player (4/6)"}
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
            Selected (<span>{selected}</span>)
          </button>
        </div>
      </div>
      {/* toggle as it set true and false ;  */}
      {toggle ? 
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
            selected={selected}
            setSelected={setSelected}
            selectedID ={selectedID}
            setSelectedID = {setSelectedID}
          ></Available>
        </Suspense>
       : 
        <Selected selectedID ={selectedID} playersPromise={playersPromise} ></Selected>
      }
      
      <Subscribe></Subscribe>
      
      <Footer></Footer>
    </>
  );
}

export default App;
