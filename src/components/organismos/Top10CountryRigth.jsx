import "./Top10CountryRigth.css";
import ApiConsum from "../../services/ApiConsum";
import Top10Country from "../moleculas/Top10Country"

const Top10CountryRigth = () => {
   
  return (
    <div className="div-top10country" >
      <h2 className="h-div-top10country">Top 10 Country wise Covid-19 Updates - Tiles</h2>
      <hr></hr>
      <div className="div-top10country-main">
        <div className="div-top10country-main-TopToday">
          <h3 className="h-div-top10country-main">Top Cases</h3>
          <Top10Country filtro={"cases"}/>
        </div>
        <div className="div-top10country-main-TopToday">
          <h3 className="h-div-top10country-main">Today Cases</h3>
          <Top10Country filtro={"todayCases"}/>
        </div>
        <div className="div-top10country-main-TopToday">
          <h3 className="h-div-top10country-main">Top Deaths</h3>
          <Top10Country filtro={"deaths"}/>
        </div>
        <div className="div-top10country-main-TopToday">
          <h3 className="h-div-top10country-main">Today Deaths</h3>
          <Top10Country filtro={"todayDeaths"}/>
        </div>
        <div className="div-top10country-main-TopToday">
          <h3 className="h-div-top10country-main">Top Active</h3>
          <Top10Country filtro={"active"}/>
        </div>
        <div className="div-top10country-main-TopToday">
          <h3 className="h-div-top10country-main">Top Recover</h3>
          <Top10Country filtro={"recovered"}/>
        </div>

      </div>
        
    </div>
  );
};

export default Top10CountryRigth;