import React,{Component} from 'react'
import {connect} from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'
import { Redirect } from 'react-router'

class Question extends Component{
    render(){
        console.log(this.props)
        const {question,id,answered}=this.props
        console.log(answered)
        console.log('question',!question)
        if(!question){
            return <Redirect to='/notfound'/>
        }
        return(
            <div>
                {(answered===true)?
                    <Answered id={id}/>
                    :
                    <Unanswered id={id}/>}
            </div>
        )
    }
}

function mapStateToProps({users,authUser,questions},props){
    const {id}=props.match.params
    const answered=Object.keys(users[authUser].answers).includes(id)
    return{
        question:questions[id],
        id,
        answered
    }
}

export default connect(mapStateToProps)(Question)