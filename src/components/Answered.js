import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import {Link,withRouter} from 'react-router-dom'


class Answered extends Component{
    

    render(){
        const {question}=this.props
        
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
            <div className='tweet'>
                {console.log(this.props.user.avatarURL)}
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
                    <div style={{border:"solid #000000",borderWidth:"thick",borderColor:"green"}}>
                        <p style={{fontSize:"15px", alignItems:"left", padding:"5px"}}>Selected:</p>
                        <p style={{padding:"10px"}}>{optionOne.text}</p>
                        <p>{Math.round((votesOne/totalVotes)*100)}%, {votesOne} out of {totalVotes}</p>    
                    </div>
                    <p style={{color:"red", fontWeight:"bold"}}>OR</p>
                    <p>{optionTwo.text}</p>
                    <p>{Math.round((votesTwo/totalVotes)*100)}%, {votesTwo} out of {totalVotes}</p> 
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

export default connect(mapStateToProps)(Answered)