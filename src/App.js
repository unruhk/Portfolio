import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import Impressum from "./Components/Impressum";

import "./App.css";
import Logo from "./Components/Logo";
import FooterPrivacy from "./Components/FooterPrivacy";
import PrivacyPolicy from "./Components/PrivacyPolicy";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [impressumData, setImpressumData] = useState({});
  const [privacyPolicyData, setprivacyPolicyData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  useEffect(() => {
    fetch("/impressumData.json")
      .then((res) => res.json())
      .then((data) => {
        setImpressumData(data);
      });
  }, []);

  useEffect(() => {
    fetch("/privacyPolicyData.json")
      .then((res) => res.json())
      .then((data) => {
        setprivacyPolicyData(data);
      });
  }, []);

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            <Testimonials data={resumeData.testimonials} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
          </Route>
          <Route path='/impressum'>
            <Logo />
            <Impressum data={impressumData.main} />
            <FooterPrivacy />
          </Route>
          <Route path='/privacyPolicy'>
            <Logo />
            <PrivacyPolicy data={privacyPolicyData.main} />
            <FooterPrivacy />
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default App;
