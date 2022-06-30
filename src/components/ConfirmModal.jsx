import React from "react";
import confirmModal from "../redux/features/confirmModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/features/dataSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ConfirmModal() {
  const { isOpen, user } = useSelector((store) => store.confirmModal);
  const { users } = useSelector((store) => store.data);
  const { closeModal } = confirmModal.actions;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeUser(user));
    handleClose();
  };
  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!user.name) {
    return <div></div>;
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to remove{" "}
          {user.name.first + " " + user.name.last}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once deleted, you can't restore this user.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleRemove} autoFocus>
            i am sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmModal;
