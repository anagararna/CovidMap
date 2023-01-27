import React from 'react';
import NavBTracker from '../organismos/NavBTracker';
import CovidTracker from '../organismos/CovidTracker';
import CardsTrackerMol from '../moleculas/CardsTrackerMol';
import '../pages/cardstracker.css';
import ApiConsum from "../../services/ApiConsum";
import Badge from "react-bootstrap/Badge";

function CardsTracker() {
  const dataCountry = ApiConsum("countries/");
  return (
    <main className="d-flex">
    <section >
      <NavBTracker/>
    </section>  

    <section className="nav-info bg-white">  
      <CovidTracker/>
    </section>

    <section className='cards-tracker-row'>
    {
    dataCountry.map((item) => ( 
      <div className='cards-tracker-row-column'>
        <CardsTrackerMol
          flagcountry={ item.countryInfo.flag }
          namecountry={ item.country }
          cases={ item.cases }
          death={ item.deaths }
          recovered={ item.recovered }
          todaydeath={ item.todayDeaths }
          todaycases={ item.todayCases }
          critical={ item.critical }
          activecases={ item.active }
        />
      </div> 
      ))}
    </section>
  </main>
  )
};

export default CardsTracker;