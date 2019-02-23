import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout.js';
import portrait from '../../static/dist/img/portrait.jpg'


export default () => (

    <Fragment>

        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gopesh Gopinath | Front end developer</title>
            </Helmet>
            <main id="about">
                <h1 className="lg-heading">
                    About
            <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">
                    Let me tell you a few things...
        </h2>
                <div className="about-info">
                    <img src={portrait} alt="Gopesh Gopinath" className="bio-image" />

                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod
                            molestiae ipsa
                            autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium,
                    laborum.</p>
                    </div>

                    <div className="job job-1">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>

                    <div className="job job-2">
                        <h3>UST Global</h3>
                        <h6>Senior Software Engineer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>

                    <div className="job job-3">
                        <h3>Experion Technologies</h3>
                        <h6>Software Engineer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                </div>
            </main>
        </Layout>
    </Fragment>

);