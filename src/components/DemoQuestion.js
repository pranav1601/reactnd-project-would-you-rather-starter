import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/users'
import {Link,withRouter} from 'react-router-dom'


class DemoQuestion extends Component{
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
            <Link to={'/questions/'+id} className='tweet'>
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