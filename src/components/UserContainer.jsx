import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

function UsersContainer() {
  // get the users data from store.js
  const { users } = useSelector((store) => store.data);

  return (
    <section className="users-container">
      {users.map((user) => (
        <UserCard key={user.login.uuid} userObject={user} {...user} />
      ))}
    </section>
  );
}

export default UsersContainer;
