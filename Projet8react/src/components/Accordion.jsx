import { useState } from "react";
import chevronCollapse from "../assets/images/arrow-up.png";
import PropTypes from "prop-types";

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="container-collapse">
      <div className={`accordion ${active && "active"}`}>
        <div className="accordion__title">
          {props.title}
          <span>
            <img src={chevronCollapse} alt="chevron" onClick={handleToggle} />
          </span>
        </div>
        {Array.isArray(props.text) ? (
          props.text.map((item, index) => (
            <div className="accordion__text" key={index}>
              {item}
            </div>
          ))
        ) : (
          <div className="accordion__text">{props.text}</div>
        )}
      </div>
    </div>
  );
};
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

export default Accordion;
