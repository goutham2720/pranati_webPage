import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import {
  BsMegaphoneFill,
  BsFillLaptopFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function ItSupport() {
  return (
    <>
      <Container>
        <h3 className="text-center mt-5">IT SUPPORT FOR BUSINESS.</h3>
        <p className="text-center">
          Are you a small/medium size organization needs IT supports and
          services for specific timeframe… We are here to provide you a flexible
          IT support services and technology solutions with a fixed/hourly rate.
        </p>
        <Row className="d-flex justify-content-evenly">
          <Col
            as={Link}
            to="/Contact"
            className=" text-decoration-none border border-3 border-info rounded mx-3 my-3"
            sm={3}
          >
            <div>
              <div className="text-center fs-1 text-info">
                <BsMegaphoneFill />
              </div>

              <h3 className="text-center fs-4 text-info ">SUPPORT</h3>
              <p className="text-dark">
                We are providing online and remote solutions for your real-time
                day-today problems…
              </p>
            </div>
          </Col>
          <Col
            as={Link}
            to="/Contact"
            className="text-decoration-none border border-3 border-info rounded mx-3 my-3"
            sm={3}
          >
            <div>
              <div className="text-center fs-1 text-info">
                <BsFillLaptopFill />
              </div>
              <h3 className="text-center fs-4 text-info">SERVICES</h3>
              <p className="text-dark">
                We are solution provides for all kinds of Web related services,
                like web hosting, web design, digital marketing…
              </p>
            </div>
          </Col>
          <Col
            as={Link}
            to="/Contact"
            className="text-decoration-none border border-3 border-info rounded mx-3 my-3"
            sm={3}
          >
            <div>
              <div className="text-center fs-1 text-info">
                <BsFillGearFill />
              </div>
              <h3 className="text-center fs-4 text-info">DEVELOPMENT</h3>
              <p className="text-dark">
                We are providing customised solutions for all your software
                requirements…
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItSupport;
