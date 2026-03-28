import React, { useState } from 'react';

function TaskForm({ tasks, setTasks, deleteTask }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === "" || description.trim() === "") {
      alert("Enter task and description");
      return;
    }

    setTasks([...tasks, { taskName, description }]);
    setTaskName("");
    setDescription("");
  };

  const handleSort = () => {
    setTasks([...tasks].sort((a, b) =>
      a.taskName.localeCompare(b.taskName)
    ));
  };

  const filteredTasks = tasks.filter(task =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <input
        type="text"
        placeholder="Search Tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSort}>Sort by Name</button>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task.taskName} - {task.description}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskForm;
