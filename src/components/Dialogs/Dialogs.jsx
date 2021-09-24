import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

import { Field, reduxForm, reset } from "redux-form";
import { MessageTextArea } from "../../Validators/FieldLevelValidators/FieldLevelValidators";

const InputForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={MessageTextArea} name="message" type="text" />
      <div>
        <button disabled={props.invalid || props.submitting || props.pristine}>
          text me
        </button>
      </div>
    </form>
  );
};

const InputMessageComponent = reduxForm({
  form: "login",
})(InputForm);

const Dialogs = ({ addMessage, contactsData, messageData }) => {
  const submit = (values, dispatch) => {
    console.log(values);
    addMessage(values.message);
    dispatch(reset("login"));
  };

  return (
    <section className={cl.dialogContainer}>
      <div className={cl.contacts}>
        {contactsData.map((item) => {
          const { id, name, path, imgUrl } = item;
          return (
            <div key={id} className={cl.contact}>
              <img className={cl.profileImage} src={imgUrl} alt="profile" />
              <span className={cl.span}>
                <NavLink to={`/dialogs/${path}`}>{name}</NavLink>
              </span>
            </div>
          );
        })}
      </div>

      <div className={cl.messages}>
        {messageData.map((item) => {
          const { id, text } = item;
          return (
            <div key={id} className={cl.message}>
              - {text}
            </div>
          );
        })}

        <InputMessageComponent onSubmit={submit} />
      </div>
    </section>
  );
};

export default Dialogs;
