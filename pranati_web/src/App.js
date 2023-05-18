import "./App.css";
import React from "react";
import HomePage from "./HomePage";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import EmailSended from "./EmailSended";

import DomainRegistration from "./servicepages/DomainRegistration";

import WebHostingAndEmail from "./servicepages/WebHostingAndEmail";
import BigDataAnalysisAndMining from "./servicepages/BigDataAnalysisAndMining";
import DigitalMarketingServices from "./servicepages/DigitalMarketingServices";
import MobileAppDevelopment from "./servicepages/MobileAppDevelopment";
import OttIpvtSolution from "./servicepages/OttIpvtSolution";
import SearchEngineOptimization from "./servicepages/SearchEngineOptimization";
import SocialMediaNetworking from "./servicepages/SocialMediaNetworking";
import WebAppTechnologyAndDevelopment from "./servicepages/WebAppTechnologyAndDevelopment";
import CyberSecurity from "./servicepages/CyberSecurity";

import BrandingServices from "./servicepages/BrandingServices";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/EmailSended" element={<EmailSended />} />
        <Route path="/BrandingServices" element={<BrandingServices />} />
        <Route path="/DomainRegistration" element={<DomainRegistration />} />
        <Route path="/WebHostingAndEmail" element={<WebHostingAndEmail />} />
        <Route
          path="/BigDataAnalysisAndMining"
          element={<BigDataAnalysisAndMining />}
        />
        <Route
          path="/DigitalMarketingServices"
          element={<DigitalMarketingServices />}
        />
        <Route
          path="/MobileAppDevelopment"
          element={<MobileAppDevelopment />}
        />
        <Route path="/OttIpvtSolution" element={<OttIpvtSolution />} />
        <Route
          path="/SearchEngineOptimization"
          element={<SearchEngineOptimization />}
        />
        <Route
          path="/SocialMediaNetworking"
          element={<SocialMediaNetworking />}
        />
        <Route
          path="/WebAppTechnologyAndDevelopment"
          element={<WebAppTechnologyAndDevelopment />}
        />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
      </Routes>
    </div>
  );
}

export default App;
