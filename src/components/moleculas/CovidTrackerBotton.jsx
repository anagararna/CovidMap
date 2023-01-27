import "../organismos/CovidTracker.css"
import ApiConsum from "../../services/ApiConsum"
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

function CovidTrackerBotton() {
    
    const dataCountry = ApiConsum("countries/");
    dataCountry.sort((a,b) =>  b.cases - a.cases);
    
    return(
        <div className="div-covid-tracker">
            <div className="text-left mb-2 mt-3">
                <h3 className="h-top10-covid-tracker">Top 10 Country</h3>
            </div>
            <ul className="pt-2">
            {
            dataCountry.slice(0,10).map((item) => ( 
                <li className=" list-top10-covid-tracker " key = {item.countryInfo._id}>
                    <div className="div-list-covid-tracker top10_covid-tracker">
                        <span className="span-badge-top10-covid-tracker1 text-start">
                            <Badge className="badge-covid-tracker"  bg=""   >
                                <img src={item.countryInfo.flag} alt="" className="flag-covid-tracker"  />  
                            </Badge>
                            { item.country} 
                        </span>
                        <span className="span-badge-top10-covid-tracker2" >
                            { item.cases } 
                        </span>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
    
};

export default CovidTrackerBotton;

