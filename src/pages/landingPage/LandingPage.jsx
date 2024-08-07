import { Box, Typography, Grid2 } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/input/CustomInput";
import CustomCard from "../../components/card/CustomCard";
import { useState } from "react";
import CustomModal from "../../components/modal/CustomModal";

const topics = [
  "Frontend",
  "Backend",
  "Fullstack",
  "DevOps",
  "Mobile",
  "Career",
];

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        my={2}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        p={4}
      >
        <Typography variant="h5" fontWeight="700">
          Webinar
        </Typography>
        <CustomButton onClick={handleOpen} text="Add Webinar" />
        <CustomModal open={open} onClose={handleClose} />
      </Box>
      <br />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        p={4}
      >
        <CustomInput type="search" placeholder="Search for webinar" />
        <CustomInput type="select" label="Topic" options={topics} />
      </Box>
      <Box sx={{ flexGrow: 1 }} p={4}>
        <Grid2
          container
          spacing={{ xs: 7, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          flexWrap="wrap"
          justifyContent="start"
        >
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </Grid2>
      </Box>
    </>
  );
};

export default LandingPage;
