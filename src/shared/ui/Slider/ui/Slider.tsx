import classNames from "classnames";
import classes from "./Slider.module.scss";
import React, {FC, ReactNode, useState} from "react";
import AppButton from "shared/ui/AppButton/AppButton";
import SliderButton from "shared/assets/SliderButton.svg";

interface SliderProps {
  className?: string;
  children: ReactNode[];
}

const Slider: FC<SliderProps> = ({children}) => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const length = children.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0].clientX;
    const swipeLength = startX - x;

    if (swipeLength > 50) {
      nextSlide();
    } else if (swipeLength < -50) {
      prevSlide();
    }
  };

  return (
    <div className={classNames(classes.Slider)}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
    >
      <AppButton
        className={classes.Prev}
        onClick={prevSlide}
      >
        <img src={SliderButton} alt=""/>
      </AppButton>

      <AppButton
        className={classes.Next}
        onClick={nextSlide}
      >
        <img src={SliderButton} alt=""/>
      </AppButton>

      {children.map((child, index) => (
        <div
          className={
            index === current
              ?
              classNames(classes.Slide, classes.Active)
              :
              classes.Slide
          }
          key={index}
        >
          {index === current && child}
        </div>
      ))}
    </div>
  );
};


export {Slider};