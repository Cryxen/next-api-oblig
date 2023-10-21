const Polls = [
    {
        id: 1,
        question: "Hva synes du om dårlig mat?",
        checkbox1: "alternativ 1",
        checkbox2: "alternativ 2",
        checkbox3: "alternativ 3"
    },
    {
        id: 2,
        question: "Hva synes du om musikk?",
        checkbox1: "alternativ 1",
        checkbox2: "alternativ 2",
        checkbox3: "alternativ 3"
    },
]

export const PollDelivered = [{
    username: '',
    question: '',
    checkedboxes: ['','','']
}]

export const addToPoll = async (poll) => {
    const oldPoll = Polls.length
    const newPoll = Polls.push(poll)

    if(oldPoll < newPoll)
        return {success: true, data: Polls}
    else
        return {success: false, error: "Failed to push poll object to Polls array in repository"}
}