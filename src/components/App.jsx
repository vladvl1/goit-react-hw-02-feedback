import React, {Component} from "react"
import Statistics from './Statistics/Statistics'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    return (
      <>
      <div>
        <h1>Please leave feedback</h1>
      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
        </div>
        </>
    );
  }
}
export default App;
