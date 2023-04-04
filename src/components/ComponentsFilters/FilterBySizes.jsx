import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { filterBySize } from "../../redux/actions/productsActions";
import { makeStyles } from "@mui/styles";
const items = ["Todos", "S", "M", "L", "XL"];

const useStyles = makeStyles((theme) => ({
  acordion: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow: "5px 5px 5px grey",
    alignItems: "center",
    borderShadow: "100px",
    borderRadius: "5px",
  },
}));

const FilterBySizes = () => {
  const dispatch = useDispatch();
  const [stateR, setStateR] = React.useState({
    name: "",
    check: false,
  });
  const handleFilterBySizes = (e) => {
    setStateR({
      name: e.target.value,
      check: true,
    });
    dispatch(filterBySize(e.target.value));
  };
  const classes = useStyles();
  return (
    <Accordion className={classes.acordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Tallas</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ height: 220 }} className={classes.acordion}>
        <RadioGroup>
          {items.map((item) => (
            <FormControlLabel
              value={item}
              key={item}
              onChange={handleFilterBySizes}
              control={
                <Radio
                  color="secondary"
                  checked={stateR.name === item && stateR.check}
                />
              }
              label={item}
            />
          ))}
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterBySizes;
