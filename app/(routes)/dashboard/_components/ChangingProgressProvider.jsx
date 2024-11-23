import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 100, // Interval in milliseconds (100ms will give a faster animation)
  };

  state = {
    currentValue: 0, // Start at 0
  };

  componentDidMount() {
    // Start an interval to increment the progress value
    this.intervalId = setInterval(() => {
      // If currentValue is less than the target value, increment by 1
      if (this.state.currentValue < this.props.value) {
        this.setState((prevState) => ({
          currentValue: prevState.currentValue + 1,
        }));
      } else {
        // Clear the interval once the target value is reached
        clearInterval(this.intervalId);
      }
    }, this.props.interval);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return this.props.children(this.state.currentValue);
  }
}

export default ChangingProgressProvider;
