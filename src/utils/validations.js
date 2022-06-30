import { useSelector } from "react-redux";

export const validEmail = (email) => {
  let filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(email).search(filter) != -1;
};

export const emailExsist = (email, currentUuid, users) => {
  for (const user of users) {
    if (user.email === email && user.login.uuid !== currentUuid) return true;
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
    !emailExsist(user.email, user.login.uuid, users) &&
    validName(user.name.first) &&
    validName(user.name.last) &&
    !isEmpty(user.location.country) &&
    !isEmpty(user.location.state) &&
    !isEmpty(user.location.city) &&
    !isEmpty(user.location.street.name) &&
    !isEmpty(user.location.street.number)
  );
};
