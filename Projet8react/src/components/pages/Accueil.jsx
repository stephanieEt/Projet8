import Card from "../Card";
import data from "../../../data.json";
import banner from "../../assets/images/banner.png";

const Accueil = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Image de mer et falaises" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards">
        <Card data={data} />
      </div>
    </div>
  );
};
export default Accueil;
