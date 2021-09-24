import React from "react";
import cl from "./Users.module.css";
import defaultProfilePicture from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const numberOfPages = Math.ceil(
    props.totalUsersCount / props.numOfUsersPerPage
  );

  let numberOfPagesArray = [];
  for (let i = 1; i <= numberOfPages; i++) {
    numberOfPagesArray.push(i);
  }

  return (
    <section>
      <div className={cl.pagination}>
        {numberOfPagesArray.map((page) => {
          return (
            <span
              className={props.currentPage === page ? cl.activePage : ""}
              onClick={() => {
                props.pageChange(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      <div className={cl.usersContainer}>
        {props.users.map((user) => {
          const { id, photos, name, followed } = user;
          return (
            <article key={id} className={cl.singleUserContainer}>
              <div className={cl.imageAndButton}>
                <NavLink to={`/profile/${id}`}>
                  <img
                    className={cl.profileImage}
                    src={photos.small ? photos.small : defaultProfilePicture}
                    alt="users"
                  />
                </NavLink>
                {followed ? (
                  <button
                    className={cl.button}
                    onClick={() => {
                      props.unfollow(id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    className={cl.button}
                    onClick={() => {
                      props.follow(id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
              <div className={cl.userInfo}>
                <div className={cl.nameAndStatus}>
                  <p>{name}</p>
                  <p>{"status"}</p>
                </div>
                <div className={cl.birthPlace}>
                  <p>{"birthPlace.country"}</p>
                  <p>{"birthPlace.city"}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Users;
