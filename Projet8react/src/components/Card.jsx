import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({data}) => {
  return (
    data.map((data)=>
    <Link to={`/data/${data.id}`}   className="card" key={data.id}>
        <img src={data.cover} alt={data.title} />
        <h3>{data.title}</h3>
    </Link>
  ));
};

Card.protTypes ={
    data:PropTypes.array.isRequired
}
export default Card;