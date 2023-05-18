import React from "react";
import Navigationbar from "../components/Navigationbar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

function OttIpvtSolution() {
  return (
    <>
      <Navigationbar />
      <Container className="vh-100 my-5">
        <h3 className="fs-2 text-info">OTT / IPTV Solution</h3>
        <p>
          Pranati Technologies offers a cutting-edge OTT / IPTV solution that
          enables service providers to deliver a superior user experience across
          all major platforms.
        </p>
        <h4 className="fs-4">IPTV / OTT Platform Provides</h4>
        <ul>
          <li>
            <h5 className="fs-6">Scalable</h5>
            <p>
              We provide a complete over-the-top middleware solution for
              delivering TV, VOD, catch-up, DVR and interactive services to
              customers on any IP network. In addition, you can manage your
              entire OTT platform from one location via our cloud or on-premise
              solution.
            </p>
          </li>
          <li>
            <h5 className="fs-6">Multi-Screen Apps</h5>
            <p>
              Our platform can reach any device, making our user base limitless.
              We can get your IPTV/OTT app on all major stores, including smart
              TV, to allow consumers to access the service anywhere. In
              addition, our clients can stream on any device.
            </p>
          </li>
          <li>
            <h5 className="fs-6">Content Delivery Network</h5>
            <p>
              We deliver your content worldwide with speed and quality through
              our global CDN network.
            </p>
          </li>
          <li>
            <h5 className="fs-6">Ingest and Transcode</h5>
            <p>
              With a flexible ingest and transcode platform, We can ingest
              content from any source and transcode it in any format.
            </p>
          </li>
          <li>
            <h5 className="fs-6">Real-Time Analytics</h5>
            <p>
              We help clients manage their subscriptions, billing, content, and
              devices by distributing content to any major platform.
            </p>
          </li>
          <li>
            <h5 className="fs-6">Security</h5>
            <p>
              We support multiple levels of content protection, including
              encryption and digital certificates.
            </p>
          </li>
        </ul>
      </Container>
      <Footer />
    </>
  );
}

export default OttIpvtSolution;
