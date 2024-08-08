import { Box, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/input/CustomInput";
import CustomCard from "../../components/card/CustomCard";
import { useState } from "react";
import CustomModal from "../../components/modal/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setWebinars } from "../../slices/webinarSlice";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [search, setSearch] = useState("");
  const webinars = useSelector((state) => state.webinar.webinars);
  const [webinarData, setWebinarData] = useState(webinars);
  const [updatedData, setUpdatedData] = useState({});
  const dispatch = useDispatch();

  const topics = [...new Set(webinarData?.map((item) => item.topic))];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUpdatedData({});
  };

  const filteredCard = webinarData.filter(
    (item) =>
      (item.topic === topic || topic === "") &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const newData = webinarData.filter((item) => item.id !== id);
    setWebinarData(newData);
  };

  const handleEdit = (data) => {
    setOpen(true);
    setUpdatedData(data);
  };

  const handleWebinarData = (updatedWebinar) => {
    const checkWebinar = webinarData.find(
      (webinar) => webinar.id === updatedWebinar.id
    );

    let updatedWebinarData;

    if (checkWebinar) {
      updatedWebinarData = webinarData.map((webinar) =>
        webinar.id === updatedWebinar.id ? updatedWebinar : webinar
      );
    } else {
      updatedWebinarData = [...webinarData, updatedWebinar];
    }

    setWebinarData(updatedWebinarData);
    dispatch(setWebinars(updatedWebinarData));
    setUpdatedData({});
    handleClose();
  };

  return (
    <>
      {/* {console.log(filteredCard)} */}
      <Box
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
        <CustomModal
          open={open}
          onClose={handleClose}
          addWebinar={handleWebinarData}
          updatedData={updatedData}
        />
      </Box>
      <Divider sx={{ marginLeft: "32px" }} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        p={4}
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
      <Box p={4}>
        <Grid2
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          gap={4}
          flexWrap="wrap"
          // justifyContent="space-between"
        >
          {filteredCard.map((data, index) => (
            <CustomCard
              cardDetails={data}
              key={data.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default LandingPage;
