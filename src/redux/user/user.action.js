import { UserActionTypes } from "./user.action.types";

export const setCurrentUserAction = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
