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
                  <form name="contactForm" method="post" id="contactForm">
                        <div className="mb-3">
                          <input type="text" style={{ borderColor: '#227b2c', color:"#227b2c" }} name="full_name" className="form-control custom-input" placeholder="Name" required />
                        </div>
                        <div className="mb-3">
                          <input type="text" style={{ borderColor: '#227b2c', color:"#227b2c" }} name="company_name" className="form-control custom-input" placeholder="Company name" required />
                        </div>
                        <div className="mb-3">
                          <input type="text" style={{ borderColor: '#227b2c', color:"#227b2c" }} name="industry" className="form-control custom-input" placeholder="Industry" required />
                        </div>
                        <div className="mb-3">
                          <input type="email" style={{ borderColor: '#227b2c', color:"#227b2c" }} name="email" className="form-control custom-input" placeholder="Email" required />
                        </div>
                        <div className="mb-3" style={{border:'1px solid #227b2c', borderRadius:"12px"}}>
                          <div className="input-group" style={{borderTopLeftRadius:"12px", borderBottomLeftRadius:"12px", background:"#fff",border: 'none', borderRadius:'12px'}}>
                            <span className="input-group-text" style={{background:"#fff", border:"none",borderTopLeftRadius:"12px", borderBottomLeftRadius:"12px"}}>
                            <select name="country_code" class="form-select" required="" style={{border:"none"}}>
                                                <option value="+1">+1 (US)</option>
                                                <option value="+44">+44 (UK)</option>
                                                <option value="+91">+91 (IN)</option>
                                                <option value="+61">+61 (AU)</option>
                                                <option value="+81">+81 (JP)</option>
                                                <option value="+49">+49 (DE)</option>
                                                <option value="+33">+33 (FR)</option>
                                                <option value="+86">+86 (CN)</option>
                                                <option value="+55">+55 (BR)</option>
                                                <option value="+7">+7 (RU)</option>
                                                <option value="+39">+39 (IT)</option>
                                                <option value="+34">+34 (ES)</option>
                                                <option value="+82">+82 (KR)</option>
                                                <option value="+1">+1 (CA)</option>
                                                <option value="+62">+62 (ID)</option>
                                                <option value="+52">+52 (MX)</option>
                                                <option value="+27">+27 (ZA)</option>
                                                <option value="+60">+60 (MY)</option>
                                                <option value="+63">+63 (PH)</option>
                                                <option value="+65">+65 (SG)</option>
                                                <option value="+46">+46 (SE)</option>
                                                <option value="+41">+41 (CH)</option>
                                                <option value="+31">+31 (NL)</option>
                                                <option value="+47">+47 (NO)</option>
                                                <option value="+32">+32 (BE)</option>
                                                <option value="+48">+48 (PL)</option>
                                                <option value="+43">+43 (AT)</option>
                                                <option value="+90">+90 (TR)</option>
                                                <option value="+20">+20 (EG)</option>
                                                <option value="+98">+98 (IR)</option>
                                                <option value="+64">+64 (NZ)</option>
                                                <option value="+45">+45 (DK)</option>
                                                <option value="+66">+66 (TH)</option>
                                                <option value="+380">+380 (UA)</option>
                                                <option value="+351">+351 (PT)</option>
                                                <option value="+30">+30 (GR)</option>
                                                <option value="+54">+54 (AR)</option>
                                                <option value="+372">+372 (EE)</option>
                                                <option value="+420">+420 (CZ)</option>
                                                <option value="+370">+370 (LT)</option>
                                                <option value="+502">+502 (GT)</option>
                                                <option value="+371">+371 (LV)</option>
                                                <option value="+353">+353 (IE)</option>
                                            </select>
                            </span>
                            <input type="number" style={{border:"none", color:"#227b2c", borderTopRightRadius:"12px", borderBottomRightRadius:"12px"}} name="phone_number" className="form-control custom-input" placeholder="Phone Number" required />
                          </div>
                        </div>
                        <div className="mb-3">
                          <textarea name="notes" style={{ borderColor: '#227b2c', color:"#227b2c" }} className="form-control custom-input" placeholder="Notes" required defaultValue={""} />
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
                              <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} />
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
