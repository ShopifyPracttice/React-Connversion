import RightArrow2 from "../images/icon/right-arrow-2.svg";
import Image from "../images/bg/bg-2.svg";
const WhatStopping = () =>{
return (
  
        <section className="highligtContentSec"  style={{backgroundImage: `url(${Image})`}}>
          <div className="container" style={{maxWidth:'98%'}}>
            <div className="highligtContentSecinner">
              <div className="row rowBox">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 columnBox">
                  <div className="pt-80 pb-80 highligtContent">
                    <h3 className="block-title fw-400 mb-15">You know what's stopping you from successfully<br />
                      integrating ESG practices into your mining
                      operation?</h3>
                    <p className="mb-20">Get access to the comprehensive resources<br /> for meeting your
                      company’s ESG goals.</p>
                    <a href="#" className="custome-btn subscribe-btn">
                      <span className="txt">Learn More</span>
                      <span className="icon"><img className="img-fluid lazyloading"  alt="logo" src={RightArrow2} /></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 columnBox">
                  <div className="highligtContentThumb">
                    <img className="img-fluid lazyloading"  alt="logo" src={Image} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
export default WhatStopping;