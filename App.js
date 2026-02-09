import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";

function App() {
  const tasknumber = Math.floor(Math.random() * 100);
  const username = ["dwallace", "mscott", "dschrute", "jhalpert"];;
  const profession = ["Employee", "Manager", "Sr. Manager", "CEO"];
  const employeenumber = Math.floor(Math.random() * 1000);
  const tasks = ["Document", "Collaborate", "Programming", "Coding"];
  
  return (
    <div>
      <Greeting />
      <UserInfo />
      <TaskComponent />
    </div>
  );
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

export default App;

