import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function DigitalServices() {
  return (
    <Container>
      <h2 className="bg-secondary py-3 text-light my-5 px-3">
        Digital Services
      </h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Row className="my-5 py-3 shadow">
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6BL1gB2-e29W56qt_Go4dOuZ8U2GYwtAXg&usqp=CAU"
                className="w-100"
              />
            </motion.div>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <h3>Web hosting & Email</h3>
            <Placeholder xs={12} bg="info" size="xs" />
            <p>
              When building an online presence, it is important to have a host
              for your website. At Pranati Technologies, we can help you with
              our professional and reliable hosting solutions. We provide the
              best web hosting services and evaluate each vendor and service
              inContaineridually, focusing on the number of monthly data
              transfers, storage, email, and other features required.
            </p>
            <Link to="/WebHostingAndEmail">Read more</Link>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Row className="my-5 py-3 shadow">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <h3>Domain Registration</h3>
            <Placeholder xs={12} bg="info" size="xs" />
            <p>
              Your most valuable asset on the Internet is your domain name. It’s
              more important than your logo or even your company’s mission
              statement. A domain name is a URL associated with a specific
              website, and Pranati technologies offer you some great options
              when making your own. The perfect domain name can help make your
              site more memorable, boost your search engine presence and attract
              new customers to your business.
            </p>
            <Link to="/DomainRegistration">Read more</Link>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Image
                className="w-100"
                src="data:image/jpeg;base64,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"
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Row className="my-5 py-3 shadow">
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Image
                className="w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6mwxqbIf893AdjrYwUeLQ5W0H3y2XkqYTg&usqp=CAU"
              />
            </motion.div>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <h3>Branding Services</h3>
            <Placeholder xs={12} bg="info" size="xs" />
            <p>
              Creating a brand requires careful analysis of your target
              customers and market trends. We need to have a clear idea of how
              and what steps we need to create for your brand. Pranati
              Technologies has a team of professionals who will work with you
              from the start in building your brand. We follow the latest
              strategies, resources and brand management techniques for building
              your brand. We help to meet your needs and increase your
              expectations.
            </p>
            <Link to="/BrandingServices">Read more</Link>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Row className="my-5 py-3 shadow">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <h3>Digital Marketing Services</h3>
            <Placeholder xs={12} bg="info" size="xs" />
            <p>
              As a company that provides digital marketing services, we must
              educate business clients and share some knowledge. We want to take
              your business to the next level by implementing proven online
              marketing services. The digital marketing field integrates several
              marketing methods. Including SEO, SEM, SMM content marketing, and
              email marketing. We can use digital channels such as search
              engines and social media sites to find and connect with new
              customers. At the same time, email and other websites provide a
              means for businesses to communicate with current customers and
              grow their base.
            </p>
            <Link to="/DigitalMarketingServices">Read more</Link>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Image
                className="w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV-JyF2al8u6pAvWB2SymH17Hb6LLrqVZ_w&usqp=CAU"
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Row className="my-5 py-3 shadow">
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Image
                className="w-100"
                src="data:image/jpeg;base64,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"
              />
            </motion.div>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <h3>Search Engine Optimization</h3>
            <Placeholder xs={12} bg="info" size="xs" />
            <p>
              Search engine optimization (SEO) is the process of helping
              customers connect with a business by increasing the visibility of
              the business’s website in search engines. Our team uses modern SEO
              services backed by best practices to increase organic traffic and
              search engine rankings. We combine the foundations of digital
              marketing (our SEO campaigns) with the more advanced areas of
              online marketing (social media, video, email marketing) to
              increase your brand awareness and visibility in your target
              market.
            </p>
            <Link to="/SearchEngineOptimization">Read more</Link>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Row className="my-5 py-3 shadow">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <h3>Social Media Networking</h3>
            <Placeholder xs={12} bg="info" size="xs" />
            <p>
              Social networking is interacting with other people through
              websites and other media to exchange ideas and information.
              Businesses use social networks to promote their products and
              services.
            </p>
            <Link to="/SocialMediaNetworking">Read more</Link>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Image
                className="w-100"
                src="data:image/jpeg;base64,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"
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default DigitalServices;
