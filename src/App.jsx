import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import Service from "./components/Services";
import Scroll from "./components/Scroll";
import Choose from "./components/Choose";

import hero from "./assets/hero.mp4";
import backupbg from "./assets/backup-bg.png";

import "./components/homepage.css";

function App() {
  return (
    <>
      <Nav />
      <div className="hero">
        <video
          className="hero-bg"
          autoPlay
          muted
          playsInline
          loading="lazy"
          poster={backupbg}
        >
          <source src={hero} type="video/mp4" />
        </video>

        <Hero />
      </div>
      <div className="sub-hero">
        <Scroll></Scroll>
        <Service></Service>
        <Choose></Choose>
        <div className="box"></div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
