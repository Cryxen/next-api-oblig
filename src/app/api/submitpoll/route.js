import { PollDelivered } from "@/features/polls/Polls.repository"
import { NextResponse } from "next/server"
import * as pollsController from "@/features/polls/Polls.controller"

export const GET = async() => {
    return await pollsController.fetchDeliveredPollsFromDb()

}

export const POST = async(req) => {
    return await pollsController.pollDeliverPOST(req)
}