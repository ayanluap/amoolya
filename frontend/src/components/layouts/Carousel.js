import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
  return (
    <Slider
      dots={true}
      // infinite={true}
      // speed="500"
      // slidesToShow="1"
      // slidesToScroll="1"
      // autoplay={true}
      // autoplaySpeed="2000"
      // pauseOnHover={true}
    >
      <div className="carousel">
        <div className="carousel__content">
          <i className="u-italic">
            "It has been a pleasure working with our advisor Nitin Jain at
            Amoolya Group of Consultants. My husband and I have received sound
            advice with regard to incorporation, insurance issues and retirement
            planning."
          </i>
          <p className="u-text">~ Sanjay Rathore, Web Developer</p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__content">
          <i className="u-italic">
            “Before my husband and I started working with AGC, I always felt
            nervous that we weren’t making the right decisions about our
            finances or that we were missing something."
          </i>
          <p className="u-text">~ Priyansh Jain, Researcher</p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__content">
          <i className="u-italic">
            “Mankrit's holistic approach to wealth management has brought
            clarity to all of my financial goals and aspirations."
          </i>
          <p className="u-text">~ Anjana Kashyap</p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__content">
          <i className="u-italic">
            "I’ve known John for almost 10 years now and have worked directly
            with him for about four of those years. John’s expertise in
            financial planning and investment analysis are outstanding."
          </i>
          <p className="u-text">~ Sanjay Rastogi, Web Developer</p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__content">
          <i className="u-italic">
            “AGC has not only brought stability and profitability to my
            financials, but has used his network and expertise to assist in
            maximizing other estate items like insurance, benefits, and taxes."
          </i>
          <p className="u-text">~ Shankar Chaudhary</p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
