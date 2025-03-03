import "./App.css";
import ContentSection from "./templates/components/Content-section";
import HeroSections from "./templates/components/hero-section";
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
