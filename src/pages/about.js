import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout.js';
import portrait from '../img/portrait.jpg';


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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>


                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Experience</h2>
                </div>
                <div className="job grid-container">
                    <div className="grid-item">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                    <div className="grid-item">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                    <div className="grid-item">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Education</h2>
                </div>
                <div className="experience grid-container">
                    <div className="grid-item">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                    <div className="grid-item">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                    <div className="grid-item">
                        <h3>TCS</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt
                            porro dolores
                    expedita dolor necessitatibus deserunt nemo.</p>
                    </div>
                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Skills</h2>
                </div>
                <div className="skills grid-container">
                    <div className="grid-item">
                        <h3>Html5</h3>

                    </div>
                    <div className="grid-item">
                        <h3>Angular</h3>

                    </div>
                    <div className="grid-item">
                        <h3>Reactjs</h3>
                    </div>
                    <div className="grid-item">
                        <h3>Node.js</h3>
                    </div>
                    <div className="grid-item">
                        <h3>CSS</h3>
                    </div>
                </div>
            </main>
        </Layout>
    </Fragment>

);