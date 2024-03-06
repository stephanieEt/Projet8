import Accordion from "../Accordion";
import values from "../../constante/apropos.js";

 const Apropos = () => {
  return (
    <div className="apropos">
     <img src="./src/assets/images/bannerApropos.png" alt="Photo Montagne" />
     <div className="container-collapse">
        {values.map(({ value,index }) => (
          <Accordion key={index} index={index} title={value.title}>
            {value.text}
            </Accordion>
        ))}
      </div>
    
    </div>
  )
}
export default Apropos;