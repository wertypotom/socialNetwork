export const followUnfollowReducer = (
  state,
  paramName,
  userID,
  conditionObject
) => {
  return state.map((user) => {
    if (user[paramName] === userID) {
      return {
        ...user,
        ...conditionObject,
      };
    }
    return user;
  });
};
