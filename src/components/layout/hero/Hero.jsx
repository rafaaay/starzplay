import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Hero() {
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
                <img src="/public/images/img_banner-1.jpg" />

                <img src="/public/images/img_banner-1.jpg" />

                <img src="/public/images/img_banner-1.jpg" />

                <img src="/public/images/img_banner-1.jpg" />

            </Carousel>
        </section>
    )
}

export default Hero
