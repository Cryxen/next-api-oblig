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

export const getPoll = async () => {
  try {
    const polls =await pollsService.getPolls(); 
    return NextResponse.json({
      status: 200,
      success: true,
      data: polls.data
    })
  } catch (error) {
    return NextResponse.json({success: false, error: polls.error})
  }

}