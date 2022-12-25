import React, { Component } from "react";
// import PropTypes from 'prop-types';

import FeedbackOptions from "./FeedbackOptions";
// import Statistics from "./Statistics";
// import Section from "./Section";

export class App extends Component {
  state = {
    good: 0,
    netural: 0,
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
  render() {
    // const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);

    return (
      // <Section title="Please leave feedback">
        <FeedbackOptions 
          options={feedbackOptions}
          onLeaveFeedback={this.leaveFeedback}  />
      // </Section>
      // <Section title="Statistics">
        // <Statistics />
      // </Section>
    )  
  }
};


