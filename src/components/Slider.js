import React, { useState, useEffect } from 'react';
import './styles/Slider.css';

const slidesData = [
  { src: "/images/slide1.jpg", title: "Our Independence Movement Constitution", text: "As we celebrate..." },
  { src: "/images/slide2.jpg", title: "Pluralist Agreement", text: "PACT is a ground-breaking project..." },
  { src: "/images/slide3.jpg", title: "Aundh State Constitution Act 1939", text: "In November 1938, Mahatma Gandhi..." },
  { src: "/images/slide4.jpg", title: "The Making of India's Constitution", text: "Watch this exclusive animated video..." }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slidesData.length) % slidesData.length);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.src} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;
