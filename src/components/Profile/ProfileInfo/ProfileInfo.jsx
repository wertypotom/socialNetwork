import React from "react";
import cl from "./ProfileInfo.module.css";
import needJob from "../../../assets/images/happy-emoji.png";
import dontNeedJob from "../../../assets/images/no-need-emoji.png";
import StatusArea from "./StatusArea/StatusArea";
import { Field, reduxForm, reset } from "redux-form";
import { PostTextArea } from "../../../Validators/FieldLevelValidators/FieldLevelValidators";

const InputForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={PostTextArea}
        name="post"
        placeholder="type your post..."
        type="text"
      />

      <div>
        <button disabled={props.invalid || props.submitting || props.pristine}>
          post me
        </button>
      </div>
    </form>
  );
};

const InputMessageComponent = reduxForm({
  form: "wallPost",
})(InputForm);

const ProfileInfo = (props) => {
  if (!props.userData) {
    return <div></div>;
  }

  const submit = (values, dispatch) => {
    console.log(values);
    props.addPost(values.post);
    dispatch(reset("wallPost"));
  };

  return (
    <section className={cl.ProfileInfoPage}>
      {/* status of random user, we can change it then */}
      <StatusArea status={props.status} updateStatus={props.updateStatus} />

      {/* some user profile displayed here */}
      <article className={cl.anyUserProfile}>
        <div className={cl.leftPartOfAnyUserProfile}>
          <p>{props.userData.fullName}</p>
          <img
            src={props.userData.photos.small}
            alt="some user profile avatar"
          />
          <p>{props.userData.aboutMe}</p>
        </div>
        <div className={cl.rightPartOfAnyUserProfile}>
          <div className={cl.aboutWorkSearch}>
            <p>Professional staus: </p>
            <div>
              {" "}
              <img
                src={props.userData.lookingForAJob ? needJob : dontNeedJob}
                alt=""
              />
              <p>{props.userData.lookingForAJobDescription}</p>
            </div>
          </div>
          <div className={cl.aboutContacts}>
            <p>My contacts:</p>
            <div>
              {props.userData.contacts.facebook ? (
                <p>{props.userData.contacts.facebook}</p>
              ) : null}
              {props.userData.contacts.website ? (
                <p>{props.userData.contacts.website}</p>
              ) : null}
              {props.userData.contacts.vk ? (
                <p>{props.userData.contacts.vk}</p>
              ) : null}
              {props.userData.contacts.twitter ? (
                <p>{props.userData.contacts.twitter}</p>
              ) : null}
              {props.userData.contacts.youtube ? (
                <p>{props.userData.contacts.youtube}</p>
              ) : null}
              {props.userData.contacts.github ? (
                <p>{props.userData.contacts.github}</p>
              ) : null}
              {props.userData.contacts.mainLink ? (
                <p>{props.userData.contacts.mainLink}</p>
              ) : null}
            </div>
          </div>
        </div>
      </article>

      {/* input post */}
      <InputMessageComponent onSubmit={submit} />
    </section>
  );
};

export default ProfileInfo;
