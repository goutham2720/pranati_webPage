import React from "react";
import Navigationbar from "../components/Navigationbar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

function BigDataAnalysisAndMining() {
  return (
    <>
      <Navigationbar />
      <Container className="vh-100 my-5">
        <h3 className="fs-2 text-info">Big Data Analysis and Mining</h3>
        <p>
          Data mining is a process that offers a new way to look at data. At
          Pranati Technologies, we offer analytic services to researchers and
          corporations representing various industries, including automotive
          manufacturing, financial services, etc.
        </p>
        <p>
          Data mining is a process for making predictions by analyzing and
          combining data from many sources. Data mining uses statistical
          techniques to search large databases for patterns and relationships
          that may use to make valid predictions.
        </p>
        <p>
          Pranati Technologies has extensive experience in big data analytics
          and visualization. We understand the different layers of big data and
          how to integrate them to create a complete picture of your data. Our
          team will create a foundation for your analytics, allowing you to
          focus on specific patterns and trends.
        </p>
        <p>
          Our company offers data analysis services, from data mining and big
          data analytics to theoretical framework creation.
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default BigDataAnalysisAndMining;
