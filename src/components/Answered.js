import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import {Link,withRouter} from 'react-router-dom'


class Answered extends Component{
    

    render(){
        const {question,optionOneSelected,optionTwoSelected,user}=this.props
        
        const{
            author,
            id,
            timestamp,
            optionOne,
            optionTwo
        }=question
        const votesOne=optionOne.votes.length
        const votesTwo=optionTwo.votes.length
        const totalVotes=votesOne+votesTwo
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
                        <span>{user.name} asks:</span>
                    </div>
                </div>
                <div className="center" style={{flexDirection:"column"}}>
                    <h2>Would You Rather</h2>
                    <div className={optionOneSelected?'selected':null}>
                        {optionOneSelected && (<p style={{fontSize:"15px", alignItems:"left", padding:"5px",color:"green"}}>Selected:</p>)}
                        
                        <p style={{padding:"10px"}}>{optionOne.text}</p>
                        <p>{Math.round((votesOne/totalVotes)*100)}%, {votesOne} out of {totalVotes}</p>    
                    </div>
                    <p style={{color:"red", fontWeight:"bold"}}>OR</p>
                    <div className={optionTwoSelected?'selected':null}>
                        
                        {optionTwoSelected && (<p style={{fontSize:"15px", alignItems:"left", padding:"5px",color:"green", fontWeight:"bold"}}>Selected:</p>)}
                        <p>{optionTwo.text}</p>
                        <p>{Math.round((votesTwo/totalVotes)*100)}%, {votesTwo} out of {totalVotes}</p> 
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({authUser,users,questions},{id}){
    const question=questions[id]
    const optionOneSelected=users[authUser].answers[id]==='optionOne'
    const optionTwoSelected=users[authUser].answers[id]==='optionTwo'

    return{
        authUser,
        user:users[question.author],
        question:question?formatQuestion(question):null,
        optionOneSelected,
        optionTwoSelected
    }

}

export default connect(mapStateToProps)(Answered)