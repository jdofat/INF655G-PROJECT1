/*
Task 3: Dynamic Content Using JSX and React Components (5 Points)
-Create an array of tasks inside the App component.
-Write a function getRandomTask() that returns a random task from the list.
-Display a random task inside a <h3> using JSX.
*/

function getRandomTask() {
  return (
    <div>
      <h2>Task:</h2>
      <h3>{randomtask}</h3>
    </div>
  );
}

export getRandomTask;

