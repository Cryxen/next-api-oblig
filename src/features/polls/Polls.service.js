import * as pollsRepo from './Polls.repository'
export const addToPoll = async (poll) => {
    //Validering

    const addedToPoll = await pollsRepo.addToPoll(poll)

    if(addedToPoll.success) 
        return {success: true, data: addedToPoll.data}
    else 
        return {success: false, error: addedToPoll.error}

}