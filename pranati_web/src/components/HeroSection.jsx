import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { motion, spring } from "framer-motion";

function HeroSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      
        <Container className=" my-5">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://pranatitechnologies.com/wp-content/uploads/2018/09/Technology-development.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://pranati.co.in/wp-content/uploads/2018/10/Domainhostingwebemailseo-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://pranati.co.in/wp-content/uploads/2018/10/Digital-Marketign-and-branding275x183.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container>
          <Row className=" py-5 mx-0">
            <Col sm={6}>
              {/* <Figure.Image
                rounded
                src="https://bomitsolutions.co.uk/wp-content/uploads/business-support.jpg"
                className="w-100"
              /> */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: .5,
                }}
              >
                <Image
                  className="w-100"
                  src="https://bomitsolutions.co.uk/wp-content/uploads/business-support.jpg"
                />
              </motion.div>
            </Col>
            <Col sm={6}>
              <Row>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 1 }}
                >
                  <h1 className="about-title">About</h1>
                </motion.div>
              </Row>
              <Row>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{  duration: .5 }}
                >
                  <p className="about-content ">
                    Pranati Technologies is a group of technology experts having
                    an average experience more than 23 years and more than
                    2,88,000 man hour work experience with the international
                    clients. We are capable of handling various web technologies
                    and application development. We have been working for
                    international clients world-wide with remote development and
                    support services.
                  </p>
                  <p className="about-content">
                    We have a Web Development and Branding Team which will take
                    care of all your DIGITAL requirements. This team will help
                    you to find Domain Names, Hosting, Web Designing, Logo
                    Creation, E-Brochure Design, Flyer Design, SEO(Search Engine
                    Optimization), Social Media Marketing, Free and Paid
                    Advertisement, Branding and other promotional activities. We
                    happy to give FREE consultation for your digital needs,
                    those who are new to this DIGITAL world.
                  </p>
                </motion.div>
              </Row>
            </Col>
          </Row>
        </Container>
      
    </>
  );
}

export default HeroSection;
