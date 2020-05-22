import React, { Component } from 'react'

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            aadhar: ''
        }
    }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Aadhaar</label>
            <input type="number" id='aadhar' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Check</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register