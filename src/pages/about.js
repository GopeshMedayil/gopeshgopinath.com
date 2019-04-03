import React, { Fragment } from 'react';
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet';
import Typed from 'react-typed';
import Layout from '../components/layout.js';
import portrait from '../img/portrait.jpg';
import { withPrefix } from 'gatsby';


export default (props) => (

    <Fragment>

        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gopesh Gopinath | Front end developer</title>
            </Helmet>
            <main id="about">
                <h1 className="lg-heading">
                    About
            <span className="text-secondary"> Me</span>
                </h1>
                <h2 className="sm-heading">
                    <Typed
                        strings={[' Let me tell you a few things...']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />

                </h2>
                <div className="about-info">
                    <img src={portrait} alt="Gopesh Gopinath" className="bio-image" />

                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>
                            I am a Fullstack Javascript Engineer based in Kerala,India. I have relevant experience in various web technologies like Angular,React,Node.js.
                            Currently I work with TCS @ Kochi,India. I enjoy learning new technologies and use them to develop fast, accessible, responsive user experiences.
                        </p>
                    </div>


                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Experience</h2>
                </div>
                <div className="job grid-container">
                    {props.data.dataJson.experiences.map((item, key) =>
                        <div key={key} className="grid-item">
                            <h3><span className="text-secondary">{item.company} </span>({item.years})</h3>
                            <h4>{item.designation}</h4>
                            <p>{item.desc}</p>
                        </div>
                    )}


                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Education</h2>
                </div>
                <div className="experience grid-container">
                    {props.data.dataJson.education.map((item, key) =>
                        <div key={key} className="grid-item">
                            <h3>{item.degree}</h3>
                            <h6>{item.institution}</h6>
                            {/* <p>{item.desc}</p> */}
                        </div>
                    )}

                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Skills</h2>
                </div>
                <div className="skills grid-container">
                    {props.data.dataJson.skills.map((item, key) =>
                        <div key={key} className="grid-item">
                            <img className="skill-image" src={withPrefix(`/images/${item.image}`)} style={{ width: '20px' }} alt="Logo" />

                            <h3>{item.name}</h3>
                        </div>
                    )}

                </div>
            </main>
        </Layout>
    </Fragment>


);

export const IndexQuery = graphql`
  query IndexQuery {
    dataJson {
        name,
        experiences{
            company,
            years,
            designation,
            desc
        },
        education{
            degree,
            institution
        },
        skills{
            name,
            image
        }

    }
  }
`;