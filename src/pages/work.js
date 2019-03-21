import React, { Fragment } from 'react';
import Layout from '../components/layout.js';
import Typed from 'react-typed';
import project from '../img/projects/project1.jpg';
export default () => (

    <Fragment>
        <Layout>
            <main id="work">
                <h1 className="lg-heading">
                    My
            <span className="text-secondary">Work</span>
                </h1>
                <h2 className="sm-heading">
                    <Typed
                        strings={['Check out some of my projects...']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />

                </h2>
                <div className="projects">
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> MongoDuo
                </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> HandyMan
                </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                </a>
                    </div>



                </div>
            </main>
        </Layout>
    </Fragment>

)