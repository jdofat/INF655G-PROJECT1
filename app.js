*/
Project 1: Greeting, para, name, profession, number, tasks:

Task 1: Create a React Component Using JSX (5 Points)

-Create a functional component called Greeting that: 
-Uses JSX to return an <h1> element displaying a greeting message (e.g., "Hello, Welcome to React!").
-Includes a paragraph <p> with an inline style applied using JSX.
-Uses JavaScript expressions inside JSX (e.g., displaying the current date dynamically).
/*



function App() {
  const tasknumber;
  const username;
  const profession;
  const employeenumber;
  const tasks = ["Document", "Collaborate", "Programming", "Coding"];


function Greeting() {
  return (
    <div>
    <h1>Welcome to TaskHub, {username}!</h1>
    <p style:{{font-style: italic;}}>You have {tasknumber} employee tasks.</p>
    </div>
  );
}

*/
Task 2: Create a Class Component and Use JSX (5 Points)

Create a class-based component named UserInfo that:
-Uses JSX to return a <div> containing a user's name and profession.
-Defines state inside the component to hold user details.
-Displays a random number inside JSX (e.g., "Your lucky number is 7").
/*

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username= "DavidWallace",
      profession: "Developer",
      employeenumber: 555
  };
}
  render() {
    return (
      <div>
        <h2>{username}</h2>
        <h3>{profession}</h3>
        <h4>{employeenumber}</h4>
      </div>
    );
  }
}

*/
Task 3: Dynamic Content Using JSX and React Components (5 Points)
-Create an array of tasks inside the App component.
-Write a function getRandomTask() that returns a random task from the list.
-Display a random task inside a <h3> using JSX.
/*

function getRandomTask() {
  return (
    <div>
      <h2>Task:</h2>
      <h3>{randomtask}</h3>
    </div>
  );
}


*/
Task 4: Parent and Child Components Using JSX (5 Points)
-Modify App.js to:
-Import the Greeting, UserInfo, and TaskComponent components.
-Render them inside a single <div> (following JSX rules).
/*



