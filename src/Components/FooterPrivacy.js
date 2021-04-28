import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="space">
                <div className="row">
                    <div className="twelve columns">
                        <ul className="copyright">
                            <li>
                                Made by{" "}
                                <a title="Klaus Unruh" href="/#about">
                                    Klaus Unruh
                                </a>
                            </li>
                            <li>
                                <a title="Impressum" href="/impressum">
                                    Impressum
                                </a>
                            </li>
                            <li>
                                <a title="Datenschutzerklärung" href="/privacyPolicy">
                                    Datenschutzerklärung
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="/impressum/#">
                            <i className="icon-up-open"></i>
                        </a>
                    </div> */}
                </div>
            </div>

        </footer>
    );
};

export default Footer;
