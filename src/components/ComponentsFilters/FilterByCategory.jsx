import React from "react";
import {
  Accordion,
  AccordionDetails,
  RadioGroup,
  AccordionSummary,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getAlCategories } from "../../redux/actions/categoriesActions";
import { filterByCategory } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

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

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const [stateR, setStateR] = React.useState({
    name: "",
    check: false,
  });
  const categories = useSelector((state) => state.categoriesR.categories);
  React.useEffect(() => {
    dispatch(getAlCategories());
  }, [dispatch]);

  const classes = useStyles();

  const handleFilterByCategory = (e) => {
    console.log(e.target.value);
    setStateR({
      name: e.target.value,
      check: true,
    });
    dispatch(filterByCategory(e.target.value));
  };

  return (
    <Accordion className={classes.acordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Categorias</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ overflowY: "scroll", height: 200 }}
        className={classes.acordion}
      >
        <RadioGroup>
          <FormControlLabel
            value="Todas"
            key="Todas"
            onChange={handleFilterByCategory}
            control={
              <Radio
                color="secondary"
                checked={stateR.name == "Todas" && stateR.check}
              />
            }
            label="Todas"
          />
          {categories?.map((category) => (
            <FormControlLabel
              value={category.name_category}
              key={category.id}
              onChange={handleFilterByCategory}
              control={
                <Radio
                  color="secondary"
                  checked={
                    stateR.name === category.name_category && stateR.check
                  }
                />
              }
              label={category.name_category}
            />
          ))}
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterByCategory;
