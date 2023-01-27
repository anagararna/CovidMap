import React from "react";
import LogoWhite from '../../images/logo-white.png';
import '../organismos/footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <Container className="footer">
            <Row className="top-footer">
                <Col className="footer-info" sm={8} md={12} lg={4} xl={4}>
                    <img className="footer-info-logo"
                        src={ LogoWhite }
                        alt="Logo"
                    />
                    <p className="footer-info-description">
                        These droplets can land objects and<br/>surfaces around the
                        person such as tables,<br/>doorknobs and handrails.
                    </p>
                    <Row className="footer-info-rrss">
                        <button className="footer-info-rrss-facebook">
                                <FontAwesomeIcon icon={ faFacebookF } />
                        </button>
                        <button className="footer-info-rrss-twitter">
                                <FontAwesomeIcon icon={ faTwitter } />
                        </button>
                        <button className="footer-info-rrss-linkedin">
                                <FontAwesomeIcon icon={ faLinkedinIn } />
                        </button>
                        <button className="footer-info-rrss-user">
                                <FontAwesomeIcon icon={ faUser } />
                        </button>
                    </Row>
                </Col>

                <Col className="footer-quick-links" sm={4} md={3} lg={2} xl={2}>
                    <ul className="footer-links">
                    <h6 className="footer-title-links">Quick Links</h6>
                        <li>Preventions</li>
                        <li>Quarantine</li>
                        <li>About</li>
                        <li>Help</li>
                    </ul>
                </Col>

                <Col className="footer-about" sm={4} md={3} lg={2} xl={2}>
                    <ul className="footer-links">
                    <h6 className="footer-title-links">About</h6>
                        <li>Hand Wash</li>
                        <li>Social Distance</li>
                        <li>Isolate</li>
                        <li>Difference</li>
                    </ul>
                </Col>

                <Col className="footer-about-two" sm={4} md={3} lg={2} xl={2}>
                    <ul className="footer-links">
                    <h6 className="footer-title-links">About</h6>
                        <li>Hand Wash</li>
                        <li>Social Distance</li>
                        <li>Isolate</li>
                        <li>Difference</li>
                    </ul>
                </Col>

                <Col className="footer-help" sm={4} md={3} lg={2} xl={2}>
                    <ul className="footer-links">
                    <h6 className="footer-title-links">Help</h6>
                        <li>Hand Wash</li>
                        <li>Social Distance</li>
                        <li>Isolate</li>
                        <li>Difference</li>
                    </ul>
                </Col>
            </Row>
            <hr/>
            <Row className="bottom-footer">
                <Col className="footer-disclaimer" sm={4} md={6} lg={6} xl={6}>
                    <p className="footer-disclaimer-text">
                        ©Copyright 2023. All Rights Reserved.
                    </p>
                </Col>

                <Col className="footer-designer" sm={4} md={6} lg={6} xl={6}>
                    <p className="footer-designer-text">
                        Design by<span className="footer-designer-text-queen"> Queen API </span>with ❤.
                    </p>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;