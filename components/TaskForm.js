import React, { useState } from 'react';

function TaskForm({tasks, setTasks, deleteTask}) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    
      if (taskName.trim() === "" || description.trim() === "") {
        alert("enter task and description");
          return;
    }
  
    setTasks([...tasks, { taskName, description }]);
    setTaskName("");
    setDescription("");
  };
  
  const handleSort = () => {
    setTasks([...tasks].sort((a, b) => a.taskName.localeCompare(b.taskName)));
  };

  const filteredTasks = tasks.filter(task =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase()
  };



  return (
    <div>
     <form onSubmit={handleSubmit}>
        <label>
         Task:
           <input
             type="text"
             value={taskName}
             onChange={(e) => setTaskName(e.target.value)
           }/>
          </label>
          
  <label> Description:
      <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
       />
  </label>
 <button type="submit">submit</button>
</form>

    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)
    }/>

    <button onClick={handleSort}> Sort by: Name </button>

    <ul>
      {filteredTasks.map((task, index) => (
        <li key={index}>
          {task.taskName}: 
          {task.description}
          (button onClick={( => deleteTask(index)}>delete</button>
        </li>
      ))}
    </ul>
  </div>
 );
}

export default TaskForm; 
