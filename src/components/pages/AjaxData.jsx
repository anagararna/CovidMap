import React from 'react';
import NavBTracker from '../organismos/NavBTracker';
import CovidTracker from '../organismos/CovidTracker';

function AjaxData() {
  return (
      <main className="d-flex">
        <section >
          <NavBTracker/>
        </section>  
        <section className="nav-info bg-white">  
          <CovidTracker/>
        </section>
      </main>
  )
}

export default AjaxData