import React from "react";
import Container from 'react-bootstrap/Container';
import '../pages/cardstracker.css';

const CardsTrackerMol = ({ flagcountry, namecountry, cases, death, recovered, todaydeath, todaycases, critical, activecases }) => {
    return (
        <Container className="card-tracker">
            <div className="card-tracker-row">
                <img src={ flagcountry } className="col-flagcountry"></img>
                <p className="col-namecountry">{ namecountry }</p>
            </div>
            <div className="card-tracker-row-row">
                <div className="card-tracker-row">
                    <div className="col-cases">
                        <p className="col-cases-text">Cases</p>
                        <p className="col-cases-data">{ cases }</p>
                    </div>
                    <div className="col-death">
                        <p className="col-death-text">Death</p>
                        <p className="col-death-data">{ death }</p>
                    </div>
                    <div className="col-recovered">
                        <p className="col-recovered-text">Recovered</p>
                        <p className="col-recovered-data">{ recovered }</p>
                    </div>
                    <div className="col-todaydeath">
                        <p className="col-todaydeath-text">Today death</p>
                        <p className="col-todaydeath-data">{ todaydeath }</p>
                    </div>
                </div>

                <div className="card-tracker-row">
                    <div className="col-todaycases">
                        <p className="col-todaycases-text">Today cases</p>
                        <p className="col-todaycases-data">{ todaycases }</p>
                    </div>
                    <div className="col-critical">
                        <p className="col-critical-text">Critical</p>
                        <p className="col-critical-data">{ critical }</p>
                    </div>
                    <div className="col-activecases">
                        <p className="col-activecases-text">Active cases</p>
                        <p className="col-activecases-data">{ activecases }</p>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default CardsTrackerMol;

