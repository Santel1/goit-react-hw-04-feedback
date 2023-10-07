import React, { useState } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Section } from './components/Section';
import { Notification } from './components/Notification';

export const App = () => {
  const [objectState, setObjectState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = option => {
    setObjectState(prevState => {
      return {
        ...prevState,
        [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = objectState;
    return good + neutral + bad;
  };

  const calculatePositivePercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    const positivePercentage = (good / total) * 100;
    return positivePercentage.toFixed(2);
  };

  const options = ['Good', 'Neutral', 'Bad'];
  const { good, bad, neutral } = objectState;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good || bad || neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={calculatePositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
