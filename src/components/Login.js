import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authUser'

class Login extends Component{
    state={
        authUser:''
    }
    onChange=(e)=>{
        const user=e.target.value
        this.setState({
            authUser:user
        })
    }
    signInSubmit=(e)=>{
        e.preventDefault()
        const {dispatch}=this.props
        dispatch(setAuthedUser(this.state.authUser))
    }
    render(){
        const {users}=this.props
        return(
            <div>
                <h2>Select a user to sign in:</h2>
                <form onSubmit={this.signInSubmit}>
                    <select onChange={this.onChange} value={this.state.authUser}>
                        {users.map((user)=>(
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <button disabled={this.state.authUser===''}>Sign me in!</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users:Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)