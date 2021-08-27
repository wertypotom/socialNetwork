import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = ({
  addMessage,
  changeMessageData,
  contactsData,
  messageData,
  messageTextAreaData,
}) => {
  const onAddMessage = () => {
    addMessage();
  };

  const onChangeMessageData = (e) => {
    const text = e.target.value;
    changeMessageData(text);
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

        <textarea
          // ref={windowElement}
          placeholder="enter your message..."
          value={messageTextAreaData}
          onChange={onChangeMessageData}
          cols="30"
          rows="5"
        />

        <div>
          <button onClick={onAddMessage}>text me</button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
