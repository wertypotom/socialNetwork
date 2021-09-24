import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_DATA = "SET_USER_DATA";
const RESET_USER_DATA = "RESET_USER_DATA";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  postData: [
    {
      id: 1,
      message: "this is the 1st post",
      likes: "12",
      imgUrl:
        "https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      message: "this is the 2nd post",
      likes: "3",
      imgUrl:
        "https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      message: "this is the 3rd post",
      likes: "21",
      imgUrl:
        "https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj",
    },
  ],
  textAreaData: "",
  userData: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return {
      ...state,
      postData: [
        ...state.postData,
        {
          id: new Date().getTime().toString(),
          message: action.text,
          likes: "0",
          imgUrl:
            "https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj",
        },
      ],
    };
  }
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      userData: action.userData,
    };
  }
  if (action.type === RESET_USER_DATA) {
    return {
      ...state,
      userData: null,
    };
  }
  if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status,
    };
  }
  if (action.type === DELETE_POST) {
    return {
      ...state,
      postData: state.postData.filter((post) => {
        return post.id !== action.postID;
      }),
    };
  }
  return state;
};

export const addPostActionCreator = (text) => {
  return { type: ADD_POST, text };
};
export const setUserData = (userData) => {
  return { type: SET_USER_DATA, userData };
};
export const resetUserData = () => {
  return { type: RESET_USER_DATA };
};
export const deletePost = (postID) => {
  return { type: DELETE_POST, postID };
};

export const setUserStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const resetUserDataAC = () => {
  return (dispatch) => {
    dispatch(resetUserData());
  };
};

export const loadSpecificUserDataOnMainPageTC =
  (userID) => async (dispatch) => {
    const data = await usersAPI.loadSpecificUserDataOnMainPage(userID);
    dispatch(setUserData(data));
  };

export const getUserStatusTC = (userID) => async (dispatch) => {
  const response = await profileAPI.getUserStatus(userID);
  dispatch(setUserStatus(response.data));
};

export const updateMyStatusTC = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
