import React, { Component, Fragment } from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/layout.js';



export default class Contact extends Component {

    render() {
        return (
            <Fragment>

                <Layout>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Gopesh Gopinath | Front end developer</title>
                    </Helmet>
                    <main id="contact">

                        <h2 className="lg-heading">Contact <span className="text-secondary">Me</span></h2>
                        <form className="cf" name="contact" action="/" netlify-honeypot="bot-field" method="POST" data-netlify="true">
                            <div className="half left cf">
                                <p className="hidden" style={{ visibility: "hidden" }}>
                                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                                </p>
                                <input type="text" id="input-name" name="firstname" placeholder="Name" required />
                                <input type="email" id="input-email" name="email" placeholder="Email address" required />
                                <input type="text" id="input-subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="half right cf">
                                <textarea name="message" type="text" id="input-message" placeholder="Message" required></textarea>
                            </div>
                            <input type="submit" value="Submit" id="input-submit" />
                        </form>
                    </main>
                </Layout>
            </Fragment>
        )
    }

}