import React, { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/./Statistics';
import { Section } from './components/./Section';
import { Notification } from './components/./Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  calculatePositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    if (total === 0) {
      return 0;
    }

    const positivePercentage = (good / total) * 100;
    return positivePercentage.toFixed(2);
  };

  render() {
    const options = ['Good', 'Neutral', 'Bad'];
    const { good, bad, neutral } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good || bad || neutral ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.calculatePositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
