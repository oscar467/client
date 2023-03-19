import React from 'react';
import {
    Accordion,
    AccordionDetails,
    RadioGroup,
    AccordionSummary,
    FormControlLabel,
    Radio,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {getAlCategories} from '../../redux/actions/categoriesActions';
import {useDispatch, useSelector} from "react-redux";
const FilterByCategory = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesR.categories);
    React.useEffect(() => {
        dispatch(getAlCategories())
    },[])
    return (
        <Accordion sx={{mb: 2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Categorias</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
                <RadioGroup>
                    <FormControlLabel
                        value="Todos"
                        control={<Radio color="secondary" />}
                        label="Todos"
                    />
                    {categories?.map((category) => (
                        <FormControlLabel
                            value={category.name_category}
                            key={category.id}
                            control={<Radio color="secondary" />}
                            label={category.name_category}
                        />
                    ))}
                </RadioGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterByCategory;