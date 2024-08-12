import { Modal, Box, Typography, Divider, Dialog } from "@mui/material";
import CustomForm from "../form/CustomForm";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, onClose, addWebinar, updatedData }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40em",
    height: "39em",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 4,
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData);
    addWebinar(formData);
    // onClose();
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(5px)" }}>
      <Box sx={style}>
        <Grid2
          container
          spacing={2}
          flexDirection="row"
          justifyContent="space-between"
          marginX={3}
          marginY={2}
        >
          <Typography variant="h6" component="h2">
            Create webinar
          </Typography>
          <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
        </Grid2>
        <Divider sx={{ marginY: "12px" }} />
        <CustomForm
          onClose={onClose}
          onSubmit={handleFormSubmit}
          updatedData={updatedData}
        />
      </Box>
    </Modal>
  );
};

export default CustomModal;
