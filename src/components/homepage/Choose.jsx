import shield from "../../assets/shield.png";
import growth from "../../assets/growth.png";
import group from "../../assets/group.png";

const Elems = [
  {
    title: "career growth",
    description: "Professional development resources and career guidance",
    image: growth,
  },
  {
    title: "Verified Jobs",
    description: "All job postings are verified and screened",
    image: shield,
  },
  {
    title: "Large Nework",
    description:
      "Access to thousands of qualified candidates and top employers",
    image: group,
  },
];

function ChooseElem(prop) {
  return (
    <div>
      <img className="imgg" src={prop.image} alt="" srcset="" />
      <h1>{prop.title}</h1>
      <p>{prop.description}</p>
    </div>
  );
}

function Choose() {
  return (
    <>
      <div className="choose">
        <div className="header">
          <h1>Why Choose Us?</h1>
        </div>
        <div className="chooseelems">
          <ChooseElem
            title={Elems[0].title}
            description={Elems[0].description}
            image={Elems[0].image}
          ></ChooseElem>
          <ChooseElem
            title={Elems[1].title}
            description={Elems[1].description}
            image={Elems[1].image}
          ></ChooseElem>
          <ChooseElem
            title={Elems[2].title}
            description={Elems[2].description}
            image={Elems[2].image}
          ></ChooseElem>
        </div>
      </div>
    </>
  );
}

export default Choose;
