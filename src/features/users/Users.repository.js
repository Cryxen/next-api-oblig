export const Users = []

export const addUser = (userName, userEmail) => {
    const oldUsersList = Users.length
    const newUsersList = Users.push({name: userName, email: userEmail})
    if (oldUsersList < newUsersList) {
        return({success: true, data: Users})
    }
    else return({success: false, error: "Failed to push users in users repository"})
}