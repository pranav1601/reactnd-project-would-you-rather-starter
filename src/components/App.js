import React, { Component,Fragment } from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import DemoQuestion from './DemoQuestion'
import Login from './Login'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authUser}=this.props
    return (
      <div>
        {(authUser===null)?<Login/>:<Dashboard/>}
        
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