import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="auto"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reward Hub
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Centralised platform to manage and keep tack of all your rewards!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join Now
        </Button>
      </CardActions>
    </Card>
  );
}
