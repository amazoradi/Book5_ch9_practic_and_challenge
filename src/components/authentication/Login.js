import React, { Component } from "react"


export default class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    rememberMe: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  // Simplistic handler for login submit
  handleLogin = (e) => {
    e.preventDefault()

    sessionStorage.setItem(
      "credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        // rememberMe: this.state.rememberMe
      })
    )
  }




  handleRemember = (e) => {
    e.preventDefault()

    localStorage.setItem(
      "rememberCredentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    )
  }

  toggleCheckbox = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = true
    this.setState(stateToChange)
  } 

  
  handleCheck = (e) => {
    if (this.state.rememberMe === false) {
      e.preventDefault()
      sessionStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          rememberMe: this.state.rememberMe
        }))
    } else {
      e.preventDefault()
      localStorage.setItem(
        "rememberCredentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          rememberMe: this.state.rememberMe
        })
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleCheck} className="list">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail">
          Email address
                </label>
        <input onChange={this.handleFieldChange} type="email"
          id="email"
          placeholder="Email address"
          required="" autoFocus="" />
        <label htmlFor="inputPassword">
          Password
                </label>
        <input onChange={this.handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" />
        <label htmlFor="rememberMe">
          Remember Me
          </label>
        <input
          name="rememberMe"
          type="checkbox"
          id="rememberMe"
          checked={this.state.rememberMe}
          onChange={this.toggleCheckbox}
        />
        <button type="submit">
          Sign in
                </button>
      </form>
    )
  }
}

// When the customer logs in and the checkbox is not checked, then save their information to session storage
// When the customer logs in and the checkbox is checked, then save their information to local storage