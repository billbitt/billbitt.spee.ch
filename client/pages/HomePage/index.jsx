import React from 'react';
const Speech = require('spee.ch');
const { NavBar } = Speech.Containers;

class CustomHomePage extends React.Component {
  render () {
    return (
      <div className={'row row--tall flex-container--column'}>
        <div className={'row row--tall row--padded flex-container--column'}>
          <NavBar />
          <h1>THIS IS MY CUSTOM HOMEPAGE!!!</h1>
        </div>
      </div>
    );
  }
};

export default CustomHomePage;
