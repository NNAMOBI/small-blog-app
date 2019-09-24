import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Layout from '../Layout';
import Axios from 'axios'
// import Layout from '../Layout';


class Login extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      email: " ",
      password: " "

    }
  }

  changeEventHandler = (e) => {
   this.setState({[e.target.name]: e.target.value})
    
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)
    Axios.post('http://localhost:3500/login', this.state)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    }
  
  render(){
  
  return (
   
    <Layout>

      <div id="formcontainer">
        
        <div className="field">
          
      <h4>SIGN IN TO YOUR ACCOUNT</h4>

      <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="formGroupEmail">
              
              <Form.Label>Email address</Form.Label>
              
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.changeEventHandler} value={this.state.email}/>
        </Form.Group>
            <Form.Group controlId="formGroupPassword">
              
              <Form.Label>Password</Form.Label>
              
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.changeEventHandler} value={this.state.password} />
              
        </Form.Group>

        {['checkbox'].map(type => (
          <div key={type} className="mb-3">
            <Form.Check type={type} id={`check-api-${type}`}>

              <Form.Check.Input type={type} isValid />

              <Form.Check.Label>Keep me signed in</Form.Check.Label>

              <Form.Control.Feedback type="valid"></Form.Control.Feedback>
            </Form.Check>
          </div>
        ))}

        <Button variant="primary" size="lg" block type="submit">
          SUBMIT
    </Button>
            
            <p>Forgot your password?</p>
            
      </Form>


</div>
        </div>
        
      </Layout>
    )
  }
}

export default Login;