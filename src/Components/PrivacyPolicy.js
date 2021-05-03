import React from 'react'

const PrivacyPolicy = ({ data }) => {
    if (data) {
        var title = data.title;
        var date = data.date;
        var url = data.url;
        var information = data.information;
        var representative = data.representative;
        var street = data.address.street;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var email = data.email;
        var phone = data.phone;

        var chapter1_1 = data.chapter1_1;
        var chapter1_2 = data.chapter1_2;
        var chapter1_3 = data.chapter1_3;

        var chapter2_1 = data.chapter2_1;

        var chapter3_1_1 = data.chapter3_1_1;
        var chapter3_1_2 = data.chapter3_1_2;
        var chapter3_2_1 = data.chapter3_2_1;
        var chapter3_2_listItem_1 = data.chapter3_2_listItem_1;
        var chapter3_2_listItem_2 = data.chapter3_2_listItem_2;
        var chapter3_2_listItem_3 = data.chapter3_2_listItem_3;
        var chapter3_2_listItem_4 = data.chapter3_2_listItem_4;
        var chapter3_2_listItem_5 = data.chapter3_2_listItem_5;
        var chapter3_2_listItem_6 = data.chapter3_2_listItem_6;
        var chapter3_2_listItem_7 = data.chapter3_2_listItem_7;
        var chapter3_2_listItem_8 = data.chapter3_2_listItem_8;
        var chapter3_2_listItem_9 = data.chapter3_2_listItem_9;
        var chapter3_2_listItem_10 = data.chapter3_2_listItem_10;
        var chapter3_2_2 = data.chapter3_2_2;
        var chapter3_2_3 = data.chapter3_2_3;
        var chapter3_2_4 = data.chapter3_2_4;

        var chapter3_3_1 = data.chapter3_3_1;
        var chapter3_3_2 = data.chapter3_3_2;
        var chapter3_3_3 = data.chapter3_3_3;
        var chapter3_3_4 = data.chapter3_3_4;
        var chapter3_3_listItem_1 = data.chapter3_3_listItem_1;
        var chapter3_3_listItem_2 = data.chapter3_3_listItem_2;
        var chapter3_3_listItem_3 = data.chapter3_3_listItem_3;
        var chapter3_3_listItem_4 = data.chapter3_3_listItem_4;
        var chapter3_3_5 = data.chapter3_3_5;
        var chapter3_3_6 = data.chapter3_3_6;

        var chapter3_4_1 = data.chapter3_4_1;
        var chapter3_4_2 = data.chapter3_4_2;
        var chapter3_4_3 = data.chapter3_4_3;

        var chapter3_5_1 = data.chapter3_5_1;
        var chapter3_5_2 = data.chapter3_5_2;
        var chapter3_5_3 = data.chapter3_5_3;
        var chapter3_5_4 = data.chapter3_5_4;
        var chapter3_5_5 = data.chapter3_5_5;

        var chapter3_6_1 = data.chapter3_6_1;
        var chapter3_6_2 = data.chapter3_6_2;
        var chapter3_6_3 = data.chapter3_6_3;
        var chapter3_6_4 = data.chapter3_6_4;
        var chapter3_6_5 = data.chapter3_6_5;

        var chapter3_7_1 = data.chapter3_7_1;
        var chapter3_7_2 = data.chapter3_7_2;

        var chapter3_8_1 = data.chapter3_8_1;
        var chapter3_8_2 = data.chapter3_8_2;
        var chapter3_8_3 = data.chapter3_8_3;

        var chapter4_1 = data.chapter4_1;
        var chapter4_2 = data.chapter4_2;

        var chapter5_1 = data.chapter5_1;
        var chapter5_2 = data.chapter5_2;
        var chapter5_1_1 = data.chapter5_1_1;
        var chapter5_1_2 = data.chapter5_1_2;
        var chapter5_1_3 = data.chapter5_1_3;
        var chapter5_1_3_listItem_1 = data.chapter5_1_3_listItem_1;
        var chapter5_1_3_listItem_2 = data.chapter5_1_3_listItem_2;
        var chapter5_1_3_listItem_3 = data.chapter5_1_3_listItem_3;
        var chapter5_1_3_listItem_4 = data.chapter5_1_3_listItem_4;
        var chapter5_1_3_listItem_5 = data.chapter5_1_3_listItem_5;
        var chapter5_1_3_listItem_6 = data.chapter5_1_3_listItem_6;
        var chapter5_1_3_listItem_7 = data.chapter5_1_3_listItem_7;
        var chapter5_1_3_listItem_8 = data.chapter5_1_3_listItem_8;
        var chapter5_1_4 = data.chapter5_1_4;

        var chapter5_2_1 = data.chapter5_2_1;
        var chapter5_2_2 = data.chapter5_2_2;
        var chapter5_2_3 = data.chapter5_2_3;

        var chapter5_3_1 = data.chapter5_3_1;
        var chapter5_3_2 = data.chapter5_3_2;
        var chapter5_3_3 = data.chapter5_3_3;
        var chapter5_3_3_listItem_1 = data.chapter5_3_3_listItem_1;
        var chapter5_3_3_listItem_2 = data.chapter5_3_3_listItem_2;
        var chapter5_3_3_listItem_3 = data.chapter5_3_3_listItem_3;
        var chapter5_3_3_listItem_4 = data.chapter5_3_3_listItem_4;
        var chapter5_3_3_listItem_5 = data.chapter5_3_3_listItem_5;
        var chapter5_3_3_listItem_6 = data.chapter5_3_3_listItem_6;
        var chapter5_3_4 = data.chapter5_3_4;

        var chapter5_4_1 = data.chapter5_4_1;
        var chapter5_4_2 = data.chapter5_4_2;
        var chapter5_4_3 = data.chapter5_4_3;
        var chapter5_4_3_listItem_1 = data.chapter5_4_3_listItem_1;
        var chapter5_4_3_listItem_2 = data.chapter5_4_3_listItem_2;
        var chapter5_4_3_listItem_3 = data.chapter5_4_3_listItem_3;
        var chapter5_4_3_listItem_4 = data.chapter5_4_3_listItem_4;

        var chapter5_5_1 = data.chapter5_5_1;
        var chapter5_5_2 = data.chapter5_5_2;
        var chapter5_5_3 = data.chapter5_5_3;
        var chapter5_5_3_listItem_1 = data.chapter5_5_3_listItem_1;
        var chapter5_5_3_listItem_2 = data.chapter5_5_3_listItem_2;
        var chapter5_5_4 = data.chapter5_5_4;

        var chapter5_6_1 = data.chapter5_6_1;
        var chapter5_6_2 = data.chapter5_6_2;
        var chapter5_6_3 = data.chapter5_6_3;
        var chapter5_6_4 = data.chapter5_6_4;
        var chapter5_6_5 = data.chapter5_6_5;

        var chapter5_7_1 = data.chapter5_7_1;
        var chapter5_7_2 = data.chapter5_7_2;

        var chapter5_8_1 = data.chapter5_8_1;

        var chapter5_9_1 = data.chapter5_9_1;

        var chapter6_1 = data.chapter6_1;
        var chapter6_2 = data.chapter6_2;
        var chapter6_3 = data.chapter6_3;
        var chapter6_4 = data.chapter6_4;

        var chapter7_1 = data.chapter7_1;
        var chapter7_2 = data.chapter7_2;
        var chapter7_3 = data.chapter7_3;
        var chapter7_4 = data.chapter7_4;

        var chapter8_1 = data.chapter8_1;
    }

    return (
        <section id="impressum">
            <div className="body">
                <h1>{title}</h1>
                <p>{date}</p>
                <p>
                    Die nachfolgende Datenschutzerklärung gilt für die Nutzung unseres Online-Angebots
                    <a href="https://kunruh.de/"> {url} </a>
                    (nachfolgend „Website“).
                </p>
                <p>{information}</p>
                <p>
                    <h4>1 Verantwortlicher</h4>
                    <p>{chapter1_1}</p>
                    <p>
                        <b>{representative}</b>
                    , {street}, {zip} {city}
                    </p>
                    <p>{chapter1_2}</p>
                    <p>{chapter1_3}</p>
                </p>
                <p>
                    <h4>2 Allgemeine Zwecke der Verarbeitung</h4>
                    <p>{chapter2_1}</p>
                </p>
                <p>
                    <h4>3 Welche Daten wir verwenden und warum</h4>
                    <h5>3.1 Hosting</h5>
                    <p>{chapter3_1_1}</p>
                    <p>{chapter3_1_2}</p>

                    <h5>3.2 Zugriffsdaten</h5>
                    <p>
                        {chapter3_2_1}
                        <ul className="list-item">
                            <li>{chapter3_2_listItem_1}</li>
                            <li>{chapter3_2_listItem_2}</li>
                            <li>{chapter3_2_listItem_3}</li>
                            <li>{chapter3_2_listItem_4}</li>
                            <li>{chapter3_2_listItem_5}</li>
                            <li>{chapter3_2_listItem_6}</li>
                            <li>{chapter3_2_listItem_7}</li>
                            <li>{chapter3_2_listItem_8}</li>
                            <li>{chapter3_2_listItem_9}</li>
                            <li>{chapter3_2_listItem_10}</li>
                        </ul>
                    </p>
                    <p>{chapter3_2_2}</p>
                    <p>{chapter3_2_3}</p>
                    <p>{chapter3_2_4}</p>

                    <h5>3.3 Cookies</h5>
                    <p>{chapter3_3_1}</p>
                    <p>{chapter3_3_2}</p>
                    <p>{chapter3_3_3}</p>
                    <p>
                        {chapter3_3_4}
                        <ul className="list-item">
                            <li>{chapter3_3_listItem_1}</li>
                            <li>{chapter3_3_listItem_2}</li>
                            <li>{chapter3_3_listItem_3}</li>
                            <li>{chapter3_3_listItem_4}</li>
                        </ul>
                    </p>
                    <p>{chapter3_3_5}</p>
                    <p>{chapter3_3_6}</p>

                    <h5>3.4 Daten zur Erfüllung unserer vertraglichen Pflichten</h5>
                    <p>{chapter3_4_1}</p>
                    <p>{chapter3_4_2}</p>
                    <p>{chapter3_4_3}</p>

                    <h5>3.5 Nutzerkonto</h5>
                    <p>{chapter3_5_1}</p>
                    <p>{chapter3_5_2}</p>
                    <p>{chapter3_5_3}</p>
                    <p>{chapter3_5_4}</p>
                    <p>{chapter3_5_5}</p>

                    <h5>3.6 Newsletter</h5>
                    <p>{chapter3_6_1}</p>
                    <p>{chapter3_6_2}</p>
                    <p>{chapter3_6_3}</p>
                    <p>{chapter3_6_4}</p>
                    <p>{chapter3_6_5}</p>

                    <h5>3.7 Produktempfehlungen</h5>
                    <p>{chapter3_7_1}</p>
                    <p>{chapter3_7_2}</p>

                    <h5>3.8 E-Mail Kontakt</h5>
                    <p>{chapter3_8_1}</p>
                    <p>{chapter3_8_2}</p>
                    <p>{chapter3_8_3}</p>
                </p>
                <p>
                    <h4>4 Speicherdauer</h4>
                    <p>{chapter4_1}</p>
                    <p>{chapter4_2}</p>
                </p>
                <p>
                    <h4>5 Ihre Rechte als von der Datenverarbeitung Betroffener</h4>
                    <p>{chapter5_1}</p>
                    <p>{chapter5_2}</p>

                    <h5>5.1 Recht auf Bestätigung und Auskunft</h5>
                    <p>{chapter5_1_1}</p>
                    <p>{chapter5_1_2}</p>

                    <p>
                        {chapter5_1_3}
                        <ol className="list-item-num">
                            <li>{chapter5_1_3_listItem_1}</li>
                            <li>{chapter5_1_3_listItem_2}</li>
                            <li>{chapter5_1_3_listItem_3}</li>
                            <li>{chapter5_1_3_listItem_4}</li>
                            <li>{chapter5_1_3_listItem_5}</li>
                            <li>{chapter5_1_3_listItem_6}</li>
                            <li>{chapter5_1_3_listItem_7}</li>
                            <li>{chapter5_1_3_listItem_8}</li>
                        </ol>
                    </p>
                    <p>{chapter5_1_4}</p>

                    <h5>5.2 Recht auf Berichtigung</h5>
                    <p>{chapter5_2_1}</p>
                    <p>{chapter5_2_2}</p>
                    <p>{chapter5_2_3}</p>

                    <h5>5.3 Recht auf Löschung („Recht auf Vergessenwerden</h5>
                    <p>{chapter5_3_1}</p>
                    <p>{chapter5_3_2}</p>
                    <p>
                        {chapter5_3_3}
                        <ol className="list-item-num">
                            <li>{chapter5_3_3_listItem_1}</li>
                            <li>{chapter5_3_3_listItem_2}</li>
                            <li>{chapter5_3_3_listItem_3}</li>
                            <li>{chapter5_3_3_listItem_4}</li>
                            <li>{chapter5_3_3_listItem_5}</li>
                            <li>{chapter5_3_3_listItem_6}</li>
                        </ol>
                    </p>
                    <p>{chapter5_3_4}</p>

                    <h5>5.4 Recht auf Einschränkung der Verarbeitung</h5>
                    <p>{chapter5_4_1}</p>
                    <p>{chapter5_4_2}</p>
                    <p>
                        {chapter5_4_3}
                        <ol className="list-item-num">
                            <li>{chapter5_4_3_listItem_1}</li>
                            <li>{chapter5_4_3_listItem_2}</li>
                            <li>{chapter5_4_3_listItem_3}</li>
                            <li>{chapter5_4_3_listItem_4}</li>
                        </ol>
                    </p>

                    <h5>5.5 Recht auf Datenübertragbarkeit</h5>
                    <p>{chapter5_5_1}</p>
                    <p>{chapter5_5_2}</p>
                    <p>
                        {chapter5_5_3}
                        <ol className="list-item-num">
                            <li>{chapter5_5_3_listItem_1}</li>
                            <li>{chapter5_5_3_listItem_2}</li>
                        </ol>
                    </p>
                    <p>{chapter5_5_4}</p>

                    <h5>5.6 Widerspruchsrecht</h5>
                    <p>{chapter5_6_1}</p>
                    <p>{chapter5_6_2}</p>
                    <p>{chapter5_6_3}</p>
                    <p>{chapter5_6_4}</p>
                    <p>{chapter5_6_5}</p>

                    <h5>5.7 Automatisierte Entscheidungen einschließlich Profiling</h5>
                    <p>{chapter5_7_1}</p>
                    <p>{chapter5_7_2}</p>

                    <h5>5.8 Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h5>
                    <p>{chapter5_8_1}</p>

                    <h5>5.9 Recht auf Beschwerde bei einer Aufsichtsbehörde</h5>
                    <p>{chapter5_9_1}</p>
                </p>
                <p>
                    <h4>6 Datensicherheit</h4>
                    <p>{chapter6_1}</p>
                    <p>{chapter6_2}</p>
                    <p>{chapter6_3}</p>
                    <p>{chapter6_4}</p>
                </p>
                <p>
                    <h4>7 Weitergabe von Daten an Dritte, keine Datenübertragung ins Nicht-EU-Ausland</h4>
                    <p>{chapter7_1}</p>
                    <p>{chapter7_2}</p>
                    <p>{chapter7_3}</p>
                    <p>{chapter7_4}</p>
                </p>
                <p>
                    <h4>8 Datenschutzbeauftragter</h4>
                    <p>{chapter8_1}</p>
                    <p>
                        E-Mail:
                        <a href="mailto:mail@kunruh.de"> {email}</a>
                    </p>
                </p>
            </div>
        </section>
    )
}

export default PrivacyPolicy