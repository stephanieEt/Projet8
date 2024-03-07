import { useState } from "react";



const Accordion = (props) => {
    const[active, setActive] = useState(false)
     const handleToggle = () =>{
        setActive(!active)
     };
  return (
    <div className={`accordion ${active && "active"}`}>
    <div className="accordion__title">{props.title}<span><img src="./src/assets/images/arrow-up.png" alt="chevron" onClick={handleToggle} /></span></div>
    <div className="accordion__text">{props.text}</div>
    </div>
  )
}


export default Accordion;