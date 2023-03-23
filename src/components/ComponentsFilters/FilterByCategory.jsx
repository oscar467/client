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
import {filterByCategory} from '../../redux/actions/productsActions';
import {useDispatch, useSelector} from "react-redux";
const FilterByCategory = () => {

    const dispatch = useDispatch();
    const [stateR, setStateR] = React.useState({
        name: '',
        check:false
    });
    const categories = useSelector(state => state.categoriesR.categories);
    React.useEffect(() => {
        dispatch(getAlCategories())
    },[])

    const handleFilterByCategory = (e) => {
         setStateR({
             name: e.target.value,
             check: true
         })
        dispatch(filterByCategory(e.target.value))
    }

    return (
        <Accordion sx={{mb: 2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Categorias</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflowY: "scroll", height: 200 }}>
                <RadioGroup>
                    {categories?.map((category) => (
                        <FormControlLabel
                            value={category.name_category}
                            key={category.id}
                            onChange={handleFilterByCategory}
                            control={<Radio
                                color="secondary"
                                checked={stateR.name ===category.name_category && stateR.check}/>}
                            label={category.name_category}
                        />
                    ))}
                </RadioGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterByCategory;