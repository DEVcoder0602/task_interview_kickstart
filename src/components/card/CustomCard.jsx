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
        title={cardDetails.name}
        titleTypographyProps={{ fontSize: "1.5rem", color: "white" }}
        subheader={`${cardDetails.role}, ${cardDetails.company}`}
        subheaderTypographyProps={{ color: "White" }}
        avatar={
          <img
            src={cardDetails.photoUrl}
            alt="dummy"
            height={100}
            width={100}
            style={{ borderRadius: "10px" }}
          />
        }
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
          {cardDetails.title}
        </Typography>
        <Typography variant="body2" color="black">
          {cardDetails.startDate}, {cardDetails.startTime} -{" "}
          {cardDetails.endTime}
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
