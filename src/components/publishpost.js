import React from 'react'
import Form from 'react-bootstrap/Form'
import Layout from './Layout';
import Button from 'react-bootstrap/Button'



export default function Publishpost() {
    return (
        <Layout>
            <div id="formcontainer">
                <div className="field">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label><span>Title</span></Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label><span>post</span></Form.Label>
                            <Form.Control as="select" multiple>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Form.Control>
                        </Form.Group>


                        <Button variant="secondary">preview</Button>

                        <Button variant="primary" type="submit">
                            publish
                         </Button>

                    </Form>
                    
                    
                </div>
            </div>
        </Layout>
    )
}
