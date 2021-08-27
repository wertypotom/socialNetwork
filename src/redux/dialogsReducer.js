const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

const initialState = {
  contactsData: [
    {
      id: 1,
      name: "Andrey",
      path: "andrey",
      imgUrl:
        "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
    {
      id: 2,
      name: "Anna",
      path: "anna",
      imgUrl: "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",
    },
    {
      id: 3,
      name: "Artyom",
      path: "artyom",
      imgUrl:
        "http://img.faceyourmanga.com/mangatars/1/873/1873552/large_1751979.png",
    },
    {
      id: 4,
      name: "Amina",
      path: "amina",
      imgUrl:
        "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
    },
  ],

  messageData: [
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you" },
    { id: 3, text: "I am good" },
    { id: 4, text: "What are you doing" },
  ],

  messageTextAreaData: "",
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    const newMessage = {
      id: 5,
      text: state.messageTextAreaData,
    };
    state.messageData.push(newMessage);
    state.messageTextAreaData = "";
    return state;
  }
  if (action.type === CHANGE_MESSAGE) {
    state.messageTextAreaData = action.text;
    return state;
  }
  return state;
};

export const changeMessageActionCreator = (text) => {
  return { type: CHANGE_MESSAGE, text: text };
};
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export default dialogsReducer;
