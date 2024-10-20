import React, { useRef, Suspense, lazy } from 'react';
import Skeleton from '../../skeletons/Skeletons';

const Card = lazy(() => import("../../atoms/card/card"));

function Slider( {module} ) {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
        sliderRef.current.scrollBy({
            left: -500,
            behavior: 'smooth'
        });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
        sliderRef.current.scrollBy({
            left: 500,
            behavior: 'smooth'
        });
        }
    };

    return (
        <section className="slider">
            <div className="slider__header">
                <h2>{module.title}</h2>
            </div>

            <div className="slider__body">
                <button 
                    className="slider__btn slider__btn--left" 
                    aria-label="slide to left" 
                    aria-disabled="false" 
                    aria-pressed="false" 
                    onClick={scrollLeft}
                >
                    <img src={'/static/icons/icon_caret-left.svg'} />
                </button>

                <div className="slider__content" ref={sliderRef}>
                    {module.layoutTitles.titles.map((title) => (
                        <Suspense key={title.titleId} fallback={<Skeleton className="skeleton--card" />}>
                            <Card key={title.titleId} title={title} />
                        </Suspense>
                    ))}
                </div>

                <button 
                    className="slider__btn slider__btn--right" 
                    aria-label="slide to right" 
                    aria-disabled="false" 
                    aria-pressed="false" 
                    onClick={scrollRight}
                >
                    <img src={'/static/icons/icon_caret-right.svg'} />
                </button>
            </div>
        </section>
    )
}

export default Slider
