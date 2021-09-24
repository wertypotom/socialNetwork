import { usersAPI } from "../api/api";
import { followUnfollowReducer } from "../Additional Components/Object-helpers/Object-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const ADD_USERS = "ADD_USERS";
const CHANGE_PAGE_NUMBER = "CHANGE_PAGE_NUMBER";
const CHANGE_USERS_NUMBER = "CHANGE_USERS_NUMBER";
const GET_IS_FETCHING = "GET_IS_FETCHING";

const initialState = {
  users: [],
  numOfUsersPerPage: 10,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: followUnfollowReducer(state.users, "id", action.id, {
        followed: true,
      }),
    };
  }
  if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: followUnfollowReducer(state.users, "id", action.id, {
        followed: false,
      }),
    };
  }
  if (action.type === ADD_USERS) {
    return {
      ...state,
      users: [...action.users],
    };
  }

  if (action.type === CHANGE_PAGE_NUMBER) {
    return {
      ...state,
      currentPage: action.page,
    };
  }
  if (action.type === CHANGE_USERS_NUMBER) {
    return {
      ...state,
      totalUsersCount: action.totalUsersCount,
    };
  }
  if (action.type === GET_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
    };
  }

  return state;
};

export const follow = (id) => {
  return { type: FOLLOW, id };
};
export const unfollow = (id) => {
  return { type: UNFOLLOW, id };
};
export const loadUsers = (users) => {
  return { type: ADD_USERS, users };
};
export const onPageChange = (page) => {
  return { type: CHANGE_PAGE_NUMBER, page };
};
export const loadUsersNumber = (totalUsersCount) => {
  return { type: CHANGE_USERS_NUMBER, totalUsersCount };
};
export const spinerIsFetching = (isFetching) => {
  return { type: GET_IS_FETCHING, isFetching };
};

export const loadUsersTС =
  (numOfUsersPerPage, currentPage) => async (dispatch) => {
    dispatch(spinerIsFetching(true));
    const data = await usersAPI.loadUsers(numOfUsersPerPage, currentPage);
    dispatch(loadUsers(data.items));
    dispatch(spinerIsFetching(false));
    // loadUsersNumber(res.data.totalCount);
  };

export const loadSpecificUsersPageTС =
  (page, numOfUsersPerPage, currentPage) => async (dispatch) => {
    dispatch(onPageChange(page));
    dispatch(spinerIsFetching(true));
    const data = await usersAPI.loadSpecificUserPage(
      numOfUsersPerPage,
      currentPage,
      page
    );

    dispatch(loadUsers(data.items));
    dispatch(spinerIsFetching(false));
    // this.props.loadUsersNumber(res.data.totalCount);
  };

const followOrUnfollow = async (dispatch, id, APImethod, action) => {
  const data = await APImethod(id);
  if (data.resultCode === 0) {
    dispatch(action(id));
  }
};

export const unfollowTС = (id) => async (dispatch) => {
  followOrUnfollow(dispatch, id, usersAPI.unsubscribeFromUser, unfollow);
};

export const followTС = (id) => async (dispatch) => {
  followOrUnfollow(dispatch, id, usersAPI.subscribeToUser, follow);
};

export default usersReducer;
