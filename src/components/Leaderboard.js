import React,{Component} from 'react'
import {connect} from 'react-redux'


class Leaderboard extends Component{
    render(){
        return(
            
            <div>
                
                {this.props.leaderboardUser.map(element => {
                    return(
                      <li key={element.id}>
                        <p>{element.name}</p>
                        <p>{element.answerCount}</p>
                        <p>{element.questionCount}</p>
                      </li>
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