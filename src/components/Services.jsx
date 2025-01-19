import Servicecard from "./Servicecards";
import Service_sidebar from "./Service_sidebar";
import { useState } from "react";
import svc from "../assets/services.mp4";
import backupbg from "../assets/backup-bg.png";

const data = [
  {
    title: "Company Infrastructure",
    description:
      "Get the comfort that comes with being secureLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "Data Science and Big Data",
    description:
      "Get the comfort that comes with being secureLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "Cyber Security",
    description:
      "Get the comfort that comes with being secureLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "HR",
    description:
      "Get the comfort that comes with being secureLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

function Services() {
  const [card, setcard] = useState(data[0]);

  function event(item) {
    setcard(item);
    console.log(item);
  }
  return (
    <div className="service" id="services">
      <video
        className="hero-bg svcbg"
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
        poster={backupbg}
      >
        <source src={svc} type="video/mp4" />
      </video>
      <div className="Service-left">
        <h1>Core Services</h1>

        <div className="names">
          {data.map((item, index) => (
            <div onClick={() => event(item)}>
              <Service_sidebar
                key={index}
                title={item.title}
                isSelected={card.title == item.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="service-cards">
        <div>
          <Servicecard title={card.title} description={card.description} />
        </div>
      </div>
    </div>
  );
}

export default Services;
