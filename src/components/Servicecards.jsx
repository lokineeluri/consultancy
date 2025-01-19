import { useRef } from "react";

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

export default Servicecard;
