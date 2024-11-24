import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 100, // Interval in milliseconds
  };

  state = {
    currentValue: 0, // Start at 0
  };

  componentDidUpdate(prevProps) {
    // Restart animation if the `value` prop changes
    if (prevProps.value !== this.props.value) {
      this.startAnimation();
    }
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAnimation() {
    // Clear any existing interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // Reset currentValue to 0 and start incrementing towards the new value
    this.setState({ currentValue: 0 }, () => {
      this.intervalId = setInterval(() => {
        if (this.state.currentValue < this.props.value) {
          this.setState((prevState) => ({
            currentValue: prevState.currentValue + 1,
          }));
        } else {
          clearInterval(this.intervalId);
        }
      }, this.props.interval);
    });
  }

  render() {
    return this.props.children(this.state.currentValue);
  }
}

export default ChangingProgressProvider;
