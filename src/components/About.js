import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>This is About us page</h2>
        <div>
          LoggedInUser: 
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
        <User />
        {/* <UserClass name={"Vedavyas"} /> */}
      </div>
    );
  }
}

export default About;
