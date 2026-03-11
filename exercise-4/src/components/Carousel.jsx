import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [slide, setslide] = React.useState(0);
  /* You will need to hanle the click on left and right button */
  /* You will need to manage the cases when we are on the last image or first image*/
  const handleLeftClick = () => {
    setslide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  }
  const handleRightClick = () => {
    setslide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  }
  

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[slide].src} alt={images[slide].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick} />
    </div>
  );
};
