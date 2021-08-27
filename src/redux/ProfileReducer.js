const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST-DATA";

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
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 4,
      message: state.textAreaData,
      likes: "0",
      imgUrl:
        "https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj",
    };
    state.postData.push(newPost);
    state.textAreaData = " ";
    return state;
  }
  if (action.type === CHANGE_POST) {
    state.textAreaData = action.text;
    return state;
  }

  return state;
};

export const changePostActionCreator = (text) => {
  return { type: CHANGE_POST, text: text };
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export default profileReducer;
