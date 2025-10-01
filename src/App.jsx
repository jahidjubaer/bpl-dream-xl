import "./App.css";
import Available from "./components/Available/Available";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/footer/Subscribe";
import Navbar from "./components/navbar/Navbar";

const loadPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = loadPlayers();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Available playersPromise={playersPromise}></Available>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
