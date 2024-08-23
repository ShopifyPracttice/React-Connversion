import RightArrow2 from "../images/icon/right-arrow-2.svg";
import ContactBackground from "../images/bg/getInTouch-bg.webp";


const ContactForm = () =>{
    return(
        <section className="pt-80 pb-80 getInTouchSec"  style={{paddingTop: '80px', paddingBottom: '80px', background: `url(${ContactBackground}) no-repeat center center/cover` }}  id="getInTouch">
        <div className="container">
          <div className="getInTouchSecinner">
            <div className="getInTouchArea">
              <div className="mb-25 text-center getInTouchHeaderArea">
                <h3 className="block-title white-txt-color fw-400 title">Ready to Make a Positive Impact?</h3>
                <p className="white-txt-color mb-0">Your commitment to a better world inspires us. Partner<br />
                  with us and let's amplify your impact together.</p>
              </div>
              <div className="getInTouchFormArea">
                <form name="contactForm" method="post" id="contactForm">
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
                <div id="thankYouPopup" style={{display: 'none', fontSize: '13px', padding: '10px 0 0 0'}}>
                  Thank you for your submission! Our team will get back to you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ContactForm