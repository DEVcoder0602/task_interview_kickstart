import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/input/CustomInput";
import CustomCard from "../../components/card/CustomCard";
import { useState } from "react";
import CustomModal from "../../components/modal/CustomModal";
import { useSelector } from "react-redux";

const topics = ["Front End Engineering", "Career"];

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [search, setSearch] = useState("");
  const webinars = useSelector((state) => state.webinar.webinars);
  const [webinarData, setWebinarData] = useState(webinars);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredCard = webinarData.filter(
    (item) =>
      (item.topic === topic || topic === "") &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* {console.log(filteredCard)} */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        paddingX={4}
        paddingY={2}
      >
        <Typography variant="h5" fontWeight="700">
          Webinar
        </Typography>
        <CustomButton onClick={handleOpen} text="Add Webinar" />
        <CustomModal
          open={open}
          onClose={handleClose}
          addWebinar={setWebinarData}
        />
      </Box>
      <br />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        paddingX={4}
        paddingY={2}
      >
        <CustomInput
          type="search"
          placeholder="Search for webinar"
          item={search}
          setItem={setSearch}
        />
        <CustomInput
          type="select"
          label="Topic"
          options={topics}
          item={topic}
          setItem={setTopic}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }} p={4}>
        <Grid2
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          gap={4}
          flexWrap="wrap"
          justifyContent="start"
        >
          {filteredCard.map((data, index) => (
            <CustomCard cardDetails={data} key={index} />
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default LandingPage;
