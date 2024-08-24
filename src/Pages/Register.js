import { Link } from "react-router-dom";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
import Tree from "../images/register/man-tree.png";
const Register = () =>{
return (
  
        <main>
          <section className="resoueces-sec registerPageSec pt-40 pb-40">
            <div className="container">
              <div className="resources-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="resources-left">
                      <h1 className="fw-300 mb-20 green-color">Thank you for<br />
                        Registering with us!</h1>
                      <p>Our team will get in touch with you<br /> soon to discuss the next steps. </p>
                      <Link to="/" className="custome-btn">
                        <span className="txt">Back to home</span>
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="register-right">
                      <img src={Tree} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    };
export default Register;    