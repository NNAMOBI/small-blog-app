import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
// import Name from './auth/Name'
import Blog from './Blog'
// import Home from './home'
import Blogpost from './blogpost';
// import Home from './home';
import Layout from './Layout'
import Publishpost from './publishpost'





const CustomRouter = () => {
  return (
    <Router>

      <Route path='/' exact component={Layout}></Route>
      <Switch>
      <Route path='/publishpost' component={Publishpost}></Route>
      <Route path='/blogpost' component={Blogpost}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/login' component={Login}></Route>
        <Route path="/blog" component={Blog}></Route>
      </Switch>
    </Router>
  )
}
export default CustomRouter;