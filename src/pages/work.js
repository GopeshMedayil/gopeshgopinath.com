import React, { Fragment } from 'react';
import Layout from '../components/layout.js';
import project from '../../static/dist/img/projects/project1.jpg'

export default () => (

    <Fragment>
        <Layout>
            <main id="work">
                <h1 class="lg-heading">
                    My
            <span class="text-secondary">Work</span>
                </h1>
                <h2 class="sm-heading">
                    Check out some of my projects...
        </h2>
                <div class="projects">
                    <div class="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" class="btn-light">
                            <i class="fas fa-eye"></i> Project
                </a>
                        <a href="#" class="btn-dark">
                            <i class="fab fa-github"></i> Github
                </a>
                    </div>
                    <div class="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" class="btn-light">
                            <i class="fas fa-eye"></i> Project
                </a>
                        <a href="#" class="btn-dark">
                            <i class="fab fa-github"></i> Github
                </a>
                    </div>
                    <div class="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" class="btn-light">
                            <i class="fas fa-eye"></i> Project
                </a>
                        <a href="#" class="btn-dark">
                            <i class="fab fa-github"></i> Github
                </a>
                    </div>
                    <div class="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" class="btn-light">
                            <i class="fas fa-eye"></i> Project
                </a>
                        <a href="#" class="btn-dark">
                            <i class="fab fa-github"></i> Github
                </a>
                    </div>
                    <div class="item">
                        <a href="#!">
                            <img src={project} alt="Project" />
                        </a>
                        <a href="#" class="btn-light">
                            <i class="fas fa-eye"></i> Project
                </a>
                        <a class="btn-dark">
                            <i class="fab fa-github"></i> Github
                </a>
                    </div>
                </div>
            </main>
        </Layout>
    </Fragment>

)