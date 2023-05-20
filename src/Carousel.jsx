import { useState, useEffect } from "react";
import { CarouselSlideItem } from "./CarouselSlideItem";
import "./Carousel.scss";
import side from "./assets/side.png";
import sideWheel from "./assets/side_wheel.png";
import sideFront from "./assets/side_front.png";
import sideBack from "./assets/side_back.png";

export function Carousel() {
  /************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
  const slideWidth = 30;

  const _items = [
    {
      image: side,
    },
    {
      image: sideWheel,
    },
    {
      image: sideFront,
    },
    {
      image: sideBack,
    },
  ];

  const length = _items.length;
  _items.push(..._items);

  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const keys = Array.from(Array(_items.length).keys());

  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  const createItem = (position, idx) => {
    const item = {
      styles: {
        transform: `translateX(${position * slideWidth}rem)`,
      },
      image: _items[idx].image,
    };

    switch (position) {
      case length - 1:
      case length + 1:
        item.styles = { ...item.styles, filter: "" };
        break;
      case length:
        break;
      default:
        item.styles = { ...item.styles, opacity: 0 };
        break;
    }

    return item;
  };

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
                createItem={createItem}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
