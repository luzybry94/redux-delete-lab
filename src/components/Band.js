import React, { Component } from 'react';

class Band extends Component {


  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={id => this.props.deleteBand(this.props.band.id)}>Delete</button>
      </div>
    );
  }
};

export default Band;
