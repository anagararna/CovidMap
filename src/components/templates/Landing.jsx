import React from "react";
import "../templates/landing.css";
import "../../App";
import ApiConsum from "../../services/ApiConsum";
import image1 from "../../images/banner-right-image1.png";
import { Container } from "react-bootstrap";

function Landing() {
  const dataEsp = ApiConsum("countries/esp");
  return (
    <>
    <Container fluid className="landing-container img-responsive">
      <Container className="col-sm-12 col-md-6 banner-right align-items-center">
        <Container className="row justify-content-between align-items-center">
          <Container className="title">
            <h1 className="text-white display3 fw-bold h1-home">Stay Home, And <br /> 
            Prayer For Victim<br /> Of Corona virus.
            </h1>            
          </Container>
          <Container className="subtitle">
            <p className="text-white 1h-lg text-banner fs-6 p-home">
            Human coronaviruses are common and are typically associated with
            illnesses, similar to the common cold, The corona virus COVID-19 is
            affecting 210 countries & territories around the world and 2
            international conveyances..
            </p>
          </Container>
        </Container>
        <div className="card-api card-country">
          <div className="card-country-left">
            {" "}
            <img
              src="https://disease.sh/assets/img/flags/es.png"
              alt=""
              className="card-country-flag"
            />
          </div>
          <div className="card-country-right">
            <h2>{dataEsp.cases}</h2>
            <p>
              <span className="Deaths"> {dataEsp.deaths}</span>{" "}
              <span className="Recovered">{dataEsp.recovered}</span>
            </p>
          </div>
        </div>
      </Container>
      <Container className="col-sm-12 col-md-6 banner-left d-flex justify-content-center fondo">
        <img className="img-fluid" src={image1} alt=""></img>
      </Container>
    </Container>

    </>    
  );
}

export default Landing;