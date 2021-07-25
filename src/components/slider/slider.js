import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.css'

const Carousel = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
                <i class="fas fa-arrow-right"></i>
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <i class="fas fa-arrow-left"></i>
          </div>
        );
  };
  
    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: width < 1550 ? width < 1200 ? width < 600 ? 1 : 2 : 3 : 4,
        slidesToScroll: width < 1550 ? width < 1200 ? width < 600 ? 1 : 2 : 3 : 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return <Slider {...settings}>
        {data}
    </Slider>
}

export default Carousel