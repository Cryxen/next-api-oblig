"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { validate } from "@/lib/validation";

/*
    For local storage I used this source: https://blog.logrocket.com/using-localstorage-react-hooks/ 
*/

const LoggedOnUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loggedOnUser, setLoggedOnUser] = useState(() => {
    const saved = localStorage.getItem("userName");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [validationError, setValidationError] = useState(null);

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidateEmail = validate.isEmail(email);
    const isValidName = validate.isName(username);

    if (!isValidName && !isValidateEmail) {
      setValidationError({
        username: "Navn må være fullt navn",
        email: "E-post må være en ekste e-post adresse",
      });
    } else if (!isValidName) {
      setValidationError({ username: "Navn må være fullt navn" });
    } else if (!isValidateEmail) {
      setValidationError({ email: "E-post må være en ekste e-post adresse" });
    } else {
      setValidationError(null);

      setLoggedOnUser(username);
      const user = { name: username, email: email };
      console.log(user);
      axios
        .post("/api/users", user) // TODO: Connect to API later
        .then((response) => {
          console.log(response.data.data.id);
          localStorage.setItem("userId", JSON.stringify(response.data.data.id));
          localStorage.setItem("userName", JSON.stringify(response.data.data.name))
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  console.log(loggedOnUser);


  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setLoggedOnUser("");
  };
  if (loggedOnUser) {
    return (
      <div className="loggedOnUserComponent">
        <p>Pålogget bruker: {loggedOnUser}</p>
        <button onClick={logout}>Logg ut</button>
      </div>

    );
  } else {
    return (
      <div className="loggedOnUserComponent">
      <form onSubmit={handleSubmit}>
        <div>{validationError ? JSON.stringify(validationError) : null}</div>
        <label htmlFor="usernameInput">Brukernavn: </label>
        <input
          type="text"
          onChange={handleUsernameInput}
          name="usernameInput"
        />
        <label htmlFor="emailInput">E-post: </label>
        <input type="email" onChange={handleEmailInput} name="emailInput" />
        <button type="submit">Lag bruker</button>
      </form>
      </div>

    );
  }
};
export default LoggedOnUser;
