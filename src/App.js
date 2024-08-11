

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HOME from "./components/HOME";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import SocialLinksMobile from "./components/SocialLinksMobile";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HOME/>
      <SocialLinks/>
      <Experience/>
      <Projects/>
      <Contact/>
      <SocialLinksMobile/>
      <Footer/>
    </div>
  );
}

export default App;
