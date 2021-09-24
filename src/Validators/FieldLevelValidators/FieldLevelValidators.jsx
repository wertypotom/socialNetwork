import React from "react";
import cl from "./FieldLevelValidators.module.css";

// ----------------------- components
export const FieldsForLogin = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className={touched && (error || warning) && cl.hasError}
        />
        {touched &&
          ((error && <span className={cl.errorText}>{error}</span>) ||
            (warning && <span className={cl.errorText}>{warning}</span>))}
      </div>
    </div>
  );
};

export const MessageTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <textarea {...input} type={type} placeholder="enter your message..." />
    </div>
  );
};

export const PostTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <textarea {...input} type={type} placeholder="type your post..." />
    </div>
  );
};

// ------------------------- validating conditions
export const isEmptyText = (max) => (value) =>
  value ? undefined : "Input something";

export const fieldRequired = (value) => (value ? undefined : "Required");

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
