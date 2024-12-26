import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aos from "aos"
import "aos/dist/aos.css"
import About from "./Components/About";
import Services from "./Components/Services";
import CarList from "./Components/CarList";
import Testimonial from "./Components/Testimonial";
import AppStore from "./Components/AppStore";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {

  // Dark mode code

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[theme])

  // Aos Initialization
  React.useEffect(() => {
    Aos.init(
      { offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100
      }
    );
    Aos.refresh()
  })

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStore />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
