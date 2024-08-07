import { Box, Typography, Grid2 } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/input/CustomInput";
import CustomCard from "../../components/card/CustomCard";
import { useState } from "react";
import CustomModal from "../../components/modal/CustomModal";
import DummyImage from "../../assests/dummy.png";
import theme from "../../theme";

const topics = ["Front End Engineering", "Career"];

const cardData = [
  {
    title: "Matthew Martin",
    position: "Lead Front End Developer, Google",
    avatar: <img src={DummyImage} alt="dummy" height={100} width={100} />,
    backgroundColor: theme.palette.purple.main,
    topic: "Front End Engineering",
    content: {
      title: "React and React Native",
      body: "Tuesday, April 22, 4:00 - 5:00 PM",
    },
  },
  {
    title: "IK Expert",
    position: "Leadership Role at a FAANG Company",
    avatar: <img src={DummyImage} alt="dummy" height={100} width={100} />,
    backgroundColor: theme.palette.pink.main,
    topic: "Career",
    content: {
      title: "React and React Native",
      body: "Tuesday, April 22, 4:00 - 5:00 PM",
    },
  },
  {
    title: "Matthew Martin",
    position: "Lead Front End Developer, Google",
    avatar: <img src={DummyImage} alt="dummy" height={100} width={100} />,
    backgroundColor: theme.palette.teal.main,
    topic: "Front End Engineering",
    content: {
      title: "React and React Native",
      body: "Tuesday, April 22, 4:00 - 5:00 PM",
    },
  },
  {
    title: "Matthew Martin",
    position: "Lead Front End Developer, Google",
    avatar: <img src={DummyImage} alt="dummy" height={100} width={100} />,
    backgroundColor: theme.palette.primary.main,
    topic: "Front End Engineering",
    content: {
      title: "React and React Native",
      body: "Tuesday, April 22, 4:00 - 5:00 PM",
    },
  },
  {
    title: "Matthew Martin",
    position: "Lead Front End Developer, Google",
    avatar: <img src={DummyImage} alt="dummy" height={100} width={100} />,
    backgroundColor: theme.palette.yellow.main,
    topic: "Front End Engineering",
    content: {
      title: "React and React Native",
      body: "Tuesday, April 22, 4:00 - 5:00 PM",
    },
  },
  {
    title: "Matthew Martin",
    position: "Lead Front End Developer, Google",
    avatar: <img src={DummyImage} alt="dummy" height={100} width={100} />,
    backgroundColor: theme.palette.green.main,
    topic: "Front End Engineering",
    content: {
      title: "React and React Native",
      body: "Tuesday, April 22, 4:00 - 5:00 PM",
    },
  },
];

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredCard = cardData.filter(
    (item) => item.topic === topic || topic === ""
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
        <CustomModal open={open} onClose={handleClose} />
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
        <CustomInput type="search" placeholder="Search for webinar" />
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
          spacing={{ xs: 7, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
