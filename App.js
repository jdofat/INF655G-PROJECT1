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

/*
Task 4: Parent and Child Components Using JSX (5 Points)
-Modify App.js to:
-Import the Greeting, UserInfo, and TaskComponent components.
-Render them inside a single <div> (following JSX rules).
*/

export default App;

