import React from "react";
import Container from 'react-bootstrap/Container';
import '../templates/prevent.css';
import Hexagon from '../../images/icons/hexagon.svg';

const CardPrevent = ({ image, title, text }) => {
    return (
        <Container className="card">
            <div className="card-image">
                <img className="card-image-hexagon"
                    src={ Hexagon }
                    alt="Hexagon"
                />
                <img className="card-image-icon"
                    src={ image }
                    alt="Icon"
                />
            </div>

            <div className="card-text">
                <h4 className="card-text-title">{ title }</h4>
                <p className="card-text-text">{ text }</p>
            </div>
        </Container>
    )
};

export default CardPrevent;