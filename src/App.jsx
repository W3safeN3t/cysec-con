import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import OurSpeakers from "./components/OurSpeakers";
import Memories from "./components/Memories";
import Footer from "./components/Footer";
import Partners from "./components/Partners";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <section id="about-us">
        <AboutUs />
      </section>

      <Partners />

      <section id="our-speakers">
        <OurSpeakers />
      </section>

      <Memories />
      <Footer />
    </>
  )
}

export default App;
