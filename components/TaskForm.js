import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

function TaskForm({ user }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "tasks"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => unsubscribe();
  }, [user.uid]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) return;

    await addDoc(collection(db, "tasks"), {
      userId: user.uid,
      taskName,
      taskDescription,
      createdAt: serverTimestamp()
    });

    setTaskName("");
    setTaskDescription("");
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "tasks", id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.taskName} - {task.taskDescription}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskForm;
