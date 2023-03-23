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
        height: 50,
        gap: "20px",
      }}
    >
      <FilterByCategory />
      <FilterBySizes />
    </Box>
  );
};

export default ContainerFilters;
