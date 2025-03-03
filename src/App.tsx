import "./App.css";
import ContentSection from "./templates/components/Content-section";
import HeroSections from "./templates/components/hero-section";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import PassengerSection from "./templates/Slider/PassengerSection";
import CommercialSection from "./templates/Slider/CommercialSection";
import ContactForm from "./templates/components/ContactForm";
import Footer from "./templates/components/Footer";

function App() {
 

  return (
    <>
   <HeroSections/>
   <ContentSection/>
   <ContactForm/>
   <Footer/>


    </>
  );
}

export default App;
