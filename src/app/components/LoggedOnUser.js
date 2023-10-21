"use client"
import { useState } from "react"

const LoggedOnUser = () => {
    const [loggedOnUser, setLoggedOnUser] = useState()
    const [username, setUsername] = useState('')

    const handleUsernameInput = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoggedOnUser(username)
        console.log("User logged on: " + loggedOnUser)
    }

    if (loggedOnUser) {
        return(
            <p>{loggedOnUser}</p>
        )
    }
    else {
        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="usernameInput">Brukernavn: </label>
                <input type="text" onChange={handleUsernameInput} name="usernameInput"/>
                <button type="submit">Lag bruker</button>
            </form>
        )
    }
}
export default LoggedOnUser