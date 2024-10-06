import React, { useState } from "react";
import { CheckedIcon } from "../../../components/icons2";
import "../Styles/Accordion.scss";

const Accordion = ({ children, title, open = true }) => {
  const [show, setShow] = useState(open);

  return (
    <div className="accordion">
      <button type="button" onClick={() => setShow(!show)}>
        <div>
          {title === "Trip Details" && <CheckedIcon />}
          <h2 className="title">{title}</h2>
        </div>
        <span className="material-icons">
          {show ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </button>
      {show && <>{children}</>}
    </div>
  );
};

export default Accordion;
