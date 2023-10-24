import * as usersRepo from "./Users.repository";

export const addUser = async (userName, userEmail) => {
  const addedUserToList = await usersRepo.addUser(userName, userEmail);

  if (addedUserToList.success) {
    return { success: true, data: addedUserToList.data };
  } else return { success: false, error: addedUserToList.error };
};
