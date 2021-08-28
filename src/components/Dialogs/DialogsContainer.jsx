import {
  changeMessageActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import store from "../../redux/store";
import ShowContext from "../../ShowContext";

const DialogsContainer = (props) => {
  return (
    <ShowContext.Consumer>
      {(store) => {
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const changeMessageData = (text) => {
          store.dispatch(changeMessageActionCreator(text));
        };

        return (
          <Dialogs
            addMessage={addMessage}
            changeMessageData={changeMessageData}
            contactsData={store.getState().DialogPage.contactsData}
            messageData={store.getState().DialogPage.messageData}
            messageTextAreaData={
              store.getState().DialogPage.messageTextAreaData
            }
          />
        );
      }}
    </ShowContext.Consumer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     contactsData: state.DialogPage.contactsData,
//     messageData: state.DialogPage.messageData,
//     messageTextAreaData: state.DialogPage.messageTextAreaData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       dispatch(addMessageActionCreator());
//     },
//     changeMessageData: (text) => {
//       dispatch(changeMessageActionCreator(text));
//     },
//   };
// };

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
