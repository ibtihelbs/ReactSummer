import "./App.css";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar";
import Portfolio from "./componants/Portfolio";
const App = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
