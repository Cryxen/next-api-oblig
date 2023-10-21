import { User } from "@/features/users/User"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({data: User, status: 200})
}

export const POST = async(req) => {
    console.log("POST FORSØK")
    const data = await req.json()
    console.log(data)
    console.log(Object.assign(User, {username: data}))
    return NextResponse.json(data,{ status: 201 });
}