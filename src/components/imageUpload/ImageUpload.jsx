import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function ImageUpload({ onImageUpload }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
          onImageUpload(e.target.result);
        };
        reader.readAsDataURL(file);
      }
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
          width: "150px",
          height: "150px",
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
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        ) : (
          <AddIcon style={{ fontSize: "60px" }} />
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
