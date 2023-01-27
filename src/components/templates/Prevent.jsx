import React from "react";
import './prevent.css';
import CardPrevent from "../moleculas/CardPrevent";
import Container from 'react-bootstrap/Container';
import PersonalContact from '../../images/icon2.png';
import WashHands from '../../images/icon4.png';
import SocialDistancing from '../../images/icon5.png';
import RespiratoryHygiene from '../../images/breathing.svg'
import CleanAndDesinfect from '../../images/icon6.png';
import WearAFacemask from '../../images/banner-right.png';

function Prevent() {
  return (
    <Container className="prevent">
        <div className="row-prevent-title">
            <div className="col-prevent-title">
                <h5 className="page-prevent-titles-title">
                    Prevent
                </h5>
            </div>
        </div>

        <div className="row-prevent-title">
            <div className="col-prevent-title">
                <h2 className="page-prevent-titles-subtitle">
                    Best way to prevent is avoid virus.
                </h2>
            </div>
        </div>

        <div className="row-prevent">
            <div className="col-prevent">
                <CardPrevent 
                    image={ PersonalContact }
                    title="Personal Contact"
                    text="Fever is a key symptom, experts say. Don't fixate on a number,
                    but know it's really not a fever until your temperature reaches at 
                    least 100."
                />
            </div>
            <div className="col-prevent">
                <CardPrevent 
                    image={ WashHands }
                    title="Wash Hands"
                    text="Maintain at least 1 metre (3 feet) distance between yourself & 
                    anyone who is coughing or sneezing. If you are too close, get chance 
                    to infected."
                />
            </div>
        </div>

        <div className="row-prevent">
            <div className="col-prevent">
                <CardPrevent 
                    image={ SocialDistancing }
                    title="Social Distancing"
                    text="Hands touch many surfaces and can pick up viruses. So, hands 
                    can transfer the virus to your eyes, nose or mouth and can make you sick."
                />
            </div>
            <div className="col-prevent">
                <CardPrevent 
                    image={ RespiratoryHygiene }
                    title="Respiratory Hygiene"
                    text="Maintain good respiratory hygiene as covering your mouth & nose with 
                    your bent elbow or tissue when cough or sneeze."
                />
            </div>
        </div>

        <div className="row-prevent">
            <div className="col-prevent">
                <CardPrevent 
                    image={ CleanAndDesinfect }
                    title="Clean And Desinfect"
                    text="Fever is a key symptom, experts say. Don't fixate on a number,
                    but know it's really not a fever until your temperature reaches at 
                    least 100."
                />
            </div>
            <div className="col-prevent">
                <CardPrevent 
                    image={ WearAFacemask }
                    title="Wear a Facemask"
                    text="Our comprehensive Online Marketing strategy will boost your 
                    website trafic hence monthly sales."
                />
            </div>
        </div>
    </Container>
  )
}

export default Prevent;