import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, onClick = () => _ }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
