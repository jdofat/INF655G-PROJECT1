import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";
import Counter from "./components/Counter";

function App() {
  const tasknumber = Math.floor(Math.random() * 100);
  const usernames = ["dwallace", "mscott", "dschrute", "jhalpert"];
  const professions = ["Employee", "Manager", "Sr. Manager", "CEO"];

  const randomProfession =
    professions[Math.floor(Math.random() * professions.length)];
  
  const tasks = ["Document", "Collaborate", "Programming", "Coding", "Helping"];

  const handleAlert = () => {
    alert("Button was clicked!");
  };

  
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
        <UserInfo 
          profession={randomProfession} 
          handleClick={handleAlert} 
        />
        <TaskComponent tasks={tasks} />
        <Counter />

      <h2>Task List:</h2>
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default App;

