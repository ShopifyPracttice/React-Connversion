import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Addidas from "../images/testimonial/addidas-logo.svg"
import TestnimonialThumb from "../images/testimonial/thumb-1.png";
const ClientStories = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // No bullets
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 745, // Screen width less than 745px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Screen width less than 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move to previous slide
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Move to next slide
  };
  return (
    <section className="pt-80 pb-60 testimonialSec guidTestimonialSec">
      <div className="container">
        <div className="mb-40 text-center testimonialHeader">
          <h3 className="block-title fw-400 mb-10">What Our Clients Are Saying about Us</h3>
        </div>
        <div className="testimonialSecinner" style={{position:"relative"}}>
        <div className="slider-nav-buttons">
            <button onClick={handlePrev} className="prev-arrow">
              <span><i className='fa-light fa-arrow-left'></i></span> {/* You can replace this with any custom icon */}
            </button>
            <button onClick={handleNext} className="next-arrow">
              <span><i className='fa-light fa-arrow-right'></i></span> {/* You can replace this with any custom icon */}
            </button>
          </div>
          <Slider {...settings} ref={sliderRef} className="testimonialSlider">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="testimonialSliderItem">
                <div className="testimonialBox">
                  <div className="testimonialBoxinner">
                    <div className="testimonialContent">
                      <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc at magna sed nulla accumsan elementum sit amet ut mauris.
                        Donec hendrerit pharetra nulla suscipit dapibus. Nulla rhoncus convallis dui
                        in tristique. Nullam vel accumsan metus. Curabitur porta tempor
                        ante ac volutpat. Vivamus eu mi sed leo porta bibendum.”</p>
                    </div>
                    <div className="mt-10 mb-20 divider-line" />
                    <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                      <div className="leftPart">
                        <div className="d-flex align-items-center userInfo">
                          <div className="userThumb mr-10">
                            <img className="img-fluid" src={TestnimonialThumb} alt="client" />
                          </div>
                          <div className="content">
                            <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram</h4>
                            <p className="mb-0">Chief Executive Officer</p>
                          </div>
                        </div>
                      </div>
                      <div className="rightPart">
                        <img className="img-fluid" src={Addidas} alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;
