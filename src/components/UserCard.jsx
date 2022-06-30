import React from "react";
import { useDispatch } from "react-redux";
import editModal from "../redux/features/editModalSlice";
import confirmModal from "../redux/features/confirmModalSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function UserCard({
  userObject,
  cell,
  dob,
  email,
  gender,
  id,
  location,
  login,
  name,
  nat,
  phone,
  picture,
  registered,
}) {
  const dispatch = useDispatch();
  const openEditModal = (user) => {
    dispatch(editModal.actions.openModal({ showErrors: true, user: user }));
  };
  const openConfirmModal = (user) => {
    dispatch(confirmModal.actions.openModal(user));
  };
  return (
    <div className="user-card">
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="300"
          image={picture.large}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.title + " " + name.first + " " + name.last}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location.state}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => openConfirmModal(userObject)} size="small">
            Remove
          </Button>
          <Button onClick={() => openEditModal(userObject)} size="small">
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UserCard;
