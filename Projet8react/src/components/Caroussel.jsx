import PropTypes from "prop-types";
import arrowRight from "../assets/images/arrowRight.png"
import arrowLeft from "../assets/images/arrowLeft.png"
import { useState } from 'react';



const Caroussel = ({pictures}) => {
// pictures est un tableau qui contient le lien pour chaque image du caroussel
const [currentIndex, setCurrentIndex] = useState(0);

const slideLeft = () => {
  //si l'index est égal à 0, on passe à la dernière slide
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
};

const slideRight = () => {
  //si l'index est égal à la dernière slide, on passe à la première
  setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
};

const currentSlide = pictures[currentIndex];
const numSlides = pictures.length;

// Vérifier si plus d'une slide est présente avant d'afficher les flèches
const shouldShowArrows = numSlides > 1;
const shouldShowIndicator = numSlides > 1;
  return (
    <div className="caroussel">
       <img className="slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
       {shouldShowArrows && (
        <>
        <img className="arrowRight" src={arrowRight} alt="Flèche Droite" onClick={slideRight}/>
        <img className="arrowLeft" src={arrowLeft} alt="Flèche Gauche" onClick={slideLeft} />
        </>
       )}
       {shouldShowIndicator && (
         <div className="slide-indicator">{`${currentIndex + 1}/${pictures.length}`}</div>
        )}
    </div>
  );
};
Caroussel.propTypes = {
  pictures : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
