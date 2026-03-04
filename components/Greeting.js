/*
Project 1: Greeting, para, name, profession, number, tasks:

Task 1: Create a React Component Using JSX (5 Points)

-Create a functional component called Greeting that: 
-Uses JSX to return an <h1> element displaying a greeting message (e.g., "Hello, Welcome to React!").
-Includes a paragraph <p> with an inline style applied using JSX.
-Uses JavaScript expressions inside JSX (e.g., displaying the current date dynamically).
---------------------
2. Task 1: Use Props to Pass Data (5 Points)

Modify your Greeting component to accept a prop called username.
Display the username inside the greeting message.
In App.js, render Greeting twice with different usernames.

Example Output:

Hello, Alice!  
Hello, Bob!  
  
*/


function Greeting({ username, tasknumber }) {
  return (
    <div>
      <h1>Welcome to TaskHub, {username}!</h1>
      <p style={{ fontStyle: "italic" }}>
        You have {tasknumber} employee tasks.
      </p>
    </div>
  );
}

  export default Greeting;
