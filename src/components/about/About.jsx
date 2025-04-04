import "./about.css";
import abt from "../../assets/about.mp4";
import backupbg from "../../assets/about_backup.png";

function Hero() {
  return (
    <div className="about_hero">
      <h1>Connecting Talent With The Opportunity</h1>
      <h2>
        JobConnect has been bridging the gap between exceptional talent and
        leading companies, creating meaningful career connections that drive
        success.
      </h2>
    </div>
  );
}
function Subhero() {
  return (
    <div className="abt_subhero">
      <h1>Our Story</h1>
      <p>
        JobConnect was founded with a simple yet powerful vision: to
        revolutionize how companies and talent connect. What started as a small
        team of passionate recruiters has grown into a leading platform that
        helps thousands of professionals find their dream careers and enables
        businesses to build strong teams. Today, we're proud to be trusted by
        over 10,000 companies and have helped more than 100,000 professionals
        advance their careers. Our success is measured by the success stories we
        create every day.
      </p>
    </div>
  );
}
function About() {
  return (
    <>
      <div className="about_container">
        <video
          className="hero-bg"
          autoPlay
          muted
          playsInline
          loading="lazy"
          poster={backupbg}
        >
          <source src={abt} type="video/mp4" />
        </video>
        <Hero></Hero>
        <Subhero></Subhero>
      </div>
    </>
  );
}

export default About;
