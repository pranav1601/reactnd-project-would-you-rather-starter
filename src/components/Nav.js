import React, { Component } from 'react'
import { NavLink,Redirect, Link } from 'react-router-dom'
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
    const {authUser}=this.props
    return (
      
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li style={{color:"red",paddingLeft:"20px"}}>
            Hello, {authUser.name}
          </li>
          <li className="right">
            <Link to='/' onClick={this.logout}>LOGOUT</Link>
          </li>
        </ul>
      </nav>
    )
  }
  }

  function mapStateToProps({authUser,users}){
    return{
      authUser:users[authUser]
    }
  }

  export default connect(mapStateToProps)(Nav)
  