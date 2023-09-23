import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import MySkills from "./scenes/MySkills";
import Contact from "./scenes/Contact";
import LineGradient from "./components/LineGradient";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const width = window.innerWidth;
      if (scrollPos === 0) setisTopOfPage(true);
      if (scrollPos !== 0) setisTopOfPage(false);

      if (width > 960 && scrollPos < 600) {
        setSelectedPage("home");
      } else if (width > 1060 && scrollPos < 1300) {
        setSelectedPage("skills");
      } else if (width > 1060 && scrollPos < 2900) {
        setSelectedPage("projects");
      } else if (width > 1060 && scrollPos < 4600) {
        setSelectedPage("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue w-full max-width-[1300px]">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
