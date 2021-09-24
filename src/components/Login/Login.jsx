import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  FieldsForLogin,
  maxLength,
  minLength,
  email,
  fieldRequired,
} from "../../Validators/FieldLevelValidators/FieldLevelValidators";
import { login } from "../../redux/authReducer";
import { loadPersonalDataTC } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import cl from "./Login.module.css";

const maxLength30 = maxLength(30);
const minLength5 = minLength(5);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          label="Email"
          name="email"
          component={FieldsForLogin}
          type="email"
          validate={[email, fieldRequired, maxLength30, minLength5]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={FieldsForLogin}
          type="password"
          label="Password"
          validate={[minLength5, fieldRequired, maxLength30]}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> Remeber me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>

      {props.error && <div className={cl.error}>{props.error}</div>}
    </form>
  );
};

const LoginFormComponent = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const submit = (values) => {
    console.log(values);
    props.login(values.email, values.password, values.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <section>
      <h1>Login Page</h1>
      <LoginFormComponent onSubmit={submit} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login, loadPersonalDataTC })(Login);
