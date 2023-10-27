import { NextResponse } from 'next/server'
import * as userService from './Users.service'

export const createUser = async (req) => {
    const user = await req.json()
    console.log(user)
    const {name, email} = user
    const createdUser = await userService.addUser(name, email)
    if (createdUser.success) {
        return NextResponse.json({
            status: 201,
            success: true,
            data: createdUser.data
        })
    }
    else{
        return NextResponse.json({success: false, error: createdUser.error})
    }
}

export const fetchAllUsers = async () => {
    try {
        const usersFromDb = await userService.fetchAllUsers()
        return NextResponse.json({
            status: 200,
            success: true,
            data: usersFromDb.data
        })
    } catch (error) {
        return NextResponse.json({success:false, error: usersFromDb.error})
    }
}