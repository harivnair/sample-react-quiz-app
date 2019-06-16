import React, { Component } from "react";

import axios from "axios";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

import "../../css/quiz-component.css";

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: [],
      rawData: [],
      arrayIndex: 0,
      questionLength: 0,
      active: false,
      addedClassNames: [
        "btn btn-info",
        "btn btn-info",
        "btn btn-info",
        "btn btn-info"
      ],
      disabled:false,
      showNextButton:true
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    // this.prevQuestion = this.prevQuestion.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/data/`).then(res => {
      this.setState({
        quizData: res.data[this.state.arrayIndex],
        quizOptData: res.data[this.state.arrayIndex].options,
        rawData: res.data,
        questionLength: res.data.length,
        addedClassNames: [
          "btn btn-info",
          "btn btn-info",
          "btn btn-info",
          "btn btn-info"
        ],
        showNextButton:true
      });
    });
  }
  finishQuiz() {
    alert("Quiz finished");
  }
  toggleClass(e) {
    //console.log(e.currentTarget.dataset.id)
    let updatedClassNames = this.state.addedClassNames;
    
    updatedClassNames.map((val, index) => {
      if (index === Number(e.currentTarget.dataset.id)) {
        updatedClassNames[index] = "btn btn-warning";
        this.setState({ disabled:false });
      } else {
        updatedClassNames[index] = "btn btn-info";
        this.setState({ disabled:true });

      }
      return updatedClassNames;
    });
    this.setState({ addedClassNames: updatedClassNames, showNextButton:false });
  }
  // prevQuestion() {
  //   this.setState({
  //     arrayIndex: this.state.arrayIndex - 1,
  //     quizData: this.state.rawData[this.state.arrayIndex - 1],
  //     quizOptData: this.state.rawData[this.state.arrayIndex - 1].options,
  //     addedClassNames:['btn btn-info','btn btn-info','btn btn-info','btn btn-info']
  //   });
  // }

  nextQuestion() {
    if (this.state.arrayIndex < this.state.questionLength - 1) {
      this.setState({
        arrayIndex: this.state.arrayIndex + 1,
        quizData: this.state.rawData[this.state.arrayIndex + 1],
        quizOptData: this.state.rawData[this.state.arrayIndex + 1].options,
        addedClassNames:['btn btn-info','btn btn-info','btn btn-info','btn btn-info'],
        disabled:false,
       showNextButton:true
      });
    } else {
      alert("No more questions");
    }
    return;
  }

  render() {
    return (
      <div className={this.props.className}>
        <Card>
          <CardBody>
            <CardTitle className="card h-35 w-100 p-3 mb-5 bg-dark text-white text-center">
              {this.state.quizData.question}
            </CardTitle>

            <CardText>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                <button disabled={this.state.disabled}
                  data-id="0"
                  className={`  w-50 h-20 p-3 mb-2  ${
                    this.state.addedClassNames[0]
                  }  text-center`}
                  onClick={this.toggleClass}
                >
                  {this.state.quizOptData !== undefined
                    ? this.state.quizOptData[0]
                    : "Loading..."}
                </button>
                </div>
              <div  className="col-md-6">
              <button disabled={this.state.disabled}
                  data-id="1"
                  className={`  w-50 h-20 p-3  ml-2 mb-2 ${
                    this.state.addedClassNames[1]
                  }  text-center`}
                  onClick={this.toggleClass}
                >
                  {this.state.quizOptData !== undefined
                    ? this.state.quizOptData[1]
                    : "Loading..."}
                </button>
              </div>
               
              </div>
              
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                   <button disabled={this.state.disabled}
                  data-id="2"
                  className={`  w-50 h-9 p-3 mb-2 ${
                    this.state.addedClassNames[2]
                  }  text-center`}
                  onClick={this.toggleClass}
                >
                  {this.state.quizOptData !== undefined
                    ? this.state.quizOptData[2]
                    : "Loading..."}
                </button></div>
               <div  className="col-md-6">
               <button disabled={this.state.disabled}
                  data-id="3"
                  className={` w-50 h-9 p-3 mb-2 ${
                    this.state.addedClassNames[3]
                  }  text-center`}
                  onClick={this.toggleClass}
                >
                  {this.state.quizOptData !== undefined
                    ? this.state.quizOptData[3]
                    : "Loading..."}
                </button>
               </div>
               
              </div>
             
            </CardText>
            <div className="">
              <button
                className="next-button btn btn-info"
                hidden={this.state.showNextButton || (!(this.state.arrayIndex < this.state.questionLength - 1))}
                onClick={this.nextQuestion}
              >
                NEXT
              </button>
              <button
                className="next-button btn btn-info"
                hidden={this.state.arrayIndex < this.state.questionLength - 1}
                onClick={this.finishQuiz}
              >
                FINISH QUIZ
              </button>
              {/* <button
                className="prev-button btn btn-info"
                hidden={this.state.arrayIndex === 0}
                 onClick={this.prevQuestion}
              >
                PREV
              </button> */}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
