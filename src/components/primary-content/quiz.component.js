import React, { Component } from "react";

import axios from 'axios';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import "../../css/quiz-component.css";

export default class QuizComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      quizData: [],
      rawData:[],
      arrayIndex:0,
      questionLength:0
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
  }
  
  componentDidMount() {
    axios.get(`http://localhost:3004/data/`)
      .then(res => {
        
          this.setState({
            quizData: res.data[this.state.arrayIndex],
            quizOptData: res.data[this.state.arrayIndex].options,
            rawData:res.data,
            questionLength:res.data.length
          });
       
      
      
      })
  }
  finishQuiz(){
    alert("Quiz finished")
  }
  prevQuestion(){
    this.setState({
      arrayIndex: this.state.arrayIndex-1,
      quizData:this.state.rawData[this.state.arrayIndex-1],
      quizOptData: this.state.rawData[this.state.arrayIndex-1].options,
    });
  }
  nextQuestion(){
   
    if(this.state.arrayIndex<this.state.questionLength-1){
      this.setState({
        arrayIndex: this.state.arrayIndex+1,
        quizData:this.state.rawData[this.state.arrayIndex+1],
        quizOptData: this.state.rawData[this.state.arrayIndex+1].options,
      });
    }
    else{
     alert("No more questions");
    }
   return;
  }
  
  render() {
    return (
      <div className={this.props.className}>
        
          <Card>
            <CardBody>
              <CardTitle>{this.state.quizData.question}</CardTitle>
              
              <CardText>
                <div class="row">
                <div className="col-md-6"><input className="mr-3" type="radio"></input>
                {this.state.quizOptData!==undefined?this.state.quizOptData[0]:'Loadiing'}</div>
                <div className="col-md-6"><input className="mr-3" type="radio"></input>
                {this.state.quizOptData!==undefined?this.state.quizOptData[1]:'Loadiing'}</div>
                </div>
                <div class="row">
                <div className="col-md-6"><input className="mr-3" type="radio"></input>
                {this.state.quizOptData!==undefined?this.state.quizOptData[2]:'Loadiing'}</div>
                <div className="col-md-6"><input className="mr-3" type="radio"></input>
                {this.state.quizOptData!==undefined?this.state.quizOptData[3]:'Loadiing'}</div>
                </div>

              </CardText>
              <div className="">
                <button className="next-button btn btn-primary" hidden={this.state.arrayIndex >= this.state.questionLength-1} onClick={this.nextQuestion}>NEXT</button>
                <button className="next-button btn btn-primary" hidden={this.state.arrayIndex < this.state.questionLength-1} onClick={this.finishQuiz}>FINISH QUIZ</button>
                <button className="prev-button btn btn-primary"  hidden={this.state.arrayIndex === 0} onClick={this.prevQuestion}>PREV</button>
              </div>
            </CardBody>
          </Card>
        </div>
      
    );
  }
}
