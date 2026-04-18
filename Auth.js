import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <h2>Login / Sign Up</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default Auth;
