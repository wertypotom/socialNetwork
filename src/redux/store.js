import profileReducer from "./ProfileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
  _state: {
    DialogPage: {
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
          imgUrl:
            "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",
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
    },

    ProfilePage: {
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
    },

    navBarPage: {
      links: [
        { id: 1, text: "Profile", path: "/profile" },
        { id: 2, text: "Messages", path: "/dialogs" },
        { id: 3, text: "News", path: "/news" },
        { id: 4, text: "Music", path: "/music" },
        { id: 5, text: "Settings", path: "/settings" },
      ],
      usersData: [
        {
          id: 1,
          name: "Andrey",
          imgUrl:
            "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
        },
        {
          id: 2,
          name: "Anna",
          imgUrl:
            "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",
        },
        {
          id: 3,
          name: "Artyom",
          imgUrl:
            "http://img.faceyourmanga.com/mangatars/1/873/1873552/large_1751979.png",
        },
        {
          id: 4,
          name: "Amina",
          imgUrl:
            "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
        },
      ],
    },
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogPage = dialogsReducer(this._state.DialogPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
