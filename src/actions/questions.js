import {saveQuestionAnswer} from '../utils/api'

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

export function receiveQuestions(questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions,
    }
}




export function addAnswerToQuestion(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer
  };
}

// export function handleAddAnswer(answer,qid){
//     return(dispatch,getState)=>{
//         const {authUser}=getState()
//         return saveQuestionAnswer({
//             authUser,
//             qid,
//             answer
//         }).then((question)=>{
//         console.log('question',question)
//         dispatch(addAnswer(question))})
//     }
// }

