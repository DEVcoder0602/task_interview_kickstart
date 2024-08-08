import { Modal, Box, Typography } from "@mui/material";
import CustomForm from "../form/CustomForm";

const CustomModal = ({ open, onClose, addWebinar }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
    addWebinar((prev) => [...prev, formData]);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Create Webinar
        </Typography>
        <CustomForm onClose={onClose} onSubmit={handleFormSubmit} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
