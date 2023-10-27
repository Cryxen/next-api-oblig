import prisma from "@/lib/clients/db";

// const Polls = [
//   {
//     id: 1,
//     question: "Hva synes du om dårlig mat?",
//     checkbox1: "alternativ 1",
//     checkbox2: "alternativ 2",
//     checkbox3: "alternativ 3",
//   },
//   {
//     id: 2,
//     question: "Hva synes du om musikk?",
//     checkbox1: "alternativ 1",
//     checkbox2: "alternativ 2",
//     checkbox3: "alternativ 3",
//   },
// ];

// export const PollDelivered = [
//   {
//     username: "",
//     question: "",
//     checkedboxes: ["", "", ""],
//   },
// ];

export const fetchAllFromDb = async () => {
  try {
    const polls = await prisma.Poll.findMany();
    return { success: true, data: polls };
  } catch (error) {
    return { success: false, error: "Failed to retrieve polls from db" };
  }
};

export const addToPoll = async ({
  question,
  checkbox1,
  checkbox2,
  checkbox3,
  userId,
}) => {
  try {
    const newPoll = await prisma.Poll.create({
      data: {
        question,
        checkbox1,
        checkbox2,
        checkbox3,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return { success: true, data: newPoll };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Failed to add new poll to db with prisma",
    };
  }
};

export const pollDeliverPOST = async ({ question, checkboxes }) => {
  try {
    console.log(...checkboxes);
    question = "test";
    checkboxes = "test2";
    const deliverPoll = await prisma.PollDelivered.create({
      data: {
        question,
        checkboxes,
      },
    });
    console.log("Delivered poll");
    console.log(deliverPoll);
    return { success: true, data: deliverPoll };
  } catch (error) {
    return { success: false, error: "Failed to deliver poll to db" };
  }
};

export const fetchDeliveredPollsFromDb = async () => {
  try {
    const deliveredPolls = await prisma.PollDelivered.findMany();
    return { success: true, data: deliveredPolls };
  } catch (error) {
    return { success: false, error: "Failed to fetch delivered polls from db" };
  }
};
