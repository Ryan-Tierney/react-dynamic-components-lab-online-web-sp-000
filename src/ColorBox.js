import React, { Component } from 'react';

<<<<<<< HEAD
=======

>>>>>>> de007a3b374c20032ffa9dbfe8ef738d7b60d636
export default class ColorBox extends Component {
  
  render() {
    if(this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }
  
}
