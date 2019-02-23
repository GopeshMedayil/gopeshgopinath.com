import React from "react";
import { Helmet } from "react-helmet";
import '../../static/dist/css/main.css';
import Layout from '../components/layout.js';
var FA = require('react-fontawesome');

export default () => (
    <div>
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
            </Helmet>
            <main id="home">
                <h1 className="lg-heading">
                    Gopesh <span className="text-secondary">Gopinath</span>
                </h1>
                <h2 className="sm-heading">
                    Front end developer &hearts; Web !!
        </h2>
                <div className="icons">
                    <a href="https://twitter.com/GopeshMedayil">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/gopesh.gopinath">
                        <FA name="rocket" />
                        {/* <i className="fab fa-facebook fa-2x"></i> */}
                    </a>
                    <a href="www.linkedin.com/in/gopesh-gopinath">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/GopeshMedayil">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </main>
        </Layout>
    </div>
);
