import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({
    title = null,
    description = null,
    image = null,
    pathname = null,
    article = false,
}) => (
        <StaticQuery
            query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
          }
        }
      }
    `}
            render={({
                site: {
                    siteMetadata: {
                        defaultTitle,
                        titleTemplate,
                        defaultDescription,
                        siteUrl,
                        defaultImage,
                    },
                },
            }) => {
                const seo = {
                    title: title || defaultTitle,
                    description: description || defaultDescription,
                    image: `${siteUrl}${image || defaultImage}`,
                    url: `${siteUrl}${pathname || '/'}`,
                };

                return (
                    <>
                        <Helmet title={seo.title} titleTemplate={titleTemplate}>
                            <meta name="description" content={seo.description} />
                            <meta name="image" content={seo.image} />
                        </Helmet>


                    </>
                );
            }}
        />
    );

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
};

export default SEO;