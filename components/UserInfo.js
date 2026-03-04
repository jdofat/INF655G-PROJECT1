

import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "dwallace",
      profession: "Employee",
      employeeNumber: Math.floor(Math.random() * 1000)
  };
}
  render() {
    return (
      <div>
        <h2>User: {this.state.username}</h2>
        <h3>Profession: {this.state.profession}</h3>
        <p>Employee Number: {this.state.employeeNumber}</p>
        <button onClick={this.props.handleClick}>
          CLICK ME!
        </button>
      </div>
    );
  }
}

export default UserInfo;
