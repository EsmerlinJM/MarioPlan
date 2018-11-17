import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import  Navbar  from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SingUp'
import CreatePost from './components/posts/CreatePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/post/:id' component={PostDetails}/>
              <Route path='/signin' component={SignIn}/> 
              <Route path='/signup' component={SignUp} />
              <Route path='/create/post' component={CreatePost} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
