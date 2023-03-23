import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FilterByCategory from "./FilterByCategory";
import FilterBySizes from "./FilterBySizes";

const ContainerFilters = () => {
  return (
    <Box
      sx={{
        mb: 2,
        width: "100%",
        height: 50,
        ml: 4,
        display: { xs: "none", md: "block" },
        display: "flex",
        gap: "20px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontFamily: "Radley, serif" }}>
        Filtrar por:{" "}
      </Typography>
      <FilterByCategory />
      <FilterBySizes />
    </Box>
  );
};

export default ContainerFilters;
