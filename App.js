import React, { useState } from 'react';
import Greeting from './INF655-Assignment1/Greeting';
import UserInfo from './INF655-Assignment1/UserInfo';
import TaskForm from './INF655-Assignment1/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { taskName: "Read", description: "read book" },
    { taskName: "Shop", description: "go shopping" },
    { taskName: "Laundry", description: "do laundry" },
  ]);

  const deleteTask = (taskIndex) => {
    const areYouSure = window.confirm("Are you sure?");
    if (areYouSure) {
      setTasks(tasks.filter((task, index) => index !== taskIndex));
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <Greeting username="John" />
      <UserInfo name="Jade" job="Student" />

      <TaskForm tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
