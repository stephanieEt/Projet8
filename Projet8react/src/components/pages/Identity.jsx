import Carrousel from "../Caroussel";
import data from "../../../data.json";
import{useParams} from "react-router-dom";

const getCardId = (id)=>{
  return data.find((data)=>data.id===id);
}


 const Identity = () => {
  const {id} = useParams();
  const data = getCardId(id);
  const pictures = data.pictures;

  return(
    <div>
    <h1>hello </h1>
    <Carrousel pictures={pictures}/>
    </div>
  )
 }
export default Identity;