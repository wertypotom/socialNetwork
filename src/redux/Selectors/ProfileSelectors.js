import { createSelector } from "reselect";

export const getProfilePage = (state) => {
  return state.ProfilePage.userData;
};
export const getProfileStatus = (state) => {
  return state.ProfilePage.status;
};
export const getProfileID = (state) => {
  return state.auth.id;
};
export const getProfileIsAuth = (state) => {
  return state.auth.isAuth;
};

const selectorForPractice = (state) => {
  return state.auth.users;
};

export const selectorForPracticeReselect = createSelector(
  selectorForPractice,
  (users) => {
    users.filter((u) => true);
  }
);
