import React from "react";
import '../templates/symptom.css'
import CarouselSymptom from "../moleculas/CarouselSymptom";
import { Container } from "react-bootstrap";

function Symptom() {
  return (
    <>
    <Container fluid className="symptom-cont padding-v100 ">
      <Container fluid>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <h5 className="title-symptom">Symptom</h5>
            <h2 className="basic-symptom">Basic Symptom Against <br/> Corona virus</h2>
          </div>
        </div>
        <div className="row">
          <CarouselSymptom />
        </div>

      </Container>
    </Container>
      
    
    </>
  );
}

export default Symptom;