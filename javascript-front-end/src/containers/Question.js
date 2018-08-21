import React from 'react'
import FunctionContainer from './FunctionContainer'
import './Question.css';

class Question extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      questionCompleted: false
    }
    this.handleNext = this.handleNext.bind(this)
  }

  handleNext(){
    if (this.state,questionCompleted){
    this.setState(prevState => ({
      questionNumber: prevState.questionNumber + 1,
      questionCompleted: false
    }))}

  }

  render(){
    return (
      <React.Fragment>
      <div id="story-view">
        <p id="story">{this.props.lesson[this.state.questionNumber].story}</p>
      </div>
       <FunctionContainer functionLines={this.props.lesson[this.state.questionNumber].answers} />
       <button onClick={this.handleNext}>Next</button>
      {/* <OutputContainer/>
      <SubmitButton/>
      <ResultBox/>} */}
     </React.Fragment>
    );
  }
}

export default Question;
