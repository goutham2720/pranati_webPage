import React from "react";
import Navigationbar from "../components/Navigationbar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

function MobileAppDevelopment() {
  return (
    <>
      <Navigationbar />
      <Container className="vh-100 my-5">
        <h3 className="fs-2 text-info">Mobile App Development</h3>
        <p>
          Mobile application development is the process of making software
          applications for mobile devices. They are usually written for Android
          or iOS, although other platforms exist.
        </p>
        <p>
          At Pranati Technologies, our skilled team has worked on mobile
          application development projects for different platforms and operating
          systems. These include iPhone, Windows, Android, iPad, Tablet and
          custom apps
        </p>
        <h4 className="fs-4">Native Mobile App development</h4>
        <p>
          Native mobile apps can work without the Internet, making them the hot
          favourites of technical experts. Pranati Technologies offers a variety
          of solutions for mobile and tablets covering all industries. Our
          experts understand the need for native mobile apps and design custom
          processes for their development and deployment.
        </p>
        <p>
          We provide the Prototyping and conceptualizing of Apps; we support
          third-party service integration and expert consultation on Domains. In
          addition, we provide powerful IDE tools.
        </p>
        <h4 className="fs-4">Hybrid Mobile App Development</h4>
        <p>
          Pranati Technologies specializes in developing cross-platform apps and
          seamlessly integrating technologies to provide our users with an
          interactive experience. We are the leading provider of hybrid mobile
          app development solutions in the industry, thanks to our team’s
          expertise and deep understanding of our customers’ diverse needs.
        </p>
        <p>
          Our developers are tech-savvy, and they are good at designing Custom
          Hybrid Apps and mobile device frameworks. We also provide Hybrid App
          maintenance and support.
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default MobileAppDevelopment;
