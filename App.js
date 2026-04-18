import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Auth from "./Auth";
import TaskForm from "./TaskForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Auth />;
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Welcome, {user.email}</p>
      <button onClick={() => signOut(auth)}>Logout</button>
      <TaskForm user={user} />
    </div>
  );
}

export default App;
