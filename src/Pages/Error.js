import RightArrow2 from "../images/icon/right-arrow-2.svg";
import ErrorImage from "../images/error/error-img.png";
const Error = () =>{
return (
  
        <main>
          <section className="resoueces-sec pt-40 pb-40 errorPageBannerSec">
            <div className="container">
              <div className="resources-inner">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="resources-left error">
                      <h1 className="fw-300 mb-20"><span className="green-color">Oops!</span><br />
                        This page doesn’t exist</h1>
                      <p className="mb-30">But don't worry, we can get you back on track.</p>
                      <a href="/" className="custome-btn">
                        <span className="txt">Back to home</span>
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="resources-right">
                      <img src={ErrorImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }
export default Error;