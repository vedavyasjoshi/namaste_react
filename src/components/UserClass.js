import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "default",
        public_repos: 0,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vedavyasjoshi");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //do something
    }
    this.timer = setInterval(() => {
      console.log("inside interval");
    }, 1000);
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { login, public_repos, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Repos: {public_repos}</h3>
        <img className="user-img" src={avatar_url} alt="avatar" />
        <h4>Contact: @vedavyasjoshi121</h4>
      </div>
    );
  }
}

export default UserClass;
