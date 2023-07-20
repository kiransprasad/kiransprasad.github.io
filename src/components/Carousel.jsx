import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Carousel.css";

export const CarouselItem = ({ children, ShiftLeft, ShiftRight }) => {

    return (
        <div className="carousel-item">
            <button className="leftArrow" onClick={ShiftLeft}> &lt; </button>
            <div>
                {children}
            </div>
            <button className="rightArrow" onClick={ShiftRight}> &gt; </button>
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const ShiftLeft = () => {updateIndex(activeIndex - 1);}
    const ShiftRight = () => {updateIndex(activeIndex + 1);}

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div {...handlers} className="carousel">

        <div className="inner" style={{ transform: `translateX(-${activeIndex * (100 + 1/3) + 0.125}%)` }} >

            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { ShiftLeft, ShiftRight } );
            })}

        </div>

        <div className="indicators">
            {React.Children.map(children, (child, index) => {
            return (
                <button
                className={`${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                    updateIndex(index);
                }}
                >
                </button>
            );
            })}
        </div>
        </div>
    );
};

export default Carousel;
