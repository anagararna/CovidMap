import React from "react";
import { Container } from "react-bootstrap";
import '../templates/faqs.css';

const CardFaqs = ({ title, paragraph }) => {
    return (
        <Container className="card-faqs">
            <div className="card-faqs-text">
                <h5 className="card-faqs-text-title">{ title }</h5>
                <p className="card-faqs-text-paragraph">{ paragraph }</p>
            </div>
        </Container>
    )
};

export default CardFaqs;