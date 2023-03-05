import React from "react";
import web1 from './images/Freelance_image1.webp';
const About=()=> {
    return (
      <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 className="">
                  Programming expert in C,C++,Java,Javascript,
                  Frontend and Backend technologies
                </h1>
                <div className="my-3">
                  <h2>
                  Programming with Sunil, where Coding is fun
                </h2>
                </div>
                <div className="mt-3">
                <button>Start Here</button>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-">
                <img src={web1} className="img-fluid animated image_animation1" alt="image1"></img>
                </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </>
    );
  }
  
  export default About;