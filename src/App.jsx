import "./App.css";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/footer/Subscribe";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
