import { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  incrementCount = () => {
    this.setState((prevState, props) => ({count: prevState.count + 1}));
  }  
  render() {
    // const { render } = this.props;
    // const { count } = this.state;
    // return render(count, this.incrementCount);

    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}

export default Counter;
