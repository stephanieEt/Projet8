import LogoKasa from "../assets/images/LOGO.png";
import { NavLink } from "react-router-dom";

 const Header = () => {
  return (
    <div className= "header">
    <img src={LogoKasa} alt="Logo Kasa" />
    <nav>
      <ul>
        <NavLink to ="/" className={({isActive}) =>(isActive ? "underline": "")}>
        <li>Accueil</li>
        </NavLink>
        <NavLink to ="/Apropos" className={({isActive}) =>(isActive ? "underline": "")}>
        <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
    </div>

  )
}
export default Header;