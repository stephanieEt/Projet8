import PropTypes from "prop-types";

const Card = ({data}) => {
  return (
    data.map((data)=>
    <div className="card" key={data.id}>
        <img src={data.cover} alt={data.title} />
        <h3>{data.title}</h3>
    </div>
  ));
};

Card.protTypes ={
    data:PropTypes.array.isRequired
}
export default Card;