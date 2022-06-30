import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { store } from "./../redux/store";

function UsersContainer() {
  // get the users data from store.js
  const { users } = useSelector((store) => store.data);
  console.log(users);
  return (
    <section className="users-container">
      {users.map((user) => (
        <UserCard key={user.login.uuid} {...user} />
      ))}
    </section>
  );
}

export default UsersContainer;
