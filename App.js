import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";
import Counter from "./components/Counter";

function App() {
  const tasknumber = Math.floor(Math.random() * 100);
  const usernames = ["dwallace", "mscott", "dschrute", "jhalpert"];
  const professions = ["Employee", "Manager", "Sr. Manager", "CEO"];
  
  /*const randomUser =
    usernames[Math.floor(Math.random() * usernames.length)];*/

  const randomProfession =
    professions[Math.floor(Math.random() * professions.length)];
  
  const tasks = ["Document", "Collaborate", "Programming", "Coding"];
  
  return (
    <div>
      <h1>{usernames[0]} has:</h1>
      <p style={{ fontStyle: "italic" }}>
        {tasknumber} employee tasks.
      </p>

      <h1>{usernames[1]} has:</h1>
      <p style={{ fontStyle: "italic" }}>
        {tasknumber} employee tasks.
      </p>
          
    <div>
      <Greeting username={usernames[0]} tasknumber={tasknumber} />
        <Greeting username={usernames[1]} tasknumber={tasknumber} />
        <UserInfo profession={randomProfession} />
        <TaskComponent tasks={tasks} />
      </div>
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

