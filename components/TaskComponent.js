function TaskComponent({ tasks }) {
  const getRandomTask = () => {
    const index = Math.floor(Math.random() * tasks.length);
    return tasks[index];
  };
  
  return (
    <div>
      <h2>Task:</h2>
      <h3>{getRandomTask()}</h3>
    </div>
  );
}

export default TaskComponent;
