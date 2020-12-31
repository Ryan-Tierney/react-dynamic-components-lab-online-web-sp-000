<<<<<<< HEAD
import React, { Component } from 'react'

=======
//your code here
import React, {Component} from 'react' 
>>>>>>> de007a3b374c20032ffa9dbfe8ef738d7b60d636

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}