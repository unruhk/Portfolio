import React, { useState, useEffect } from "react";
import Impressum from "./Impressum";
import Modal from "./Modal";

const Footer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [impressumData, setImpressumData] = useState({});

  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  useEffect(() => {
    fetch("/impressumData.json")
      .then((res) => res.json())
      .then((data) => {
        setImpressumData(data);
      });
  }, []);

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by{" "}
              <a title="Klaus Unruh" href="/#about">
                Klaus Unruh
              </a>
            </li>
            <li>
              <button onClick={() => setIsOpen(true)}>
                Impressum
              </button>

              <Impressum
                open={isOpen}
                data={impressumData.main}
                onClose={() => setIsOpen(false)}
              />

              {/* <a
                title="Impressum"
                href="#contact"
                onClick={() => setIsOpen(true)} >
                  <i class="fa"></i>
                  <Impressum
                    open={isOpen}
                    data={impressumData.main}
                    onClose={() => setIsOpen(false)}
                  />
                  Impressum
              </a> */}

              {/* <a title="Impressum" href="/impressum">
                Impressum
              </a> */}
            </li>
            <li>

              <button onClick={() => setIsOpen(true)}>
                Datenschutzerklärung
              </button>

              <Modal
                open={isOpen}
                data={impressumData.main}
                onClose={() => setIsOpen(false)}
              />


              {/* <a title="Datenschutzerklärung" href="/privacyPolicy">
                Datenschutzerklärung
              </a> */}
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
