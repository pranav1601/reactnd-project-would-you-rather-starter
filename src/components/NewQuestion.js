import React, {Component} from 'react'
import {connect} from 'react-redux'
import { handleSaveQuestion } from '../actions/questions';
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component{
    state={
        validSubmit: false,
        optionOne:'',
        optionTwo:''
    }
    onQuestionSubmit=(e)=>{
        e.preventDefault()
        const { authUser, handleSaveQuestion} = this.props;
        const { optionOne, optionTwo } = this.state;

        new Promise((res, rej) => {
        handleSaveQuestion(optionOne, optionTwo, authUser)
        setTimeout(() => res('success'), 1000);
        }).then(() => {
        this.setState({
            optionOne: '',
            optionTwo: ''
        });
        this.setState({ validSubmit: true });
        });
    }
    onOptionChangeOne=(e)=>{
        const value=e.target.value
        this.setState(()=>({
            optionOne:value
        }))
    }
    onOptionChangeTwo=(e)=>{
        const value=e.target.value
        this.setState(()=>({
            optionTwo:value
        }))
    }
    render(){
        const {validSubmit}=this.state
        if(validSubmit===true){
            return <Redirect to='/'/>
        }
        return(
            <div className="center">
                <h3>Would You rather</h3>
                <form className="question-info" onSubmit={this.onQuestionSubmit}>
                    <label>
                    <textarea
                        name="optionOne"
                        value={this.state.optionOne}
                        className="textarea"
                        onChange={this.onOptionChangeOne}
                        placeholder="Enter option one"/>
                    </label>
                    <h3 style={{color:"red"}}>OR</h3>
                    <label>
                    <textarea
                        name="optionTwo"
                        value={this.state.optionTwo}
                        className="textarea"
                        onChange={this.onOptionChangeTwo}
                        placeholder="Enter option two"/>
                    </label>
                    
                    <button className="btn">Submit Question?</button>
                </form>
            </div>
        )
        
    }
}

function mapStateToProps({ authUser }) {
    return {
      authUser
    };
  }

export default connect(
    mapStateToProps,
    { handleSaveQuestion }
  )(NewQuestion);