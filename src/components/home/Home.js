import React, { Component } from 'react';

import Header from '../header/Header.js';

class Home extends Component {
  state = {
    company: 'CRISYS \u00A9'
  };
  
  componentDidMount() {
    document.title = this.state.company;
  }
  
  render() {
    return (
      <Header company={this.state.company} ></Header>
    );
  }
}

export default Home;
