import React, { useState } from 'react';
import Slider from "react-slick";
import './slider.css'; // Ensure you have this CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(2); // Start with the middle image (index 2)

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, // Enable center mode
    centerPadding: '40px', // Adjust padding around center image
    slidesToShow: 5, 
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next); // Update current slide index
    },
    responsive: [
      {
        breakpoint: 1344,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const institutions = [
    { src: "https://www.uptodd.com/images/newWebsite/institutions/aiims.webp", alt: "AIIMS", name: "AIIMS" },
    { src: "https://www.uptodd.com/images/newWebsite/institutions/iitbhu.webp", alt: "IIT BHU", name: "IIT BHU" },
    { src: "https://www.uptodd.com/images/newWebsite/institutions/stanford.webp", alt: "Stanford", name: "Stanford" },
    { src: "https://www.uptodd.com/images/newWebsite/institutions/mit.webp", alt: "MIT", name: "MIT (USA)" },
    { src: "https://www.uptodd.com/images/newWebsite/institutions/iitkgp.webp", alt: "IIT KGP", name: "IIT KGP" }
  ];

  return (
    <>
      <div className="slider-container">
        <h1>
          Program curated by <span>Medical experts, Researchers, & IITians</span>
        </h1>
        <Slider {...settings}>
          {institutions.map((inst, index) => (
            <div key={index} className={`slide-item ${currentSlide === index ? 'middle-image' : ''}`}>
              <img
                src={inst.src}
                alt={inst.alt}
                className={`slider-image ${currentSlide === index ? 'active' : ''}`}
              />
              {/* Show name only for the active image */}
              {currentSlide === index && (
                <h2 className="image-name">{inst.name}</h2>
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div className="curation-insti">
        <svg xmlns="http://www.w3.org/2000/svg" width="1140" height="2" viewBox="0 0 1140 2" fill="none">
          <path d="M0 1H1140" stroke="#D9D9D9"></path>
        </svg>
      </div>

      <div className="curation-objective">
        <div>
          <img src="https://www.uptodd.com/images/newWebsite/zero-screen-time.svg" alt="Zero Screen Time" />
          <p>Zero Screen Time</p>
        </div>
        <div>
          <img src="https://www.uptodd.com/images/newWebsite/loved-by-babies.svg" alt="Loved by Babies" />
          <p>Loved by Babies</p>
        </div>
        <div>
          <img src="https://www.uptodd.com/images/newWebsite/daily-plans.svg" alt="Daily Plans in 10 mins" />
          <p>Daily Plans in 10 mins</p>
        </div>
        <div>
          <img src="https://www.uptodd.com/images/newWebsite/creative-activities.svg" alt="Creative Activities" />
          <p>Creative Activities</p>
        </div>
        <div>
          <img src="https://www.uptodd.com/images/newWebsite/customised-plans.svg" alt="Customised Plans" />
          <p>Customised Plans</p>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
