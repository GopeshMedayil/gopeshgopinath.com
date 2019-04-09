import React from "react";
import '../styles/main.scss';
import Layout from '../components/layout.js';
import Letter from '../components/letter';
import SEO from '../components/seo';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
export default () => (
    <div>
        <Layout>
            <SEO />
            <main id="home">
                <h1 className="lg-heading letter">
                    <Letter firstName="Gopesh" lastName="Gopinath"></Letter>
                    {/* Gopesh <span className="text-secondary">Gopinath</span> */}
                </h1>
                <h2 className="sm-heading">
                    {/* Front end developer &hearts; Javascript !! */}
                    Full Stack Javascript Developer
        </h2>
                <div className="icons">
                    <a href="https://twitter.com/GopeshMedayil" aria-label="Gopesh Gopinath Twitter">
                        {/* <i className="fab fa-twitter fa-2x"></i> */}
                        <FaTwitter size="2em" />
                    </a>
                    <a href="https://www.facebook.com/gopesh.gopinath" aria-label="Gopesh Gopinath Facebook">
                        <FaFacebook size="2em" />
                        {/* <FA name="rocket" /> */}
                        {/* <i className="fab fa-facebook fa-2x"></i> */}
                    </a>
                    <a href="https://www.linkedin.com/in/gopesh-gopinath" aria-label="Gopesh Gopinath Linkedin">
                        <FaLinkedin size="2em" />
                    </a>
                    <a href="https://github.com/GopeshMedayil" aria-label="Gopesh Gopinath Github">
                        <FaGithub size="2em" />
                    </a>
                </div>
            </main>
        </Layout>
    </div>
);
