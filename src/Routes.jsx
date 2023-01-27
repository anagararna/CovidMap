import * as React from "react";
import {Routes, Route} from "react-router-dom";
import NavBTraker from './components/organismos/NavBTracker.jsx';
import AjaxData from './components/pages/AjaxData';
import CardsTracker from './components/pages/CardsTracker';
import CountryWise from './components/pages/CountryWise';
import ExGrafhic from './components/pages/ExGraphic';
import ExMap from './components/pages/ExMap';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Top10Country from './components/pages/Top10Country';
import Updates from './components/pages/Updates';
import Prevent from '../src/components/templates/Prevent'
import Faqs from './components/templates/Faqs';
import Mobile from './components/templates/Mobile';
import Landing from "./components/templates/Landing.jsx";
import Spreads from './components/templates/Spreads';
import Symptom from './components/templates/Symptom';
import Wash from './components/templates/Wash';


const Rutas = () => {
     return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/NavBTraker" element={<NavBTraker/>}/>
            <Route path="/AjaxData" element={<AjaxData/>}/>
            <Route path="/CardsTraker" element={<CardsTracker/>}/>
            <Route path="/CountryWise" element={<CountryWise/>}/>
            <Route path="/ExGraphic" element={<ExGrafhic/>}/>
            <Route path="/ExMap" element={<ExMap/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/News" element={<News/>}/>
            <Route path="/Top10Country" element={<Top10Country/>}/>
            <Route path="/Updates" element={<Updates/>}/>
            <Route path="/Faqs" element={<Faqs/>}/>
            <Route path="/Landing" element={<Landing/>}/>
            <Route path="/Mobile" element={<Mobile/>}/>
            <Route path="/Spreads" element={<Spreads/>}/>
            <Route path="/Prevent" element={<Prevent/>}/>
            <Route path="/Symptom" element={<Symptom/>}/>
            <Route path="/Wash" element={<Wash/>}/>
        </Routes>
     )
 }
 export default Rutas;
