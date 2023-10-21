import { Polls } from "@/features/polls/Polls"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({data: Polls, status: 200})
}

export const POST = async(req) => {
    console.log("POST FORSØK")
    const data = await req.json()
    console.log(data)
    console.log(Polls.push(data))
    return NextResponse.json(data,{ status: 201 });
}