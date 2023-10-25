import { NextResponse } from 'next/server'
import * as userService from './Users.service'

export const createUser = async (req) => {
    const user = await req.json()
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