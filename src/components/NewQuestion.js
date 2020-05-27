import React, {Component} from 'react'
import {connect} from 'react-redux'
import { handleSaveQuestion } from '../actions/questions';
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component{
    state={
        validSubmit: false,
        isLoading: false,
        optionOne:'',
        optionTwo:''
    }
    onQuestionSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        const { authUser, handleSaveQuestion,dispatch} = this.props;
        const { optionOne, optionTwo } = this.state;

        new Promise((res, rej) => {
        this.setState({ isLoading: true });
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
        console.log(e.target.name)
        const value=e.target.value
        this.setState(()=>({
            optionOne:value
        }))
    }
    onOptionChangeTwo=(e)=>{
        console.log(e.target.name)
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
                <form className="tweet-info" onSubmit={this.onQuestionSubmit}>
                    <label>
                    <textarea
                        name="optionOne"
                        value={this.state.optionOne}
                        className="textarea"
                        onChange={this.onOptionChangeOne}
                        placeholder="Enter option one"/>
                    </label>
                    <label>
                    <textarea
                        name="optionTwo"
                        value={this.state.optionTwo}
                        className="textarea"
                        onChange={this.onOptionChangeTwo}
                        placeholder="Enter option one"/>
                    </label>
                    
                    <button>Submit Question?</button>
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