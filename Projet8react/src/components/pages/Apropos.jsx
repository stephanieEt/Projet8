import Accordion from "../Accordion";
import values from "../../constante/apropos.js";

 const Apropos = () => {
  return (
    <div className="apropos">
     <img src="./src/assets/images/bannerApropos.png" alt="Photo Montagne" />
     <div className="container-collapse">

      {values.map((object) =>{
         return <Accordion key={object.id} title={object.title} text={object.text}>
         </Accordion>
      } )}
      </div>
    
    </div>
  )
}
export default Apropos;