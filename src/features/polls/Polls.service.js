import { validate } from '@/lib/validation'
import * as pollsRepo from './Polls.repository'
export const addToPoll = async (poll) => {
    console.log(poll.question)
    //Validering
    if(!validate.containsQuestion(poll))
        return{success: false, error: "Poll does not contain question"}

    if(!validate.isQuestion(poll.question))
        return {success: false, error: "Poll question does not include question mark"}

    const addedToPoll = await pollsRepo.addToPoll(poll)

    if(addedToPoll.success) 
        return {success: true, data: addedToPoll.data}
    else 
        return {success: false, error: addedToPoll.error}

}

export const getPolls = async () => {
    try {const polls = await pollsRepo.fetchAllFromDb()
        return {success: true, data: polls.data}
    }
        catch (error) {
            return {success: false, error: polls.error}
        }
}