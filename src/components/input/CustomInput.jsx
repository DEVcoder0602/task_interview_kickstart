import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";

export default function CustomInput({
  type = "text",
  options = [],
  label = "",
  item = "",
  setItem = () => _,
}) {
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  if (type === "select") {
    return (
      <FormControl sx={{ width: "25%" }}>
        <InputLabel id="custom-input-label">{label}</InputLabel>
        <Select
          labelId="custom-input-label"
          id="custom-select"
          value={item}
          label={label}
          placeholder="Topic"
          onChange={handleChange}
          sx={{ borderRadius: "18px" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((topic, index) => (
            <MenuItem key={index} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    return (
      <TextField
        type={type}
        variant="outlined"
        placeholder="Search for webinar"
        value={item}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
