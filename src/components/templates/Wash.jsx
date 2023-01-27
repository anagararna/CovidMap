import React from "react";
import "../templates/wash.css";
import ImgWash from "../../images/wash.png";
import "../../App";

function Wash() {
  return (
    <div className="container">
      <div className="hands-text">
        <h5 className="wash-tittle">Wash</h5>
        <h1 className="wash-tittle-subtittle">Wash your hands min 20 second</h1>
      </div>
      <div className="hands-foto">
        <img className="img-hands" src={ImgWash} alt="foto-hands"></img>
      </div>
    </div>
  );
}

export default Wash;
