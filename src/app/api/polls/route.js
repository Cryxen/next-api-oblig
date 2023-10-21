import * as pollsController from '@/features/polls/Polls.controller'
import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({data: Polls, status: 200})
}

export const POST = async(req, res) => {
    console.log("POST FORSØK")
    return(res.status(500))
    //await pollsController.createPoll(req, res)
    //console.log(createdPoll)
}