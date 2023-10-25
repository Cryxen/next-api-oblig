import { validate } from "@/lib/validation";
import * as usersRepo from "./Users.repository";
import { NextResponse } from "next/server";


export const addUser = async (userName, userEmail) => {

  
  if (!validate.isEmail(userEmail)){
    return {success: false, error: "email check failed"}
  }

  if (!validate.isName(userName)){
    return {success: false, error: "name check failed. Please use full name"}
  }
  const addedUserToList = usersRepo.addUser(userName, userEmail);
  
  if (addedUserToList.success) {
    return { success: true, data: addedUserToList.data };
  } else return { success: false, error: addedUserToList.error };
};
