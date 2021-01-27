import React,{Fragment,useState} from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import './App.css';
import User from './components/users/User';
import { Alert } from './components/layout/Alert';
import About from './components/pages/About';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';

import GithubState from './context/github/GithubState';

import AlertState from './context/alert/AlertState';

const App = () => {  //we can write component in place of React.Component if we add ,{Component} in import 

  // for class based app component
/*   state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }   */

  /* async componentDidMount(){
 
    this.setState({loading:true});
    
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data, loading: false});
  };  */

    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar title='Github-Finder' icon='fab fa-github'/>
        <div className='container'>
        <Alert alert={alert} />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/users/:login' component={User} />
            <Route component={NotFound} />
        </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );

  
}

export default App;
