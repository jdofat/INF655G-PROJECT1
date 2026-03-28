import React, { useState } from 'react';

function Greeting(props) {
  const [greeting, setGreeting] = useState("Hello");
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h1>{greeting}, {props.username}!</h1>
      <p>Today's date: {today}</p>
      <button onClick={() => setGreeting("Hi")}>
        Change Greeting
      </button>
    </div>
  );
}

export default Greeting;
