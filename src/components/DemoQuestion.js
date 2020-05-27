import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/users'
import {Link,withRouter} from 'react-router-dom'


class DemoQuestion extends Component{
    render(){
        const {question,user}=this.props
        
        const{
            author,
            id,
            timestamp,
            optionOne,
            optionTwo
        }=question

        return(
            <Link to={'/questions/'+id} className='question'>
                <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className='avatar'
                />
                <div className='question-info'>
                    <div>
                        <div>{formatDate(timestamp)}</div>
                        <div className="author">{user.name} asks:</div>
                    </div>
                </div>
                <div style={{flexDirection:"column",fontSize:"large"}}>
                    <h2>Would You Rather</h2>
                    {(optionOne.text.length>10?<p>...{optionOne.text.slice(0,10)}...</p>:<p>...{optionOne.text}...</p>)}
                </div>
            </Link>
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

export default withRouter(connect(mapStateToProps)(DemoQuestion))