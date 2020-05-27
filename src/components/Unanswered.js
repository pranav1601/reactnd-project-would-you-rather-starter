import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/users'
import {Link,withRouter} from 'react-router-dom'


class Unanswered extends Component{
    state={
        selectedOption:''
    }
    onSubmitAnswer=(e)=>{
        e.preventDefault()
        // console.log('selected',this.state.selectedOption)
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
        const {question}=this.props
        
        const{
            author,
            id,
            timestamp,
            optionOne,
            optionTwo
        }=question

        return(
            <div className='tweet'>
                <img
                src='https://w7.pngwing.com/pngs/931/256/png-transparent-bitstrips-avatar-emoji-graphy-emoticon-avatar-face-heroes-photography.png'
                alt={`Avatar of ${author}`}
                className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <div>{formatDate(timestamp)}</div>
                        <span>{author} asks:</span>
                    </div>
                </div>
                <div className="center" style={{flexDirection:"column"}}>
                    <h2>Would You Rather</h2>
                    <form onSubmit={this.onSubmitAnswer}>
                        <label>
                            <input type="radio" 
                                value="optionOne"
                                checked={this.state.selectedOption==="optionOne"}
                                onChange={this.onChangeAnswer}/>{optionOne.text}
                        </label>
                        <p style={{color:"red", fontWeight:"bold"}}>OR</p>
                        <label>
                            <input 
                                type="radio" 
                                value="optionTwo"
                                checked={this.state.selectedOption==="optionTwo"}
                                onChange={this.onChangeAnswer}/>{optionTwo.text}
                        </label>
                        <button type="submit">Submit Option</button>
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