import React, { Component } from "react";
import style from "./App.module.css";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return { total };
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { total } = this.countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return { positivePercentage };
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { total } = this.countTotalFeedback();
    const { positivePercentage } = this.countPositiveFeedbackPercentage();
    const titleFeedbackOptions = "Please leave feedback";
    const titleStatistics = "Statistics";
    const messageNotification = "No feedback given";

    return (
      <>
        <Section title={titleFeedbackOptions}>
          <FeedbackOptions handleClick={this.handleClick} style={style} />
        </Section>
        <Section title={titleStatistics}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification messageNotification={messageNotification} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
