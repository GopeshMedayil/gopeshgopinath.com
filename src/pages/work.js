import React, { Fragment } from 'react';
import Layout from '../components/layout.js';
import Typed from 'react-typed';
import project from '../img/projects/project1.jpg';
import mywebsite from '../img/projects/myweb.jpg';
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
                    <div className="view view-tenth item">
                        <div className="project-title">Mongoduo</div>
                        <img src={project} alt="MongoDuo" />
                        <div className="mask">
                            <h2>MongoDuo</h2>
                            <p>A Desktop application developed using electronjs for importing mongodb schemas</p>
                            <a href="https://github.com/GopeshMedayil/MongoDuo" rel="noreferrer noopener" target="_blank" className="info">Read More</a>
                        </div>
                    </div>
                    <div className="view view-tenth item">
                        <div className="project-title">gopeshgopinath.com</div>
                        <img src={mywebsite} alt="gopeshgopinath.com" />
                        <div className="mask">
                            <h2>gopeshgopinath.com</h2>
                            <p>My personal website developed using Gatsbyjs</p>
                            <a href="https://www.gopeshgopinath.com" rel="noreferrer noopener" target="_blank" className="info">Read More</a>
                        </div>
                    </div>
                    <div className="view view-tenth item">
                        <div className="project-title">HandyMan</div>
                        <img src={project} alt="HandyMan" />
                        <div className="mask">
                            <h2>HandyMan</h2>
                            <p>A Desktop application developed using electronjs for running multiple applications(In Progress)</p>
                            <a href="https://github.com/GopeshMedayil/HandyMan" rel="noreferrer noopener" target="_blank" className="info">Read More</a>
                        </div>
                    </div>
                    {/* <div className="item">
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
                    </div> */}



                </div>
            </main>
        </Layout>
    </Fragment>

)