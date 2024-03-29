import Collapse from "../Collapse.jsx";
import values from "../../constante/apropos.js";
import Montagne from "../../assets/images/bannerApropos.png";

const Apropos = () => {
  return (
    <>
      <div className="banner">
        <img src={Montagne} alt="Photo Montagne" />
      </div>
      <div>
        {values.map((object) => {
          return (
            <Collapse
              key={object.id}
              title={object.title}
              text={object.text}
            ></Collapse>
          );
        })}
      </div>
    </>
  );
};
export default Apropos;
