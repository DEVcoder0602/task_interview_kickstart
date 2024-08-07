import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Grid2,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ImageUpload from "../imageUpload/ImageUpload";

const topics = [
  "Frontend",
  "Backend",
  "Fullstack",
  "DevOps",
  "Mobile",
  "Career",
];

const CustomForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    role: "",
    company: "",
    topic: "",
    title: "",
    startDate: new Date(),
    startTime: new Date().toLocaleTimeString(),
    endTime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // onClose();
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <CustomInput
    //     label="Name"
    //     placeholder="Enter Instructor Name"
    //     name="instructorName"
    //     onChange={handleChange}
    //     value={formData.name}
    //   />
    //   <CustomInput
    //     label="Instructor Image"
    //     name="instructorPhoto"
    //     onChange={handleChange}
    //     value={formData.photo}
    //   />
    //   <CustomInput
    //     label="Role"
    //     placeholder="Enter Instructor Role"
    //     name="instructorRole"
    //     onChange={handleChange}
    //     value={formData.role}
    //   />
    //   <CustomInput
    //     label="Company"
    //     placeholder="Enter Instructor Company"
    //     name="instructorCompany"
    //     onChange={handleChange}
    //     value={formData.company}
    //   />
    //   <CustomInput
    //     type="select"
    //     options={topics}
    //     label="Topic"
    //     name="webinarTopic"
    //     onChange={handleChange}
    //     value={formData.topic}
    //   />
    //   <CustomInput
    //     label="Webinar Title"
    //     placeholder="Enter Webinar Title"
    //     name="webinarTitle"
    //     onChange={handleChange}
    //     value={formData.title}
    //   />
    //   <CustomInput
    //     type="date"
    //     label="Start Date"
    //     name="startDate"
    //     onChange={handleChange}
    //     value={formData.startDate}
    //   />
    //   <CustomInput
    //     type="time"
    //     label="Start Time"
    //     name="startTime"
    //     onChange={handleChange}
    //     value={formData.startTime}
    //   />
    //   <CustomInput
    //     type="time"
    //     label="End Time"
    //     name="endTime"
    //     onChange={handleChange}
    //     value={formData.endTime}
    //   />
    //   <Button type="submit" variant="contained" color="primary">
    //     Create Webinar
    //   </Button>
    //   <Button variant="text" color="primary" onClick={() => onClose()}>
    //     Cancel
    //   </Button>
    // </form>
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" component="div" gutterBottom>
        Instructor Details
      </Typography>
      <Grid2
        container
        spacing={2}
        flexDirection="row"
        // justifyContent="space-evenly"
      >
        <Grid2 container spacing={4} flexDirection="column" flex={1}>
          <Grid2 xs={12} sm={6}>
            <Typography variant="body1" fontWeight={600} marginBottom={1}>
              Instructor Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="instructorName"
              placeholder="Enter Instructor Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                },
              }}
            />
          </Grid2>

          <Grid2 xs={12}>
            <Typography variant="body1" fontWeight={600} marginBottom={1}>
              Instructor Role <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="instructorRole"
              placeholder="Enter instructor role"
              variant="outlined"
              fullWidth
              value={formData.role}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                },
              }}
            />
          </Grid2>
          <Grid2 xs={12}>
            <Typography variant="body1" fontWeight={600} marginBottom={1}>
              Instructor Company <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="instructorCompany"
              placeholder="Enter instructor company"
              variant="outlined"
              fullWidth
              required
              value={formData.company}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                },
              }}
            />
          </Grid2>
        </Grid2>
        <Grid2 container flex={1} flexDirection="column" gap={3}>
          <Grid2 item xs={12} sm={6}>
            {/* Instructor Image input field */}
            <ImageUpload />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography variant="body1" fontWeight={600} marginBottom={1}>
                Topics <span style={{ color: "red" }}>*</span>
              </Typography>
              <Select
                id="custom-select"
                value={formData.topic}
                onChange={handleChange}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                }}
              >
                {topics.map((topic, index) => (
                  <MenuItem key={index} value={topic}>
                    {topic}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
      </Grid2>

      <Typography variant="h5" component="div" gutterBottom marginY={5}>
        Webinar Details
      </Typography>
      <Grid2 container spacing={2} flexDirection="column">
        <Grid2 item xs={12}>
          <Typography variant="body1" fontWeight={600} marginBottom={1}>
            Webinar title <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            id="webinarTitle"
            placeholder="Enter webinar title"
            variant="outlined"
            fullWidth
            value={formData.title}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          Start Date : {formData.startDate}
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          Start Time input field: {formData.startTime}
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          End Time input field
        </Grid2>
      </Grid2>
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Button variant="text" color="primary" onClick={() => onClose()}>
        Cancel
      </Button>
    </Box>
  );
};
export default CustomForm;
