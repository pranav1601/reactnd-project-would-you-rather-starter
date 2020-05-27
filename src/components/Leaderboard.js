import React,{Component} from 'react'
import {connect} from 'react-redux'


class Leaderboard extends Component{
    render(){
        return(
            
            <div>
                
                {this.props.leaderboardUser.map(element => {
                    return(
                      <div className='question'>
                        <img
                        src={element.avatarURL}
                        alt={`Avatar of ${element.name}`}
                        className='avatar'
                        />
                      <li className="center" key={element.id} style={{fontSize:'large',fontWeight:"bold"}}>
                        <p>{element.name}</p>
                        <p>Answered: {element.answerCount}</p>
                        <p>Questions: {element.questionCount}</p>
                        <h3 style={{color:"red"}}>TOTAL SCORE: {element.total} </h3>
                      </li>
                      </div>
                    )
                })}
            </div>
        )
    }

}




function mapStateToProps({ users }) {
    const leaderboardUser = Object.values(users)
      .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
      }))
      .sort((a, b) => b.total-a.total)
    return {
      leaderboardUser
    };
  }
  
  export default connect(mapStateToProps)(Leaderboard);