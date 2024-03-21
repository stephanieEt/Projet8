import { useParams, useNavigate } from "react-router-dom";
import datas from "../../../data.json";
import Caroussel from "../Caroussel";
import Tags from "../Tags";
import Rating from "../Rating";
import Accordion from "../Accordion";
import { useEffect } from "react";

const Location = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = datas.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      navigate("/error");
    }
  }, [id, data, navigate]);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="location">
        <Caroussel pictures={data.pictures} />
        <div className="location_container">
          <div className="location_container_infos">
            <div className="location_container_infos_left">
              <h2>{data.title}</h2>
              <h3>{data.location}</h3>
              <div className="container-tags">
                {data.tags.map((tag, index) => (
                  <Tags key={index} text={tag} />
                ))}
              </div>
            </div>
            <div className="location_container_infos_right">
              <div className="host">
                <h3>{data.host.name}</h3>
                <img src={data.host.picture} alt={data.host.name} />
              </div>
              <div className="rating">
                <Rating rating={data.rating} />
              </div>
            </div>
          </div>
          <div className="location_container_accordion">
            <Accordion
              className="accordion__title"
              title={"Description"}
              text={data.description}
            />
            <Accordion
              className="accordion__text"
              title={"Équipements"}
              text={data.equipments}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
