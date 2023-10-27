import { Users } from "@/features/users/Users.repository"
import { NextResponse } from "next/server"
import * as userController from '@/features/users/Users.controller'
export const GET = async () => {
    return await userController.fetchAllUsers()
}

export const POST = async(req) => {
    console.log("POST FORSØK")
    console.log(req)
    /*
    const data = await req.json()
    console.log(data)
    console.log(Object.assign(Users, {username: data}))
    return NextResponse.json(data,{ status: 201 });
    */
   return await userController.createUser(req)
}