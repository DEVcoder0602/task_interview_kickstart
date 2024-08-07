import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const CustomCard = ({ cardDetails }) => {
  return (
    <Card sx={{ maxWidth: 400, padding: "20px", borderRadius: "24px" }}>
      <CardHeader
        title={cardDetails.title}
        titleTypographyProps={{ fontSize: "1.5rem", color: "white" }}
        subheader={cardDetails.position}
        subheaderTypographyProps={{ color: "White" }}
        avatar={cardDetails.avatar}
        sx={{
          backgroundColor: cardDetails.backgroundColor,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          borderRadius: "16px",
        }}
      />
      <CardContent>
        <Typography
          variant="body1"
          color={cardDetails.backgroundColor}
          fontWeight="600"
        >
          {cardDetails.topic}
        </Typography>
        <Typography variant="h6" color="black" fontWeight="600">
          {cardDetails.content.title}
        </Typography>
        <Typography variant="body2" color="black">
          {cardDetails.content.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          disableElevation={true}
          sx={{
            backgroundColor: "#F9E8E8",
            color: "#D14040",
            borderRadius: "16px",
          }}
        >
          Delete
        </Button>
        <Button variant="text" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
