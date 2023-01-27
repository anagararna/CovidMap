import React from "react";
import '../moleculas/carouselSymptom.css';
import { Carousel, Card, Stack, Container } from "react-bootstrap";
import Fever from '../../images/icons/fever.svg';
import Cough from '../../images/icons/cough.svg';
import Breathing from '../../images/icons/breathing.svg';

function CarouselSymptom() {

const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
   
  ];

  return (
    <div>
      <Container fluid>
        <Carousel style={{ height: 500 }} >
          {reviews.map((review) => (
            <Carousel.Item style={{ height: 500 }} key={review._id}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}>

                <Card style={{ width: "18rem" }}>
                  <Card.Body className="shadow">
                  <Card.Img className="img-card d-flex align-items-start" variant="left" src= {Fever} />
                    <Card.Title className="title d-flex align-items-start"><strong>Fever</strong></Card.Title>
                    <Card.Text>
                      Fever you feel hot to touch on your chest or back 
                      (you do not need to measureyour temperature). It is also may appear in 2-10 days.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body className="shadow">
                  <Card.Img className="img-card d-flex align-items-start" variant="left" src= {Cough} />
                    <Card.Title className="title d-flex align-items-start"><strong>Cough</strong></Card.Title>
                    <Card.Text>
                      Continuous coughing a lot for more than an hour, or 3 or more coughing episodes
                      in 24 hours. If you usually have a cough, it may be worse than usual.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body className="shadow">
                  <Card.Img className="img-card d-flex align-items-start" variant="left" src= {Breathing} />
                    <Card.Title className="title d-flex align-items-start"><strong>Confusion</strong></Card.Title>
                    <Card.Text>
                      Around 1 out of every 6 people who gets COVID-19 becomes
                      difficulty breathing or shortness of breath a lot.
                    </Card.Text>
                  </Card.Body>
                </Card>             

              </Stack>
            </Carousel.Item>
          ))}

                        
        </Carousel>
      </Container>
    </div>
  );
}
export default CarouselSymptom;