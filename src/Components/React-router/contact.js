import React, { Component } from 'react';
import { Prompt } from 'react-router-dom'
class contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Comfirmed: false
    }
  }

  onClick = () => {
    this.setState({
      Comfirmed: !this.state.Comfirmed,
    })
  }

  render() {
    return (
      <div>
        contact
      </div>
    )
  }
}

export default contact;