
import { useParams } from "react-router-dom";
import datas from "../../../data.json";
import Caroussel from "../Caroussel";

const Location = () => {
  const { id } = useParams();
  const data = datas.find((item) => item.id === id);
    
  return (
    <>
      <div className="location">
        <Caroussel pictures={data.pictures}/>
        </div>
      
    </>
  );
};

export default Location;