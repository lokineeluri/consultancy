import { useState, useRef } from "react";
import svc from "../../assets/services.mp4";
import backupbg from "../../assets/svc_bg.png";
import arrow from "../../assets/next.png";
import wtarrow from "../../assets/white-next.png";
import "./homepage.css";

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

function Service_sidebar(props) {
  let clas;
  if (props.isSelected) {
    clas = "Active";
  } else {
    clas = "";
  }
  const imageSrc = props.isSelected ? wtarrow : arrow;
  return (
    <div className={`service-bar ${clas}`}>
      <img src={imageSrc} alt="" srcset="" />
      <h1>{props.title}</h1>
    </div>
  );
}
function Servicecard(props) {
  const dialog = useRef();
  return (
    <>
      <dialog ref={dialog}>
        <div className="popup">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="boxy"></div>
          <form method="dialog">
            <button onClick={() => dialog.current.close()}>close</button>
          </form>
        </div>
      </dialog>
      <div className="servicecard" onClick={() => dialog.current.showModal()}>
        <div>
          {/* <img src="" alt="" /> */}
          <h1>{props.title}</h1>
        </div>

        <p>{props.description}</p>
        <button onClick={() => dialog.current.showModal()}>Explore more</button>
      </div>
    </>
  );
}

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
      <div className="srvc">
        <div className="Service-left">
          <h1 className="hh1">Core Services</h1>
        </div>
        <div className="names">
          <Servicecard title={card.title} description={card.description} />
          <div className="itemss">
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
      </div>
    </div>
  );
}

export default Services;
