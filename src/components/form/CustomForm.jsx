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
import {
  TimePicker,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import dayjs from "dayjs";

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
    startDate: dayjs(Date.now()),
    startTime: dayjs(Date.now().toLocaleString()),
    endTime: dayjs(Date.now().toLocaleString()),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateTimeChange = (newValue, field) => {
    setFormData((prev) => ({ ...prev, [field]: newValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" component="div" gutterBottom>
        Instructor Details
      </Typography>
      <Grid2 container spacing={2} flexDirection="row">
        <Grid2 container spacing={4} flexDirection="column" flex={1}>
          <Grid2 xs={12} sm={6}>
            <Typography variant="body1" fontWeight={600} marginBottom={1}>
              Instructor Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              id="name"
              name="instructorName"
              placeholder="Enter Instructor Name"
              variant="outlined"
              fullWidth
              required
              defaultValue={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                },
                "& .MuiOutlinedInput-input": { padding: "10px" },
              }}
            />
          </Grid2>

          <Grid2 xs={12}>
            <Typography variant="body1" fontWeight={600} marginBottom={1}>
              Instructor Role <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              name="role"
              placeholder="Enter instructor role"
              variant="outlined"
              fullWidth
              required
              defaultValue={formData.role}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                },
                "& .MuiOutlinedInput-input": { padding: "10px" },
              }}
            />
          </Grid2>
          <Grid2 xs={12}>
            <Typography variant="body1" fontWeight={600} marginBottom={1}>
              Instructor Company <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              name="company"
              placeholder="Enter instructor company"
              variant="outlined"
              fullWidth
              required
              defaultValue={formData.company}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                },
                "& .MuiOutlinedInput-input": { padding: "10px" },
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
                name="topic"
                defaultValue=""
                onChange={handleChange}
                required
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#F2F4F8",
                  borderColor: "#E3E7EC",
                  "& .MuiOutlinedInput-input": { padding: "10px" },
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

      <Typography variant="h5" component="div" gutterBottom marginY={3}>
        Webinar Details
      </Typography>
      <Grid2 container spacing={2} flexDirection="column">
        <Grid2 item xs={12}>
          <Typography variant="body1" fontWeight={600}>
            Webinar title <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            name="title"
            placeholder="Enter webinar title"
            variant="outlined"
            fullWidth
            required
            defaultValue={formData.title}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-input": { padding: "10px" },
            }}
          />
        </Grid2>
        <Grid2 container spacing={2} flexDirection="row">
          <Grid2 item xs={12} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Typography variant="body1" fontWeight={600}>
                Start Date <span style={{ color: "red" }}>*</span>
              </Typography>
              <DatePicker
                defaultValue={formData.startDate}
                onChange={(newValue) =>
                  handleDateTimeChange(newValue, "startDate")
                }
                sx={{
                  "& .MuiInputBase-input": { padding: "8px", width: "8em" },
                }}
                slotProps={{
                  input: {
                    renderInput: (params) => <TextField {...params} required />,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="body1" fontWeight={600}>
              Start Time <span style={{ color: "red" }}>*</span>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                defaultValue={formData.startTime}
                onChange={(newValue) =>
                  handleDateTimeChange(newValue, "startTime")
                }
                sx={{
                  "& .MuiInputBase-input": { padding: "8px", width: "8em" },
                }}
                renderInput={(params) => <TextField {...params} required />}
              />
            </LocalizationProvider>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="body1" fontWeight={600}>
              End Time <span style={{ color: "red" }}>*</span>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                defaultValue={formData.endTime}
                onChange={(newValue) =>
                  handleDateTimeChange(newValue, "endTime")
                }
                sx={{
                  "& .MuiInputBase-input": { padding: "8px", width: "8em" },
                }}
                renderInput={(params) => <TextField {...params} required />}
              />
            </LocalizationProvider>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 container marginY={2} flexDirection="row">
        <Button type="submit" variant="contained">
          Create Webinar
        </Button>
        <Button variant="text" color="primary" onClick={() => onClose()}>
          Cancel
        </Button>
      </Grid2>
    </Box>
  );
};
export default CustomForm;
