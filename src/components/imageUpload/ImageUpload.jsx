import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function ImageUpload({ onImageUpload, imageUrl = null }) {
  const [imagePreview, setImagePreview] = useState(imageUrl);

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
          marginBottom: "2px",
          textAlign: "Start",
          fontWeight: "bold",
          fontSize: "0.75em",
        }}
      >
        Instructor Image
      </label>
      <div
        style={{
          width: "8em",
          height: "7em",
          border: "2px dashed #D9DBDC",
          backgroundColor: "#F2F4F8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "12px",
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
          <AddIcon style={{ fontSize: "60px", color: "#636973" }} />
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
