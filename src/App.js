import "./App.css";
import Complete from "./component/Complete";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LatestUpdate from "./component/LatestUpdate";
import Navigation from "./component/Navigation";
import Tool from "./component/Tool";
function App() {
  return (
    <div className=" lg:px-[17.5%]">
      <Header />
      <Navigation />
      <LatestUpdate />
      <Tool />
      <Complete />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
