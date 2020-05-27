import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import DemoQuestion from './DemoQuestion'
import Login from './Login'
import Nav from './Nav'
import Unanswered from './Unanswered'
import Question from './Question'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authUser}=this.props
    return (
      <div>
        {(authUser===null)||(authUser==='')?
          <div>
            <Login/>
          </div>
          :
          <Router>
            <Nav/>
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' component={Question} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
            </div>
          </Router>
          }
        
      </div>
      
      
    )
  }
}


function mapStateToProps({authUser}){
  return{
    authUser,
    loading:authUser===null
  }
}

export default connect(mapStateToProps)(App)