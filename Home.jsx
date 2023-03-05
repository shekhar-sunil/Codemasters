import React from "react";
import web from './images/kids.webp';
import './style.css';
const Home=()=> {
    return (
      <>
      <section id="header" className="d-flex align-items-center mt-70px">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 className="">
                  Learn Programming with <span>Sunil</span>
                </h1>
                <div className="my-3">
                  <h2>
                  <i>where <span class="span2">Coding</span>  is fun</i>
                </h2>
                </div>
                <div className="mt-3">
                <button>Start Here</button>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-">
                <img src={web} className="img-fluid animated image_animation" alt="image1"></img>
                </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Home;