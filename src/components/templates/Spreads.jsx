import React from "react";
import "../../App";
import "../templates/spreads.css";
import P1 from "../../images/p-1.jpg";
import P2 from "../../images/p-2.jpg";
import P3 from "../../images/p-3.jpg";
import P4 from "../../images/p-4.jpg";
import P5 from "../../images/p-5.jpg";
import P6 from "../../images/p-6.jpg";

function Spreads() {
  return (
    <section className="spreads padding-v100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center">
              <h5 className="title">Spreads</h5>
              <h2 className="title2">
                <strong>Disease spreads from person to person</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row tarjetas-spreads">
          <div className="col-xl-4 col-lg-4 col-md-6 has-animation">
            <div className="imagen">
              <img src={P1} alt="" className="img" />
            </div>
            <div className="content">
              <h4 className="mb-4">Wear Facemask</h4>
              <p className="mb-0">
                Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 has-animation"
            data-delay="50"
          >
            <div className="imagen">
              <img src={P2} alt="" className="img" />
            </div>
            <div className="content">
              <h4 className="mb-4">Wash your hangs often</h4>
              <p className="mb-0">
                Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 has-animation"
            data-delay="100"
          >
            <div className="imagen">
              <img src={P3} alt="" className="img" />
            </div>
            <div className="content">
              <h4 className="mb-4">Keep social distance</h4>
              <p className="mb-0">
                Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 has-animation"
            data-delay="150"
          >
            <div className="imagen">
              <img src={P4} alt="" className="img" />
            </div>
            <div className="content">
              <h4 className="mb-4">Wear Facemask</h4>
              <p className="mb-0">
                Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 has-animation"
            data-delay="200"
          >
            <div className="imagen">
              <img src={P5} alt="" className="img" />
            </div>
            <div className="content">
              <h4 className="mb-4">Wash your hangs often</h4>
              <p className="mb-0">
                Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 has-animation"
            data-delay="250"
          >
            <div className="imagen">
              <img src={P6} alt="" className="img" />
            </div>
            <div className="content">
              <h4 className="mb-4">Keep social distance</h4>
              <p className="mb-0">
                Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spreads;
