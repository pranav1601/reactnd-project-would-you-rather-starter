import React, { Component } from 'react'
import { NavLink,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authUser'

class Nav extends Component {
  state={
    authUser:'Available'
  }
  logout=(e)=>{
    const {dispatch}=this.props
    dispatch(setAuthedUser(''))
    this.setState({
      authUser:'None'
    })
  }
  render(){
    if(this.state.authUser==='None'){
      return <Redirect to='/'/>
    }
    return (
      
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              leaderboard
            </NavLink>
          </li>
          <li>
            <button onClick={this.logout}>LOGOUT</button>
          </li>
        </ul>
      </nav>
    )
  }
  }

  export default connect()(Nav)
  