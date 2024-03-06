import { useState } from "react";



const Accordion = ({title, text}) => {
    const[active, setActive] = useState(false)
     const handleToggle = () =>{
        setActive(!active)
     };
  return (
    <div className={`accordion ${active && "active"}`}>
    <div className="accordion__title">{title}<span><img src="./src/assets/images/arrow-up.png" alt="chevron" onClick={handleToggle} /></span></div>
    <div className="accordion__text">{text}</div>
    </div>
  )
}


export default Accordion;