import React,{Component} from 'react'
import {connect} from 'react-redux'
import Answered from './Answered'
import DemoQuestion from './DemoQuestion'

class Dashboard extends Component{
    state={
        questionView:'unanswered'
    }
    onChange=(e)=>{
        const view=e.target.value
        this.setState({
            questionView:view
        })
    }
    render(){
        const {answered,unanswered}=this.props.userQuestionData
        return(
            <div  className='center'>
                <h3>Your timeline</h3>
                <button value="answered"
                    className={this.state.questionView==='answered'?"selected-list":null}
                    onClick={this.onChange}>Answered Questions</button>
                <button value="unanswered"
                    className={this.state.questionView==='unanswered'?"selected-list":null}
                    onClick={this.onChange}>Unanswered Questions</button>
                <ul className='dashboard-list'>
                    {(this.state.questionView==='answered')?
                        answered.map((question)=>(
                            <li key={question.id}>
                                <div><DemoQuestion id={question.id}/></div>
                            </li>
                        ))
                        :
                        unanswered.map((question)=>(
                            <li key={question.id}>
                                <div><DemoQuestion id={question.id}/></div>
                            </li>
                        ))}
                
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authUser, users, questions }) {
    
    const answeredIds = Object.keys(users[authUser].answers);
    const answered = Object.values(questions)
      .filter(question => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.values(questions)
      .filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  
    return {
      userQuestionData: {
        answered,
        unanswered
      }
    };
    
  }


export default connect(mapStateToProps)(Dashboard)