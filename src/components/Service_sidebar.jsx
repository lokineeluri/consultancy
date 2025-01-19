import arrow from "../assets/next.png";
import wtarrow from "../assets/white-next.png";
import "./homepage.css";

function Service_sidebar(props) {
  let clas;
  let sc;
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

export default Service_sidebar;
