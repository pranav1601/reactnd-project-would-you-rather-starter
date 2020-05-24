import React, { Component,Fragment } from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>App
        <Dashboard/>
      </div>
      
      
    )
  }
}


function mapStateToProps({authUser}){
  return{
    loading:authUser===null
  }
}

export default connect(mapStateToProps)(App)