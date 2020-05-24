import React,{Component} from 'react'
import {connect} from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import {Link,withRouter} from 'react-router-dom'


class Question extends Component{
    // handleLike=(e)=>{
    //     e.preventDefault()

    //     const {dispatch,tweet,authedUser}=this.props
    //     dispatch(handleToggleTweet({
    //         id:tweet.id,
    //         hasLiked:tweet.hasLiked,
    //         authedUser

    //     }))
    // }
    // toParent=(e,id)=>{
    //     e.preventDefault()
    //     this.props.history.push('/tweet/'+id)
    // }

    render(){
        const {question}=this.props
        // if(tweet===null){
        //     return <p>This tweet doesn't exist</p>
        // }
        const{
            author,
            id,
            timestamp,
            optionOne,
            optionTwo
        }=question

        return(
            <div className='tweet'>
                {console.log(this.props.user.avatarURL)}
                <img
                url='data:image/jpeg;base64,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'
                alt={`Avatar of ${author}`}
                className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span>{author}</span>
                        <div>{formatDate(timestamp)}</div>
                        <p>{optionOne.text}</p>
                    </div>
                </div>
                <div className='tweet-info'>
                    <div>
                        <span>{author}</span>
                        <div>{formatDate(timestamp)}</div>
                        <p>{optionTwo.text}</p>
                    </div>
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

export default connect(mapStateToProps)(Question)