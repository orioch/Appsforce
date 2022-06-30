import { useSelector } from "react-redux";

export const validEmail = (email) => {
  let filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(email).search(filter) != -1;
};

export const emailExsist = (user, users) => {
  //if its a new user and it dosent have an id yet - check only if mail dosent exsist
  if (!user.login) {
    for (const u of users) {
      if (u.email === user.email) return true;
    }
    // else (if its not a new user) check if mail dosent exist but ignore user with the same id
  } else {
    for (const u of users) {
      if (u.email === user.email && u.login.uuid !== user.login.uuid)
        return true;
    }
  }
  return false;
};

export const validName = (name) => {
  return name.length >= 3;
};

export const isEmpty = (field) => {
  return field.length === 0;
};

export const noErrors = (user, users) => {
  return (
    validEmail(user.email) &&
    !emailExsist(user, users) &&
    validName(user.name.first) &&
    validName(user.name.last) &&
    !isEmpty(user.location.country) &&
    !isEmpty(user.location.state) &&
    !isEmpty(user.location.city) &&
    !isEmpty(user.location.street.name) &&
    !isEmpty(user.location.street.number)
  );
};
