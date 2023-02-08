// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {name: '', last: '', isSubmitted: false, firstname: '', lastname: ''}

  noName = event => {
    if (event.target.value === '') {
      this.setState({name: 'Required'})
    } else {
      this.setState({name: ''})
    }
  }

  onNameChange = event => {
    this.setState({firstname: event.target.value})
  }

  onLastChange = event => {
    this.setState({lastname: event.target.value})
  }

  noLast = event => {
    if (event.target.value === '') {
      this.setState({last: 'Required'})
    } else {
      this.setState({last: ''})
    }
  }

  submitted = () => {
    this.setState(prevState => ({
      isSubmitted: !prevState.isSubmitted,
      firstname: '',
      lastname: '',
    }))
  }

  submitting = () => {
    const {firstname, lastname} = this.state
    if (firstname === '') {
      this.setState({name: 'Required'})
    }
    if (lastname === '') {
      this.setState({last: 'Required'})
    }
    if (firstname !== '' && lastname !== '') {
      this.setState(prevState => ({isSubmitted: !prevState.isSubmitted}))
    }
  }

  akhil = () => (
    <div className="tot1">
      <div className="main">
        <img
          alt="success"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.submitted}>
          Submit Another Response
        </button>
      </div>
    </div>
  )

  registration = () => {
    const {name, last, firstname, lastname} = this.state
    return (
      <div className="tot">
        <h1 className="h1">Registration</h1>
        <div className="main">
          <label htmlFor="first">FIRST NAME</label>
          <br />
          <input
            value={firstname}
            onBlur={this.noName}
            id="first"
            placeholder="First name"
            onChange={this.onNameChange}
          />
          <br />
          <p>{name}</p>
          <label htmlFor="last">LAST NAME</label>
          <br />
          <input
            onChange={this.onLastChange}
            value={lastname}
            onBlur={this.noLast}
            id="last"
            placeholder="Last name"
          />
          <br />
          <p>{last}</p>
          <button className="btn1" type="button" onClick={this.submitting}>
            Submit
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isSubmitted} = this.state
    return <div>{isSubmitted ? this.akhil() : this.registration()}</div>
  }
}

export default RegistrationForm
