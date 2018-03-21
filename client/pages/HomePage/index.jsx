import React from 'react';
const Speech = require('spee.ch');
const { Logo } = Speech.Components;

class CustomHomePage extends React.Component {
  render () {
    return (
      <div className={'row row--tall flex-container--column'}>
        <div className={'row row--tall row--padded flex-container--column'}>
          <Logo />
          <h1>THIS IS MY CUSTOM HOMEPAGE!!!</h1>
        </div>
      </div>
    );
  }
};

export default CustomHomePage;
