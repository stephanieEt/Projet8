import Card from "../Card";
import data from "../../../data.json";

 const Accueil = () => {
  return (

    <div className="banner">
      <img src="./src/assets/images/banner.png" alt="Image de mer et falaises" />
      <h1>Chez vous, partout et ailleurs</h1>
  
    <div className="cards">
      <Card data={data} />
    </div>
    </div>
  )
}
export default Accueil;