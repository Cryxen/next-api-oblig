import { NextResponse } from "next/server";
import * as pollsService from "./Polls.service";

export const createPoll = async (req, res) => {
  const poll = await req.json();

  //Lag validering

  //Send til service create poll
  const createdPoll = await pollsService.addToPoll(poll);
  console.log("Inside polls controller");
  if (createdPoll.success) {
    return NextResponse.json({
      status: 201,
      success: true,
      data: createdPoll.data,
    });
  } else {
    return NextResponse.json({ success: false, error: createdPoll.error });
  }
};
