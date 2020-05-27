import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import {Link,withRouter} from 'react-router-dom'


class Answered extends Component{
    

    render(){
        const {question,optionOneSelected,optionTwoSelected}=this.props
        
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
        console.log('hello1',optionOneSelected)
        console.log('hello2',optionTwoSelected)
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
                    <div className={optionOneSelected?'selected':null}>
                        {optionOneSelected && (<p style={{fontSize:"15px", alignItems:"left", padding:"5px"}}>Selected:</p>)}
                        
                        <p style={{padding:"10px"}}>{optionOne.text}</p>
                        <p>{Math.round((votesOne/totalVotes)*100)}%, {votesOne} out of {totalVotes}</p>    
                    </div>
                    <div className={optionTwoSelected?'selected':null}>
                        {optionTwoSelected && (<p style={{fontSize:"15px", alignItems:"left", padding:"5px"}}>Selected:</p>)}
                        <p style={{color:"red", fontWeight:"bold"}}>OR</p>
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