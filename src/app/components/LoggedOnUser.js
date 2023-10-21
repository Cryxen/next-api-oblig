"use client";
import { useEffect, useState } from "react";
import axios from "axios";

/*
    For local storage I used this source: https://blog.logrocket.com/using-localstorage-react-hooks/ 
*/

const LoggedOnUser = () => {
  const [username, setUsername] = useState("");
  const [loggedOnUser, setLoggedOnUser] = useState(() => {
    const saved = localStorage.getItem("username");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", JSON.stringify(username));
    setLoggedOnUser(username)

    axios
      .post("/api/users", JSON.stringify(username))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(loggedOnUser);
  
  const logout = () => {
    localStorage.removeItem("username")
    setLoggedOnUser('')
  }
  if (loggedOnUser) {
    return (
      <>
        <p>{loggedOnUser}</p>
        <button onClick={logout}>Logg ut</button>
      </>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">Brukernavn: </label>
        <input
          type="text"
          onChange={handleUsernameInput}
          name="usernameInput"
        />
        <button type="submit">Lag bruker</button>
      </form>
    );
  }
};
export default LoggedOnUser;
