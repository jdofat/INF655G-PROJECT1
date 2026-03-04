/*
Task 2: Manage State with useState (5 Points)
Create a Counter component.
Use the useState hook to track a count value.
Display the count and a button to increase the count when clicked.
Example Output:

Count: 0  
[Click Me]  
(Clicking the button increases the count)  
*/


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default Counter;
