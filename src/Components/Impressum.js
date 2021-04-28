import React from 'react'

const Impressum = ({ data }) => {
    if (data) {
        var title = data.title;
        var information = data.information;
        var representative = data.representative;
        var street = data.address.street;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var email = data.email;
        var phone = data.phone;
        var content = data.content;
        var link = data.link;
        var copyright = data.copyright;
        var privacy_1 = data.privacy_1;
        var privacy_2 = data.privacy_2;
        var privacy_3 = data.privacy_3;
        var privacy_source = data.privacy_source;
        var website_generator = data.website_generator;
    }

    return (
        <section id='impressum'>
            <div className='body'>

                <h1>{title}</h1>
                <p>
                    <span>{information}</span>
                    <br />
                    <br />
                    <span>
                        <b>{representative}</b>
                        <br />
                        {street}
                        <br />
                        {zip} {city}, {state}
                        <br />
                    E-Mail:
                    <a href="mailto:mail@kunruh.de"> {email}</a>
                        <br />
                    Mobil: {phone}
                    </span>
                </p>
                <p>
                    <h4>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
                    <span>
                        <b>{representative}</b>
                        <br />
                        {street}
                        <br />
                        {zip} {city}, {state}
                    </span>
                </p>
                <p>
                    <h4>Haftungsausschluss</h4>
                    <h5>Haftung für Inhalte</h5>
                    <span>{content}</span>
                </p>
                <p>
                    <h5>Haftung für Links</h5>
                    <span>{link}</span>
                </p>
                <p>
                    <h5>Urheberrecht</h5>
                    <span>{copyright}</span>
                </p>
                <p>
                    <h5>Datenschutz</h5>
                    <span>{privacy_1}</span>
                    <br />
                    <span>{privacy_2}</span>
                    <br />
                    <span>{privacy_3}</span>
                </p>
                <p>
                    <span>
                        {privacy_source}
                        <a href="https://www.impressum-generator.de/">
                            {website_generator}
                        </a>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Impressum;