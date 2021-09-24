import { addPostActionCreator, deletePost } from "./ProfileReducer";
import profileReducer from "./ProfileReducer";

const state = {
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
};

it("length shoul be incremented", () => {
  // 1. initial data

  const action = addPostActionCreator("new text");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expect
  expect(newState.postData.length).toBe(4);
});

it("message of the next post should be correct", () => {
  // 1. initial data
  const action = addPostActionCreator("new text");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expect
  expect(newState.postData[3].message).toBe("new text");
});

it("after deleting posts length should be reduced", () => {
  // 1. initial data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expect
  expect(newState.postData.length).toBe(2);
});
