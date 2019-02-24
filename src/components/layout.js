import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/main.scss';

import Header from './header';
import Footer from './footer';

export default ({ children }) => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gopesh Gopinath | Front end developer</title>
        </Helmet>
        <Header />
        {children}
        <Footer />
    </Fragment>
)

