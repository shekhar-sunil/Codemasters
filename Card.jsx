import React from "react";
const Card=(props)=> {
    return (
      <>
  <div className="card">
  <img src={props.imgsrc} className="card-img-top img1" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Programming lessons on C, C++, Java, Javascript with front-end and back-end technologies</p></div> 
</div>             
 </>
    );
  }
  
export default Card;
