import React from 'react';
const Speech = require('spee.ch');
const { Containers: { NavBar }, Components: { SEO } } = Speech;

class AboutPage extends React.Component {
  render () {
    return (
        <div>
            <SEO pageTitle={'About'} pageUri={'about'} />
            <NavBar />
            <div className='row row--padded'>
                <h3>Welcome to my custom about page!</h3>
                <p>billbitt.spee.ch is a custom implementation of spee.ch</p>
                <p>I used the spee.ch package and modified it with my own custom pages!</p>
            </div>
        </div>
    );
  }
};

export default AboutPage;
