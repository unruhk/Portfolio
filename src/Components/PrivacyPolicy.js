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
                    {chapter2_1}
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
                </p>
            </div>
        </section>
    )
}

export default PrivacyPolicy