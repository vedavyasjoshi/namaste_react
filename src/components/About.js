import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This is About us page</h2>
        <User />
        {/* <UserClass name={"Vedavyas"} /> */}
      </div>
    );
  }
}

export default About;
