import { useEffect } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Community from "./components/Community";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Parallex from "./components/Parallex";
import PricingPlans from "./components/PricingPlans";
import Program from "./components/Program";
import Services from "./components/Services";
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <NavBar/>
    <Banner/>
    <Parallex/>
    <About/>
    <Program/>
    <Services/>
    <PricingPlans/>
    <Community/>
    <Footer/>
    </>
    
  );
}

export default App;
