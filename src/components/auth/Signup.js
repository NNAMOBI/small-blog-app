import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Layout from '../Layout';
// import Layout from '../Layout';
import Axios from 'axios'



class Signup extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    
    e.preventDefault()
    if (this.state.password === this.state.confirmPassword) {
      console.log(this.state)
      const { confirmPassword, ...args } = this.state;
   Axios.post('http://localhost:3500/signup', args)
      .then((response) => {
        console.log(response)
        // if (res.status) {
         
        // }

      
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      alert('password does not match confirm password');
    }
  }
  
  
    
  
  render() {

  return (
       <Layout>
    <div id="formcontainer">
      <div className="fieldset">
        <h4>CREATE AN ACCOUNT</h4>

          <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Fullname</Form.Label>
              <Form.Control type="fullname" name="fullname" value={this.state.fullname} placeholder="Enter  your fullname" required onChange={this.handleChange} />
          </Form.Group>


          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} required onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" required onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={this.state.confirmPassword} placeholder="confirm your Password" required onChange={this.handleChange} />
          </Form.Group>


          {['checkbox'].map(type => (
            <div key={type} className="mb-3">
              <Form.Check type={type} id={`check-api-${type}`}>
                <Form.Check.Input type={type} isValid />
                <Form.Check.Label>show password</Form.Check.Label>
                <Form.Control.Feedback type="valid"></Form.Control.Feedback>
              </Form.Check>
            </div>
          ))}

          <Button variant="primary" size="lg" block  type="submit" >
            Register Now
    </Button>
         
        </Form>
        <p id="login">Already have an account?<a href="/login">Signin</a></p>





      </div>
    </div>
      </Layout >
  )
      }





  

}

export default Signup;