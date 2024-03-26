import redStar from "../assets/images/redstar.png";
import greyStar from "../assets/images/greystar.png";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const totalStars = 5;
  let starFull = [];
  let starEmpty = [];

  for (let index = 0; index < rating; index++) {
    starFull.push(
      <img className="redStars" key={index} src={redStar} alt="Red Star" />
    );
  }

  for (let index = 0; index < totalStars - rating; index++) {
    starEmpty.push(
      <img className="greyStars" key={index} src={greyStar} alt="GreyStar" />
    );
  }

  return (
    <>
      {starFull}
      {starEmpty}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
