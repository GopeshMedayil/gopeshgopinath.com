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
                        <form class="cf">
                            <div class="half left cf">
                                <input type="text" id="input-name" placeholder="Name" />
                                <input type="email" id="input-email" placeholder="Email address" />
                                <input type="text" id="input-subject" placeholder="Subject" />
                            </div>
                            <div class="half right cf">
                                <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                            </div>
                            <input type="submit" value="Submit" id="input-submit" />
                        </form>
                    </main>
                </Layout>
            </Fragment>
        )
    }

}