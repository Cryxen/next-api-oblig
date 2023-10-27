import { validate } from "@/lib/validation";
import * as usersRepo from "./Users.repository";
import { NextResponse } from "next/server";


export const addUser = async (userName, userEmail) => {

  
  if (!validate.isEmail(userEmail)){
    console.log(userName)
    return {success: false, error: "email check failed"}
  }

  if (!validate.isName(userName)){
    return {success: false, error: "name check failed. Please use full name"}
  }
  const addedUserToList = await usersRepo.addUser(userName, userEmail);
  console.log(addedUserToList)
  if (addedUserToList.success) {
    return { success: true, data: addedUserToList.data };
  } else return { success: false, error: addedUserToList.error };
};


export const fetchAllUsers = async () => {
  try {
    const usersFromDb = await usersRepo.fetchAllUsers()
    return{success: true, data: usersFromDb.data}
  } catch (error) {
    return {success: false, data: usersFromDb.error}
  }
}