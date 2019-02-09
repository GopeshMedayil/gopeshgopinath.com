import React from 'react';
import Header from './header';
import Footer from './footer';

export default ({ children }) => (
    <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
)

