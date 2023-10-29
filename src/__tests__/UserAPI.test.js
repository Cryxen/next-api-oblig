const { createUser } = require("@/features/users/Users.controller");
import { addUser } from "@/features/users/Users.service";
import httpMocks from "node-mocks-http";
const { prismaMock } = require("../../singleton");

describe("Basic API test connected to service", () => {
  it("should create new user ", async () => {
    const user = {
      name: "Test testbruker",
      email: "test@detteErEnTest.no",
    };

    prismaMock.user.create.mockResolvedValue(user);

    const result = await addUser(user.name, user.email);
    console.log(result);
    expect(result.success).toBe(true);
  });
});

describe("Check email and name validations in user service", () => {
    it("Should fail on username not having space", async() => {
        const user = {
            name: "Test",
            email: "test@detteErEnTest.no",
          };
          prismaMock.user.create.mockResolvedValue(user);
          const result = await addUser(user.name, user.email)
          expect(result.success).toBe(false)
    }),
    it("should fail on username having too short name", async() => {
        const user = {
            name: "t test",
            email: "test@detteErEnTest.no",
          };
          prismaMock.user.create.mockResolvedValue(user);
          const result = await addUser(user.name, user.email)
          expect(result.success).toBe(false)
    })
    it("should fail on email not having @",async () => {
        const user = {
            name: "test test",
            email: "test.no",
          };
          prismaMock.user.create.mockResolvedValue(user);
          const result = await addUser(user.name, user.email)
          expect(result.success).toBe(false)
    })
    it("should fail on email not having domain", async () => {
        const user = {
            name: "test test",
            email: "test@no",
          };
          prismaMock.user.create.mockResolvedValue(user);
          const result = await addUser(user.name, user.email)
          expect(result.success).toBe(false)
    })
})