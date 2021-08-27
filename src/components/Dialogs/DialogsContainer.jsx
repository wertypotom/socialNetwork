import {
  changeMessageActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    contactsData: state.DialogPage.contactsData,
    messageData: state.DialogPage.messageData,
    messageTextAreaData: state.DialogPage.messageTextAreaData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    changeMessageData: (text) => {
      dispatch(changeMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
