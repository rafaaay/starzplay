import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Hero({ banners }) {
    return (
        <section className="hero">
            <Carousel 
                autoPlay 
                centerMode
                infiniteLoop
                centerSlidePercentage={60} 
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                transitionTime={300}
            >
                {banners.map(banner => {
                    const { title, description, year, thumbnails } = banner;
                    const thumbnail = thumbnails?.['thumb-614x1536']?.url || '';

                    return(
                        <figure className='hero__item'>
                            <img src={thumbnail} />
                            <figcaption>{title}</figcaption>
                        </figure>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Hero
