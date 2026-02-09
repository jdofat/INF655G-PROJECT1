/* Task 2: Create a Class Component and Use JSX (5 Points)

Create a class-based component named UserInfo that:
-Uses JSX to return a <div> containing a user's name and profession.
-Defines state inside the component to hold user details.
-Displays a random number inside JSX (e.g., "Your lucky number is 7").
*/

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
      </div>
    );
  }
}

export default UserInfo;
