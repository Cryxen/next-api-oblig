import { useState } from "react"

const useLoggedOnUser = () => {
    const [loggedOnUser, setLoggedOnUser] = useState()

    const logInUser = (username) => {
        setLoggedOnUser(username)
    }

    return {loggedOnUser, logInUser}
}
export default useLoggedOnUser