import React from "react";
import "../../App";
import "../pages/updates.css"
import NavBTracker from "../organismos/NavBTracker";
import CovidTracker from "../organismos/CovidTracker";
import ApiConsum from "../../services/ApiConsum";
import Blue from "../../images/icons/covid-blue.svg";
import Red from "../../images/icons/covid-red.svg";
import Green from "../../images/icons/covid-green.svg";
import Orange from "../../images/icons/covid-orange.svg";
import Mapa from "../../images/mapa2.JPG";
import Defult from "../../images/icons/covid-defult.svg";
import Redark from "../../images/icons/covid-redark.svg";
import {useState} from "react";

function Updates() {
  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const countries = ApiConsum("countries/");
  const dataCountry = ApiConsum (`countries/${selectedCountry}`);
  const captureValue = (e) => {
    setSelectedCountry(e.target.value);
    dataCountry(ApiConsum (`countries/${selectedCountry}`));
  }

  const getCurrentDate = () => {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    return dateString;
  };

  return (
    <main className="d-flex">
      <section className="overflow-y-hidden">
        <NavBTracker />
      </section>
      <section className="nav-info bg-white overflow-y-auto">
        <CovidTracker />
      </section>
      <div className="track01 bg-aliceblue w-100 p-3" id="track01">
        <div className="card border-0 bg-transparent p-3" id="carta">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="car">
              <div className="form-group">
                <select id="select-countries" className="btn bg-white"
                onChange={captureValue}
                value={selectedCountry} >
                  {countries.map((item) => (
                    <option value={item.country} key={item.country}>
                      {item.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div id="update">
              <p className="mb-0 text-dark fst-italic parrafo">
                Update:
                <span className="text-dark">{getCurrentDate()}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-transparent p-3 p-4 border-0 border-top" id="cardCountry">
          <div className="row h-100">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="card col-md-4 col-lg-6 col-6 p-2 bg-transparent border-0 card-animation mb-3 ">
                  <div className="card border-0 card-total-cases p-2">
                    <div className="d-flex justify-content-start align-items-center p-2 border-bottom">
                      <h6 className="ms-2 fs-5">Total Cases</h6>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                      <p className=" ms-2 fs-2 mb-0 fw-bold text-blue-primary">
                        {dataCountry.cases}
                      </p>
                    </div>
                    <img src={Blue} className="colores" alt="covid"></img>
                  </div>
                </div>
                <div className="card col-md-4 col-lg-6 col-6 p-2 bg-transparent border-0 card-animation mb-3 ">
                  <div className="card border-0 card-total-cases p-2">
                    <div className="d-flex justify-content-start align-items-center p-2 border-bottom">
                      <h6 className="ms-2 fs-5">Total Deaths</h6>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                      <p className=" ms-2 fs-2 mb-0 fw-bold text-danger">
                      {dataCountry.deaths}
                      </p>
                    </div>
                    <img src={Red} className="colores" alt="covid"></img>
                  </div>
                </div>
                <div className="card col-md-4 col-lg-6 col-6 p-2 bg-transparent border-0 card-animation mb-3 ">
                  <div className="card border-0 card-total-cases p-2">
                    <div className="d-flex justify-content-start align-items-center p-2 border-bottom">
                      <h6 className="ms-2 fs-5">Total Recovered</h6>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                      <p className=" ms-2 fs-2 mb-0 fw-bold text-success">
                       {dataCountry.cases}
                      </p>
                    </div>
                    <img src={Green} className="colores" alt="covid"></img>
                  </div>
                </div>
                <div className="card col-md-4 col-lg-6 col-6 p-2 bg-transparent border-0 card-animation mb-3 ">
                  <div className="card border-0 card-total-cases p-2">
                    <div className="d-flex justify-content-start align-items-center p-2 border-bottom">
                      <h6 className="ms-2 fs-5">Total Active</h6>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                      <p className=" ms-2 fs-2 mb-0 fw-bold text-info">
                      {dataCountry.active}
                      </p>
                    </div>
                    <img src={Blue} className="colores" alt="covid"></img>
                  </div>
                </div>
                <div className="card col-md-4 col-lg-6 col-6 p-2 bg-transparent border-0 card-animation mb-3 ">
                  <div className="card border-0 card-total-cases p-2">
                    <div className="d-flex justify-content-start align-items-center p-2 border-bottom">
                      <h6 className="ms-2 fs-5">New Cases</h6>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                      <p className=" ms-2 fs-2 mb-0 fw-bold text-warning-color-dark">
                      {dataCountry.todayCases}
                      </p>
                    </div>
                    <img src={Orange} className="colores" alt="covid"></img>
                  </div>
                </div>
                <div className="card col-md-4 col-lg-6 col-6 p-2 bg-transparent border-0 card-animation mb-3 ">
                  <div className="card border-0 card-total-cases p-2">
                    <div className="d-flex justify-content-start align-items-center p-2 border-bottom">
                      <h6 className="ms-2 fs-5">New Deaths</h6>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                      <p className=" ms-2 fs-2 mb-0 fw-bold text-danger">
                      {dataCountry.todayDeaths}
                      </p>
                    </div>
                    <img src={Red} className="colores" alt="covid"></img>
                  </div>
                </div>
              </div>
            </div>  
              <div className="col-12 col-md-12 col-lg-6 bg-white">
                <img src={Mapa} alt="Mapa" id="mapa"></img>
              </div>
            
            <div className="row mt-3">
              <div className="col-12 row">
                <div className="card col-6 col-md-3 border-0 card-animation02">
                  <div className="card row d-flex flex-row pt-4 pb-4 border-2 border-end">
                    <div className="col-4">
                      <img src={Defult} className="color" alt="covid"></img>
                    </div>
                    <div className="col-8">
                      <p className="mb-0 text-dark">Confirmed</p>
                      <p className="fs-5 mb-0 text-blue-primary fw-bold">
                      {dataCountry.active}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-6 col-md-3 border-0 card-animation02">
                  <div className="card row d-flex flex-row pt-4 pb-4 border-2 border-end">
                    <div className="col-4">
                      <img src={Green} className="color" alt="covid"></img>
                    </div>
                    <div className="col-8">
                      <p className="mb-0 text-dark">Recovered</p>
                      <p className="fs-5 mb-0 text-blue-primary fw-bold">
                      {dataCountry.recovered}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-6 col-md-3 border-0 card-animation02">
                  <div className="card row d-flex flex-row pt-4 pb-4 border-2 border-end">
                    <div className="col-4">
                      <img src={Red} className="color" alt="covid"></img>
                    </div>
                    <div className="col-8">
                      <p className="mb-0 text-dark">Deaths</p>
                      <p className="fs-5 mb-0 text-blue-primary fw-bold">
                      {dataCountry.deaths}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-6 col-md-3 border-0 card-animation02">
                  <div className="card row d-flex flex-row pt-4 pb-4 border-2 border-end">
                    <div className="col-4">
                      <img src={Redark} className="color" alt="covid"></img>
                    </div>
                    <div className="col-8">
                      <p className="mb-0 text-dark">New Deaths</p>
                      <p className="fs-5 mb-0 text-danger-color-dark fw-bold">
                      {dataCountry.todayDeaths}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Updates;
