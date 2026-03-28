import React, {useState} from 'react';

import Greeting from './INF655-Assignment1/Greeting';   
import UserInfo from './INF655-Assignment1/UserInfo';   
import GetRandomTask from './INF655-Assignment1/GetRandomTask';
import TaskForm from './INF655-Assignment1/TaskForm';
import Counter from './INF655-Assignment1/Counter';

function App() {
  const [tasks, setTasks] = useState([
    {taskName: "Read", description: "read book"},
    {taskName: "Shop", description: "go shopping"},
    {taskName: "Laundry", description: "do laundry"},
  ]);


const deleteTask = (taskIndex) => {
    const areYouSure = window.confirm("are you sure?");
    if (areYouSure) {
      setTasks(tasks.filter((task, index) => index !== taskIndex));
    }
  };

  return (
    <div>
      
      <h1>Task Manager</h1>
        <TaskForm tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      
      <h2>More Tasks</h2>
        <moreTaskList/>
    </div>
  );
}

  function handleAlert() {
    alert ("Alert!");
  }

  return (
    <div>
      <Greeting username="John"/>
      <Greeting username="Janet"/>
      <UserInfo name="Jade", job="Student" />
      {GetRandomTask(tasks)}
    </div>
  );
};

 function moreTaskList() {

   const moreTasks = [
      "Mow the lawn",
      "Clean the bathroom",
      "Polish the floors",
      "Dust the windows",
      "Wipe the mirrors"
    ];

return (
    <div>
      <ul>
        {moreTasks.map((task, index) => (
          <li key={index}> {task} </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
