import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function CyberSecurity() {
  return (
    <>
      <Navigationbar />
      <Container className="vh-100 my-5">
        <h3 className="fs-2 text-info">Cyber Security</h3>
        <p>
          Your business needs a cyber resiliency strategy in the face of digital
          transformation and hyper-convergence. A cyber resiliency strategy can
          help you minimize risks and reduce the financial impact.
        </p>
        <p>
          We at Pranati Technologies follow best practices and state-of-the-art
          technologies to defend against cyber risks. We protect your
          business-critical applications and data and help accelerate recovery
          from a data breach or similar disruption.
        </p>
        <h4 className="fs-4">Our services include</h4>
        <ul>
          <li>
            Air-gapped protection of platform configurations and application
            data
          </li>
          <li>Immutable storage of data</li>
          <li>
            Anomaly detection helps identify and prevent a possible cyberattack
          </li>
        </ul>
        <p>
          Our specialized services help you detect and recover from site-level
          events with ease. We also provide a secure environment for your data
          and automated and air-gapped solutions for faster detection and
          recovery. We follow several steps to improve security against
          cyber-attacks by
        </p>
        <ul>
            <li>Encrypting and taking up your data backup</li>
            <li>Educate staff on cyber security</li>
            <li>Create a security-focused workplace culture</li>
            <li>Create a security-focused workplace culture</li>
            <li>Secure sensitive data first</li>
        </ul>
      </Container>
      <Footer />
    </>
  );
}

export default CyberSecurity;
