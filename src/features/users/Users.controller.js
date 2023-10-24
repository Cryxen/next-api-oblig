import { NextResponse } from 'next/server'
import * as userService from './Users.service'

export const createUser = async (req) => {
    const user = await req.json()

    const createdUser = await userService.addUser(user)
    if (createdUser.success) {
        return NextResponse.json({
            status: 201,
            success: true,
            data: createdUser.data
        })
    }
    else{
        return {success: false, error: createdUser.error}
    }
}