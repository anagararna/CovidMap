import "../organismos/CovidTracker.css"
import ApiConsum from "../../services/ApiConsum"
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

function CovidTrackerTop() {
    const data = ApiConsum("all");
    return(
        <div className="div-covid-tracker">
            <div className="text-left mb-2 mt-3">
                <h2 className="h-covid-tracker">COVID-19 Tracker</h2>
            </div>
            <ul className="pt-2">
                <li className=" text-left list-covid-tracker ">
                    <div className="div-list-covid-tracker cases_covid-tracker">
                        <span className="h-covid-tracker3 span-badge-covid-tracker1">
                            Total Case:
                        </span>
                        <span className="span-badge-covid-tracker2">
                            <Badge bg="light" text="secondary" className="badge-covid-tracker2">
                            +{data.todayCases}  
                            </Badge>
                            {data.cases}
                        </span>
                    </div>
                </li>
                <li className="text-left list-covid-tracker ">
                    <div className="div-list-covid-tracker active_covid-tracker">
                        <span className="h-covid-tracker3 span-badge-covid-tracker1">
                            Active Case:
                        </span>
                        <span  className="span-badge-covid-tracker2">
                            {data.active}
                        </span>
                    </div> 
                </li>
                <li className="text-left list-covid-tracker ">
                    <div className="div-list-covid-tracker recovered_covid-tracker">
                        <span className="h-covid-tracker3 span-badge-covid-tracker1">
                            Recovered Case:
                        </span>
                        <span  className="span-badge-covid-tracker2">
                            <Badge bg="light" text="secondary" className="badge-covid-tracker2">
                            +{data.todayRecovered}  
                            </Badge>
                            {data.recovered}
                        </span>
                    </div>
                </li>
                <li className="text-left list-covid-tracker ">
                    <div className="div-list-covid-tracker deaths_covid-tracker">
                        <span className=" h-covid-tracker3 span-badge-covid-tracker1">
                            Deaths Case:
                        </span>
                        <span  className="span-badge-covid-tracker2">
                            <Badge bg="light" text="secondary" className="badge-covid-tracker2">
                            +{data.todayDeaths}  
                            </Badge>
                            {data.deaths}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
    
};

export default CovidTrackerTop;

