const initialState = {
  links: [
    { id: 1, text: "Profile", path: "/profile" },
    { id: 2, text: "Messages", path: "/dialogs" },
    { id: 3, text: "Users", path: "/users" },
    { id: 4, text: "Login", path: "/login" },
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
      imgUrl: "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",
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
};

const navBarReducer = (state = initialState, action) => {
  return state;
};

export default navBarReducer;
