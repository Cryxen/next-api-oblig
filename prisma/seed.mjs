// /prisma/seed.js
// fra: https://fullstækk.no/courses/next-mvc-orm/06-seeding

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users = [
  { name: "Initiell bruker", email: "navn@epost.no" },
  { name: "Gustav Eriksen", email: "GustavE@epost.no" },
];

const Polls = [
  {
    question: "Hva synes du om dårlig mat?",
    checkbox1: "alternativ 1",
    checkbox2: "alternativ 2",
    checkbox3: "alternativ 3",
  },
  {
    question: "Hva synes du om musikk?",
    checkbox1: "alternativ 1",
    checkbox2: "alternativ 2",
    checkbox3: "alternativ 3",
  },
];

const DeliveredPolls = {
  username: "testnavn",
  question: "testspørsmål",
  checkedboxes: ["1", "2", "3"],
};



const createPollsWithUsers = async () => {
  const pollPromises = Polls.map(async (poll, index) => {
    await prisma.poll.create({
      data: { ...poll, user: { create: { ...Users[index] } } },
    });
  });
  console.log(pollPromises);
  await Promise.all(pollPromises);
};

// Seed funksjoner

async function main() {
  console.log(`Start seeding ...`);
  await createPollsWithUsers();
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
