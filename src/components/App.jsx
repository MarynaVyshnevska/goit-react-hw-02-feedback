import React, { Component } from "react";
// import PropTypes from 'prop-types';

import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveFeedback = event => {
    const type = event.target.textContent;
    this.setState(prevState => {
      return ({
        [type]: prevState[type] + 1,
      });
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalVoices = this.countTotalFeedback();
    return Math.round((good / totalVoices) * 100) + '%';
    // console.log(a);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);
    const totalVoices = this.countTotalFeedback();

    return (
      
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={feedbackOptions}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalVoices > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveVoices={this.countPositiveFeedbackPercentage()}
            />
            ) : (<Notification message="There is no feedback"></Notification>)
          }
        </Section>  
          
      </>
        
      
    )  
  }
};

// App.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,

// }
