import React from "react";
import cl from "./Header.module.css";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/login`;
    history.push(path);
  };

  const logout = () => {
    props.logout();
    props.resetUserDataAC();
  };

  return (
    <header className={cl.header}>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
        alt=""
      />

      <div className={cl.login}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={routeChange}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;
