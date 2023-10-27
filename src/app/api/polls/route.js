import * as pollsController from '@/features/polls/Polls.controller'
import { NextResponse } from "next/server"

export const GET = async () => {
    return await pollsController.getPoll()
}

export const POST = async(req, res) => {
    console.log("POST FORSØK")
    return await pollsController.createPoll(req, res)
    //console.log(createdPoll)
}