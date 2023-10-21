import * as pollsService from './Polls.service'

export const createPoll = async (req, res) => {
    const poll = await req.json()

    //Lag validering

    //Send til service create poll
    const createdPoll = await pollsService.addToPoll(poll)
    console.log("Inside polls controller")
    //    console.log(createdPoll)
    if(createdPoll.success) {
        return res.status(201).json({
            success: true,
            data: createdPoll.data,
          })
    }
    else{
        return {success:false, error: createdPoll.error}}
}