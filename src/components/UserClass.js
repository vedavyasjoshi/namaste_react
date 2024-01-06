import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Contact: @vedavyasjoshi121</h4>
      </div>
    );
  }
}

export default UserClass;
