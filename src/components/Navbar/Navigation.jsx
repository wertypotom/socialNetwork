import React from "react";
import cl from "./navigation.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <section className={cl.navBarSection}>
      <nav className={cl.nav}>
        {props.links.map((link) => {
          const { text, path, id } = link;
          return (
            <div className={cl.text} key={id}>
              <NavLink activeClassName={cl.active} to={path}>
                {text}
              </NavLink>
            </div>
          );
        })}
      </nav>
      <div className={cl.navContacts}>
        {props.usersData.map((data) => {
          const { imgUrl, id } = data;

          return (
            <div key={id}>
              <img src={imgUrl} alt="friends profiles" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Navbar;
