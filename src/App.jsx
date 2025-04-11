import Navbar from "./views/Navbar";
import HeroSection from "./views/HeroSection";
import AboutUs from "./views/AboutUs";
import OurSpeakers from "./views/OurSpeakers";
import Memories from "./views/Memories";
import Footer from "./views/Footer";
import Partners from "./views/Partners";
import { Analytics } from "@vercel/analytics/react";

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
