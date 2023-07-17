// form.js file
import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         feedback: ''
      }
    }
    nameHandler = (event) =>{
        this.setState ({
            username: event.target.value,
        })
    }
    feedbackHandler = (event) =>{
        this.setState ({
            feedback: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.feedback}`)
        event.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Name</label>
        <input 
        type='text'
        value={this.state.username}
        onChange={this.nameHandler}
        />
        <br/>
        <label>Write your feedback</label>
        <textarea
            value={this.state.feedback}
            onChange={this.feedbackHandler}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
