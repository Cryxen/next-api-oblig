"use client"
import { useState } from "react"
import useLoggedOnUser from "../hooks/useLoggedOnUser"

const LoggedOnUser = () => {
    const [username, setUsername] = useState('')

    const {loggedOnUser, logInUser} = useLoggedOnUser()

    const handleUsernameInput = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        logInUser(username)
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