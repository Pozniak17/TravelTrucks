import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarsSliderProps = {
  images: string[];
  onImageClick: (index: number) => void;
};

export default function CarsSlider({ images, onImageClick }: CarsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    afterChange: (index: number) => setCurrentIndex(index),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {images.map((url, index) => {
        return (
          <div key={index}>
            <img
              src={url}
              style={{ cursor: "pointer", borderRadius: 10 }}
              onClick={() => {
                document.activeElement instanceof HTMLElement &&
                  document.activeElement.blur();
                onImageClick(currentIndex);
              }}
            />
          </div>
        );
      })}
    </Slider>
  );
}
