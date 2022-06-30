import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import editModal from "../redux/features/editModalSlice";
import { changeUser, createNewUser } from "../redux/features/dataSlice";
import {
  emailExsist,
  isEmpty,
  validEmail,
  validName,
  noErrors,
} from "./../utils/validations";

const { closeModal, setShowErrors, edit } = editModal.actions;

function EditModal() {
  const { isOpen, user, showErrors } = useSelector((store) => store.editModal);
  const { users } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const [currencyTitle, setCurrencyTitle] = React.useState("");

  React.useEffect(() => {
    if (user.name) {
      setCurrencyTitle(user.name.title);
    }
  }, [isOpen]);

  const handleChangeTitle = (event) => {
    setCurrencyTitle(event.target.value);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleChange = (e) => {
    dispatch(edit({ id: e.target.id, value: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(setShowErrors(true));
    if (noErrors(user, users)) {
      //if user have no id - create a new user
      if (!user.login) {
        dispatch(createNewUser(user));
      }
      //if user have an id - change the user in the users data
      else {
        dispatch(changeUser({ uuid: user.login.uuid, newUser: user }));
      }
      handleClose();
    }
  };

  if (!user.name) {
    return <div></div>;
  }

  const currencies = [
    "Madame",
    "Mrs",
    "Miss",
    "Ms",
    "Mrd",
    "Mr",
    "Monsieur",
    "Mademoiselle",
  ];
  return (
    <Dialog fullWidth={true} maxWidth="lg" open={isOpen} onClose={handleClose}>
      <DialogTitle>Editting (name)</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",

            flexWrap: "nowrap",
          }}
          noValidate
        >
          <TextField
            sx={{ margin: "15px", maxWidth: "fitContent" }}
            select
            label="Title"
            value={currencyTitle}
            id="title"
            /* id is unifined for some reason so I passed it manually */
            onChange={(e) => {
              handleChangeTitle(e);
              handleChange({ target: { id: "title", value: e.target.value } });
            }}
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={{ margin: "15px" }}
            error={!validName(user.name.first) && showErrors}
            helperText={
              !validName(user.name.first) && showErrors
                ? "must have minimum of 3 characters."
                : ""
            }
            id="first"
            defaultValue={user.name.first}
            label="First Name"
            type="text"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            sx={{ margin: "15px" }}
            error={!validName(user.name.last) && showErrors}
            helperText={
              !validName(user.name.last) && showErrors
                ? "must have minimum of 3 characters."
                : ""
            }
            id="last"
            defaultValue={user.name.last}
            label="Last Name"
            type="text"
            variant="standard"
            onChange={handleChange}
          />
        </Box>

        <TextField
          sx={{ margin: "15px" }}
          error={
            (!validEmail(user.email) || emailExsist(user, users)) && showErrors
          }
          helperText={
            !showErrors
              ? ""
              : !validEmail(user.email)
              ? "email is not valid."
              : emailExsist(user, users)
              ? "email already exsist."
              : ""
          }
          autoFocus
          defaultValue={user.email}
          id="email"
          label="Email Address"
          type="email"
          variant="standard"
          onChange={handleChange}
        />
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",

            flexWrap: "nowrap",
          }}
          noValidate
        >
          <TextField
            sx={{ margin: "15px" }}
            error={isEmpty(user.location.country) && showErrors}
            helperText={
              isEmpty(user.location.country) && showErrors
                ? "field cannot be empty."
                : ""
            }
            id="country"
            defaultValue={user.location.country}
            label="Country"
            type="text"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            sx={{ margin: "15px" }}
            error={isEmpty(user.location.state) && showErrors}
            helperText={
              isEmpty(user.location.state) && showErrors
                ? "field cannot be empty."
                : ""
            }
            id="state"
            defaultValue={user.location.state}
            label="State"
            type="text"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            error={isEmpty(user.location.city) && showErrors}
            helperText={
              isEmpty(user.location.city) && showErrors
                ? "field cannot be empty."
                : ""
            }
            sx={{ margin: "15px" }}
            id="city"
            defaultValue={user.location.city}
            label="City"
            type="text"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            error={isEmpty(user.location.street.name) && showErrors}
            helperText={
              isEmpty(user.location.street.name) && showErrors
                ? "field cannot be empty."
                : ""
            }
            sx={{ margin: "15px" }}
            id="street"
            defaultValue={user.location.street.name}
            label="Street"
            type="text"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            error={isEmpty(user.location.street.number) && showErrors}
            helperText={
              isEmpty(user.location.street.number) && showErrors
                ? "field cannot be empty."
                : ""
            }
            sx={{ margin: "15px" }}
            id="number"
            defaultValue={user.location.street.number}
            label="Number"
            type="number"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditModal;
