import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";

function App() {
  const tasknumber = Math.floor(Math.random() * 100);
  const usernames = ["dwallace", "mscott", "dschrute", "jhalpert"];
  const professions = ["Employee", "Manager", "Sr. Manager", "CEO"];
  
  const randomUser =
    usernames[Math.floor(Math.random() * usernames.length)];

  const randomProfession =
    professions[Math.floor(Math.random() * professions.length)];
  
  const tasks = ["Document", "Collaborate", "Programming", "Coding"];
  
  return (
    <div>
      <Greeting username={randomUser} tasknumber={tasknumber} />
      <UserInfo profession={randomProfession} />
      <TaskComponent tasks={tasks} />
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

