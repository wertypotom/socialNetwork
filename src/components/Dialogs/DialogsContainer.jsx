import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hok/withAuthRedirect";
import { compose } from "redux";

const mapStateToConnect = (state) => {
  return {
    contactsData: state.DialogPage.contactsData,
    messageData: state.DialogPage.messageData,
    messageTextAreaData: state.DialogPage.messageTextAreaData,
  };
};

const mapDispatchToConnect = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToConnect, mapDispatchToConnect),
  withAuthRedirect
)(Dialogs);
