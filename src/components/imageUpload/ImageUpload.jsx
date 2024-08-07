import React from "react";
import AddIcon from "@mui/icons-material/Add";

function ImageUpload() {
  const handleUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      console.log(file); // Handle the file upload here, e.g., send it to a server or display a preview
    };
    fileInput.click();
  };

  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          textAlign: "Start",
          fontWeight: "bold",
        }}
      >
        Instructor Image
      </label>
      <div
        style={{
          width: "160px",
          height: "160px",
          border: "2px dashed #D9DBDC",
          backgroundColor: "#F2F4F8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "8px",
        }}
        onClick={handleUploadClick}
      >
        <AddIcon style={{ fontSize: "60px" }} />
      </div>
    </div>
  );
}

export default ImageUpload;
