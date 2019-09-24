import React, { Component } from 'react'
import Layout from '../components/Layout'



const Name = (props) =>{
    return (
 <h4> My name is {props.name} i am {props.age}</h4>
 )
}


export default class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'people':[
          {
          'name':'Mr Vicor',
          'age':890
          },
           {
          'name':'Mr Seun',
          'age':-10
          },
           {
          'name':'Mrs Amarachi',
          'age':26
          }
          ]
        }
      }
     
    render() {
        return (
            <Layout>
            <div>
                {this.state.people.map((x)=>{
           return <Name name ={x.name} age={x.age} ></Name>
  })}

                
            </div>
           </Layout>
        )
    }
}



