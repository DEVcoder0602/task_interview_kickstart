import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImageUpload from "../imageUpload/ImageUpload";
import {
  TimePicker,
  LocalizationProvider,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

const CustomForm = ({ onClose, onSubmit, updatedData }) => {
  const [formData, setFormData] = useState(
    updatedData?.id
      ? updatedData
      : {
          id: uuidv4(),
          name: "",
          photoUrl: "",
          backgroundColor: getRandomColor(),
          role: "",
          company: "",
          topic: "",
          title: "",
          startDate: dayjs().format("D MMM YYYY"),
          startTime: dayjs().format("hh:mm A"),
          endTime: dayjs().format("hh:mm A"),
        }
  );

  const handleClose = () => {
    setFormData({});
    onClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateTimeChange = (newValue, field) => {
    let formatedData = "";
    if (field === "startTime" || field === "endTime") {
      formatedData = dayjs(newValue).format("hh:mm A");
      setFormData((prev) => ({ ...prev, [field]: formatedData }));
      return;
    }
    formatedData = dayjs(newValue).format("D MMM YYYY");
    setFormData((prev) => ({ ...prev, [field]: formatedData }));
  };

  const handleImageUpload = (imageData) => {
    setFormData((prev) => ({ ...prev, photoUrl: imageData }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box paddingX={3}>
        <Grid2 container gap={2} flexDirection="row" alignItems="center">
          <PeopleOutlineOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography variant="body1" fontWeight={500}>
            Instructor Details
          </Typography>
        </Grid2>
        <Grid2 container spacing={3} paddingLeft="45px" marginY={1}>
          <Grid2
            container
            flexDirection="column"
            flex={1}
            justifyContent="space-between"
            // border="2px solid green"
          >
            <Grid2 item md={12} paddingY="6px">
              <Typography variant="caption" fontWeight={600} marginBottom={1}>
                Instructor Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                name="name"
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
                  "& .MuiOutlinedInput-input": { padding: "8px" },
                }}
              />
            </Grid2>

            <Grid2 xs={12} paddingY="6px">
              <Typography variant="caption" fontWeight={600} marginBottom={1}>
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
                  "& .MuiOutlinedInput-input": { padding: "8px" },
                }}
              />
            </Grid2>
            <Grid2 xs={12} paddingY="6px">
              <Typography variant="caption" fontWeight={600} marginBottom={1}>
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
                  "& .MuiOutlinedInput-input": { padding: "6px 10px" },
                }}
              />
            </Grid2>
          </Grid2>
          <Grid2
            container
            flex={1}
            flexDirection="column"
            // sx={{ border: "2px solid red" }}
          >
            <Grid2 item xs={12} sm={6}>
              {/* Instructor Image input field */}
              <ImageUpload
                onImageUpload={handleImageUpload}
                imageUrl={formData.photoUrl}
              />
            </Grid2>
            <Grid2
              item
              xs={12}
              sm={6}
              sx={{ "&.MuiGrid2-root": { width: "100%", padding: "8px" } }}
            >
              <Grid2 xs={12}>
                <Typography variant="caption" fontWeight={600} marginBottom={1}>
                  Topic <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  name="topic"
                  placeholder="Enter Topic"
                  variant="outlined"
                  fullWidth
                  required
                  defaultValue={formData.topic}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: "#F2F4F8",
                      borderColor: "#E3E7EC",
                    },
                    "& .MuiOutlinedInput-input": { padding: "6px 10px" },
                  }}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          container
          gap={2}
          flexDirection="row"
          alignItems="center"
          marginY={2}
        >
          <VideocamOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography variant="body1" fontWeight={500}>
            Webinar Details
          </Typography>
        </Grid2>
        <Grid2 container spacing={2} flexDirection="row" paddingLeft="45px">
          <Grid2 container spacing={2} flexDirection="column" flex={1}>
            <Grid2 item xs={12}>
              <Typography variant="caption" fontWeight={600}>
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
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#F2F4F8",
                    borderColor: "#E3E7EC",
                  },
                  "& .MuiOutlinedInput-input": { padding: "6px 10px" },
                }}
              />
            </Grid2>
            <Grid2 container flexDirection="row" flexWrap="nowrap">
              <Grid2 spacing={2} flexDirection="column">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    display="block"
                  >
                    Start Date <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <DatePicker
                    defaultValue={dayjs(formData.startDate)}
                    disablePast
                    onChange={(newValue) =>
                      handleDateTimeChange(newValue, "startDate")
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        backgroundColor: "#F2F4F8",
                        borderColor: "#E3E7EC",
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "6px",
                        width: "100px",
                        fontSize: "14px",
                      },
                    }}
                    slotProps={{
                      input: {
                        renderInput: (params) => (
                          <TextField {...params} required />
                        ),
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid2>
              <Grid2 spacing={2} flexDirection="column">
                <Typography variant="caption" fontWeight={600} display="block">
                  Start Time <span style={{ color: "red" }}>*</span>
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    defaultValue={dayjs(formData.startTime, "hh:mm A")}
                    disablePast
                    onChange={(newValue) =>
                      handleDateTimeChange(newValue, "startTime")
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        backgroundColor: "#F2F4F8",
                        borderColor: "#E3E7EC",
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "6px",
                        width: "100px",
                        fontSize: "14px",
                      },
                    }}
                    slotProps={{
                      input: {
                        renderInput: (params) => (
                          <TextField {...params} required />
                        ),
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid2>
              <Grid2 item xs={12} sm={4}>
                <Typography variant="caption" fontWeight={600} display="block">
                  End Time <span style={{ color: "red" }}>*</span>
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    defaultValue={dayjs(formData.endTime, "hh:mm A")}
                    minTime={dayjs(formData.startTime, "hh:mm A")}
                    disablePast
                    onChange={(newValue) =>
                      handleDateTimeChange(newValue, "endTime")
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        backgroundColor: "#F2F4F8",
                        borderColor: "#E3E7EC",
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "6px",
                        width: "100px",
                        fontSize: "14px",
                      },
                    }}
                    slotProps={{
                      input: {
                        renderInput: (params) => (
                          <TextField {...params} required />
                        ),
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
      <Divider sx={{ marginY: "16px" }} />
      <Grid2 container marginY={2} flexDirection="row" paddingX={3}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            padding: "8px 10px",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "12px",
          }}
        >
          {updatedData.id ? "Update Webinar" : "Create Webinar"}
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={handleClose}
          sx={{ textTransform: "none", fontSize: "10px" }}
        >
          Cancel
        </Button>
      </Grid2>
    </Box>
  );
};
export default CustomForm;
