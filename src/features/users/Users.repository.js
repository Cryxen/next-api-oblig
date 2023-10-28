import { PrismaClient } from "@prisma/client"

export const Users = []

// export const addUser = (userName, userEmail) => {
//     const oldUsersList = Users.length
//     const newUsersList = Users.push({name: userName, email: userEmail})
//     if (oldUsersList < newUsersList) {
//         return({success: true, data: Users})
//     }
//     else return({success: false, error: "Failed to push users in users repository"})
// }

const prisma = new PrismaClient()

export const addUser = async (name, email) => {
    try {
        const addedUser = await prisma.User.create({data:{
            email,
            name
        }})
        return {success: true, data: addedUser}
    } catch (error) {
        return {success: false, error: "error adding user to db"}
    }
}

export const fetchAllUsers = async () => {
    console.log("Inside fetch user repo!")
    try {
        const usersFromDb = await prisma.User.findMany()
        return{success: true, data: usersFromDb}
    } catch (error) {
        return{success: false, error: "Failed to retrieve users from db"}
    }
}