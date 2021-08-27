import React from "react";
import cl from "./Header.module.css";
// import "./../App.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
        alt=""
      />
    </header>
  );
};

export default Header;
