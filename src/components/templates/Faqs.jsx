import React from "react";
import './faqs.css';
import CardFaqs from "../moleculas/CardFaq";
import Container from 'react-bootstrap/Container';

function Faqs() {
  return (
    <Container className="faqs">
        <div className="row-faqs-title">
            <div className="col-faqs-title">
                <h5 className="page-faqs-titles-title">
                    Faqs
                </h5>
            </div>
        </div>

        <div className="row-faqs-title">
            <div className="col-faqs-title">
                <h2 className="page-faqs-titles-subtitle">
                    Frequently Asked Questions
                </h2>
            </div>
        </div>

        <div className="row-faqs">
            <div className="col-faqs">
                <CardFaqs
                    title="01. How does COVID-19 spread?"
                    paragraph="Data has shown that it spreads from person to among
                    those in close contact (within about 6 feet, or 2 meters). 
                    The virus spreads by respiratory droplets released when
                    someone infected with the virus."
                />
            </div>
            <div className="col-faqs">
                <CardFaqs
                    title="04. What does it mean to self-isolate?"
                    paragraph="While some western, traditional or home remedies may
                    provide comfort and alleviate symtoms of mild COVID-19,
                    there are no medicines that have been shown to prevent 
                    or cure the disease. WHO does not recommended 
                    self-medication with any medicines."
                />
            </div>
        </div>

        <div className="row-faqs">
            <div className="col-faqs">
                <CardFaqs
                    title="02. What are the symtoms of COVID-19?"
                    paragraph="While some western, traditional or home remedies may
                    provide comfort and alleviate symtoms of mild COVID-19,
                    there are no medicines that have been shown to prevent 
                    or cure the disease. WHO does not recommended 
                    self-medication with any medicines."
                />
            </div>
            <div className="col-faqs">
                <CardFaqs
                    title="05. Can children or adolescents catch COVID-19?"
                    paragraph="Data has shown that it spreads from person to among
                    those in close contact (within about 6 feet, or 2 meters). 
                    The virus spreads by respiratory droplets released when
                    someone infected with the virus."
                />
            </div>
        </div>

        <div className="row-faqs">
            <div className="col-faqs">
                <CardFaqs
                    title="03. Should I wear mask?"
                    paragraph="Data has shown that it spreads from person to among
                    those in close contact (within about 6 feet, or 2 meters). 
                    The virus spreads by respiratory droplets released when
                    someone infected with the virus."
                />
            </div>
            <div className="col-faqs">
                <CardFaqs
                    title="06. Is there a vaccine or drug for COVID-19?"
                    paragraph="While some western, traditional or home remedies may
                    provide comfort and alleviate symtoms of mild COVID-19,
                    there are no medicines that have been shown to prevent 
                    or cure the disease. WHO does not recommended 
                    self-medication with any medicines."
                />
            </div>
        </div>
    </Container>
  )
}

export default Faqs;