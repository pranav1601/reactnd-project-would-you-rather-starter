import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'
import Question from './Question'
import NotFound from './NotFound'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authUser}=this.props
    return (
      <div>
        <Router>
          
            {(authUser===null)||(authUser==='')?
          <div>
            <Login/>
          </div>
          :
            <Fragment>
            <Nav/>
            <div>
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={Question} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard}/>
                <Route path='/notfound' exact component={NotFound} />
                <Route component={NotFound}/>
              </Switch>
            </div>
            </Fragment>
            }
          
        
          </Router>
        
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