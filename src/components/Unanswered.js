import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/users'


class Unanswered extends Component{
    state={
        selectedOption:''
    }
    onSubmitAnswer=(e)=>{
        e.preventDefault()
        const {dispatch,id,authUser}=this.props
        if(this.state.selectedOption!==''){
            dispatch(handleSaveQuestionAnswer(authUser,id,this.state.selectedOption))
        }
        
    }
    onChangeAnswer=(e)=>{
        this.setState({
            selectedOption: e.target.value
          });
    }
    render(){
        const {question,user}=this.props
        
        const{
            timestamp,
            optionOne,
            optionTwo
        }=question

        return(
            <div className='question'>
                <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className='avatar'
                />
                <div className='question-info'>
                    <div>
                        <div>{formatDate(timestamp)}</div>
                        <span className="author">{user.name} asks:</span>
                    </div>
                </div>
                <div className="center" style={{flexDirection:"column"}}>
                    <h2>Would You Rather</h2>
                    <form onSubmit={this.onSubmitAnswer} style={{flexDirection:"column"}}>
                        <label style={{fontSize:"large"}}> 
                            <input type="radio" 
                                value="optionOne"
                                checked={this.state.selectedOption==="optionOne"}
                                onChange={this.onChangeAnswer}/>{optionOne.text}
                        </label>
                        <p style={{color:"red", fontWeight:"bold"}}>OR</p>
                        <label style={{fontSize:"large"}}>
                            <input 
                                type="radio" 
                                value="optionTwo"
                                checked={this.state.selectedOption==="optionTwo"}
                                onChange={this.onChangeAnswer}/>{optionTwo.text}
                        </label>
                        <br/>
                        <button className="btn" type="submit">Submit Option</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({authUser,users,questions},{id}){
    const question=questions[id]

    return{
        authUser,
        user:users[question.author],
        question:question?formatQuestion(question):null
    }

}

export default connect(mapStateToProps)(Unanswered)