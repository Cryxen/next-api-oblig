import { Polls } from "@/features/polls/Polls"
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({data: Polls, status: 200})
}