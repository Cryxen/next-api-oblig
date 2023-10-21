import { PollDelivered } from "@/features/polls/Polls.repository"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({data: PollDelivered, status: 200})

}

export const POST = async(req) => {
    console.log("POST FORSØK")
    const data = await req.json()
    console.log(data)
    console.log(PollDelivered.push(data))
    return NextResponse.json(data,{ status: 201 });
}