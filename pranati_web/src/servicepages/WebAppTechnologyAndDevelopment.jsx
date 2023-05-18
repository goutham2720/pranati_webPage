import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function WebAppTechnologyAndDevelopment() {
  return (
    <>
      <Navigationbar />
      <Container className="vh-100 my-5">
        <h3 className="fs-2 text-info">Web App – Technology & Development</h3>
        <p>
          Pranati Technologies, a leading web app development service provider,
          has a team of talented developers, project managers, and quality
          engineers. We use superior web app development techniques to build
          customized, high-performing enterprise-grade applications for your
          business.
        </p>
        <p>
          Pranati Technologies provides end-to-end web application development
          services for businesses using cutting-edge technologies and tools for
          all types and sizes.
        </p>
        <p>Our development offerings</p>
        <ul>
          <li>Web portal development</li>
          <li>Content Management Systems (CMS) customizations</li>
          <li>Ecommerce development</li>
          <li>SaaS App development</li>
          <li>Enterprise Web Development</li>
          <li>Progressive Web App Development</li>
          <li>API Development</li>
        </ul>
      </Container>
      <Footer />
    </>
  );
}

export default WebAppTechnologyAndDevelopment;
