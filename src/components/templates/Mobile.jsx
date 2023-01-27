import React from "react";
import "../../App";
import "../templates/mobile.css";
import Container from "react-bootstrap/Container";
import Imgphone from "../../images/phone-1.png";
import Button from "react-bootstrap/Button";

function Mobile() {
  return (
    <div className="container-phone">
      <div className="contenedor-background">
        <div className="phone-background">
          <div className="row-phone-left">
            <h1 className="phone-tittle">
              Get the simple app <br /> for latest news
            </h1>
            <p className="phone-subtittle">
              Human coronaviruses are common and are typically associated <br />{" "}
              with mild illnesses, similar to the common cold.
            </p>
            <Button className="boton" variant="secondary" size="sm">
              DOWNLOAD NOW
            </Button>
            </div>
            <div className="row-phone-right">
              <img src={Imgphone} alt="image-phone" className="img" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Mobile;
