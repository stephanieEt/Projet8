
import{useParams} from "react-router-dom";
import data from "../../data.json";

const getCardId =(id)=>{
    return data.find((data)=>data.id===id);
}
 const Identity = () => {
    const{id} = useParams();
    const data = getCardId(id);
    const pictures = data.pictures;
  return (
    <div>
        <p>{id}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <div className="pictures">
        {pictures.map((picture)=>{
          return(
            <img src={picture} alt={picture.title} key={picture} />        
             )
        })}

        </div>

    </div>
  )
}
export default Identity;