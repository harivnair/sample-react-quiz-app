import React, {Component} from 'react';
import QuizComponent from './primary-content/quiz.component';
import QuizStartup from './primary-content/quiz-startup-modal.component';

export default class PrimaryContent extends Component {
    render() {
       return (
          <div className={this.props.className}>
          <QuizStartup></QuizStartup>
          <div className="w-100 text-center">
          <QuizComponent></QuizComponent>
          </div>
          </div>
       );
    }
 }

