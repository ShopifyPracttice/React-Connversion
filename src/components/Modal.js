import React, { useEffect, useRef } from 'react';
import RightArrow2 from "../images/icon/right-arrow-2.svg";

const ModalComponent = ({ displayForm, setDisplayForm }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setDisplayForm(false);
    }
  };

  useEffect(() => {
    if (displayForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [displayForm]);

  return (
    <main>
      {/* <div className="pt-80 pb-80 text-center" onClick={() => setDisplayForm(!displayForm)} >
        <button type="button" className="d-inline-flex justify-content-center custome-btn">
          <span className="txt">Popup-button</span>
          <span className="icon">
            <img className="img-fluid ls-is-cached lazyloaded" data-src="images/icon/right-arrow-2.svg" alt="logo" src={RightArrow2} />
          </span>
        </button>
      </div> */}
      {/* Popup Modal */}
      <div className="modal myPopupModal" style={{ display: displayForm ? 'grid' : 'none', background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="" style={{ width: '100%', display: 'grid', placeItems: 'center', height: '100vh' }} >
          <div className="modal-content" style={{ background: 'transparent', width: '100%', border:"none" }} >
            <button type="button" style={{ display: 'none' }} className="btn-close" onClick={() => setDisplayForm(false)}>
              <i className="fa-regular fa-xmark" />
            </button>
            <div className="from-box" ref={modalRef}>
              <div className="from-box-left">
                <div className="from-box-left-inner">
                  <div>
                    <h2>Get in Touch to Start Making a Positive Impact</h2>
                    <p>VECTRA International offers a complete suite of services to navigate the complex landscape of ESG</p>
                  </div>
                  <div>
                    <div className="from-box-left-bottom">
                      <p>Book a free 15 minute call with our expert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="from-box-right">
                <div className="getInTouchFormArea">
                  <h4 className="d-lg-none d-md-none d-sm-none text-center title">Book a free 15 minute call with our expert</h4>
                  <form name="contactForm">
                    <div className="form-group">
                      <input type="text" name="full_name" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="company_name" className="form-control" placeholder="Company name" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="industry" className="form-control" placeholder="Industry" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <select name="country_code" className="form-select" required>
                            <option>+91</option>
                            <option>+1</option>
                          </select>
                        </span>
                        <input type="number" name="phone_number" className="form-control" placeholder="Phone Number" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea name="notes" className="form-control" placeholder="Notes" required defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="check1" name="option1" defaultValue="something" required />
                        <label className="form-check-label">I agree to the Privacy Policy</label>
                      </div>
                    </div>
                    <div className="getInTouchFormBtnArea">
                      <button type="submit" name="submit" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                        <span className="txt">Get Started</span>
                        <span className="icon">
                          <img className="img-fluid lazyload" src={RightArrow2} alt="logo" />
                        </span>
                      </button>
                    </div>
                  </form>
                  <div id="thankYouPopup" style={{ display: 'none', fontSize: '13px', padding: '10px 0 0 0' }}>
                    Thank you for your submission! Our team will get back to you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ModalComponent;
