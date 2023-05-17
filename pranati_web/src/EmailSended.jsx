import React from "react";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function EmailSended() {
  return (
    <>
      <Navigationbar />
      <Container className="vh-100">
        <div className="shadow rounded my-5 p-3">
          <h3>Thank you</h3>
          <p>
            We have received your application and will get back to you soon.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default EmailSended;
