import React, { useState, useEffect, useRef } from 'react';
import NewsLetter from "../images/icon/newsletter-icon.svg";
import RightArrow2 from "../images/icon/right-arrow-2.svg";

const SubscribeForm = ({isOpen, setIsOpen}) => {
  const formRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the popup is open
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when the popup is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled if component unmounts
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="popup-overlay d-flex justify-content-center align-items-center">
          <div className="card p-4 shadow-lg" ref={formRef} style={{ maxWidth: '400px', borderRadius: '10px', backgroundColor: '#EAF7EA' }}>
            <div className="text-center mb-4">
              <img src={NewsLetter} alt="Megaphone Icon" style={{ maxWidth: '50px' }} />
            </div>
            <h5 className="text-center mb-4">Subscribe to Our Newsletter & Stay up to Date about the World of ESG</h5>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Company name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="privacyPolicyCheck" />
                <label className="form-check-label" htmlFor="privacyPolicyCheck">
                  I agree to the <a href="#privacy">Privacy Policy</a> & provide consent to receiving communications from VECTRA International
                </label>
              </div>
              <button type="submit" className="btn btn-success w-100">Subscribe for FREE <img src={RightArrow2} alt="Arrow Icon" /></button>
            </form>
          </div>
        </div>
      )}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8); /* Dark overlay */
          z-index: 9999;
          padding: 20px;
        }

        .card {
          max-width: 90%; /* Ensures the card is responsive on smaller screens */
          margin: auto;
        }

        h5 {
          font-size: 1.25rem; /* Adjust heading size for better readability */
        }

        @media (max-width: 576px) {
          .card {
            padding: 1rem; /* Smaller padding on mobile */
          }

          h5 {
            font-size: 1rem; /* Smaller heading size on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default SubscribeForm;
