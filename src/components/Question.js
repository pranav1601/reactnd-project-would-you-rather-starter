import React,{Component} from 'react'
import {connect} from 'react-redux'
import Unanswered from './Unanswered'
import Answered from './Answered'

class Question extends Component{
    render(){
        console.log(this.props)
        const {id,answered}=this.props
        console.log(answered)
        return(
            <div>
                hey!
                {(answered===true)?
                    <Answered id={id}/>
                    :
                    <Unanswered id={id}/>}
            </div>
        )
    }
}

function mapStateToProps({users,authUser},props){
    const {id}=props.match.params
    const answered=Object.keys(users[authUser].answers).includes(id)
    return{
        id,
        answered
    }
}

export default connect(mapStateToProps)(Question)