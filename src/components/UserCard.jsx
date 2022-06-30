import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function UserCard({
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
  return (
    <div className="user-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="100"
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
          <Button size="small">Remove</Button>
          <Button size="small">More Details</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UserCard;
