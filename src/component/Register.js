import React, { Component } from 'react'

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
          aadhaar: '',
          name: ''
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
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="aadhaar">Aadhaar</label>
            <input type="number" id='aadhaar' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register