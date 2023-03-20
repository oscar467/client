import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <img
        src={
          "https://res.cloudinary.com/dfdzlzu79/image/upload/v1679065110/carrousel1.png"
        }
        alt={"banner"}
        style={{ width: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#f5b727cc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#d9d9d966",
          borderRadius: "10px",
        }}
      >
        <h1>Summer sales</h1>
        <h2>Up to 50% off</h2>
      </div>
    </div>
  );
};

export default Banner;
