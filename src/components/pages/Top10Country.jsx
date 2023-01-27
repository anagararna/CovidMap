import React from 'react';
import NavBTracker from '../organismos/NavBTracker';
import CovidTracker from '../organismos/CovidTracker';
import Top10CountryRigth from '../organismos/Top10CountryRigth';

function Top10Country() {
  return (
    <main className="d-flex">
      <section >
        <NavBTracker/>
      </section>  
      <section className="nav-info bg-white">  
        <CovidTracker/>
      </section>
      <section className="nav-info bg-white"> 
        <Top10CountryRigth/>
      </section>
    </main>
  )
}

export default Top10Country