import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useDispatch} from "react-redux";
import {filterBySize} from '../../redux/actions/productsActions';
const items = ['Todos','S', 'M', 'L', 'XL']
const FilterBySizes = () => {
    const dispatch = useDispatch();
    const [stateR, setStateR] = React.useState({
        name: '',
        check:false
    });
    const handleFilterBySizes = (e) => {
        setStateR({
            name: e.target.value,
            check: true
        })
        dispatch(filterBySize(e.target.value))
    }
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Tallas</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ height: 220 }}>
                <RadioGroup>
                    {items.map((item) => (
                        <FormControlLabel
                            value={item}
                            key={item}
                            onChange={handleFilterBySizes}
                            control={<Radio
                                color="secondary"
                                checked={stateR.name ===item && stateR.check}/>}
                            label={item}
                        />
                    ))}
                </RadioGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterBySizes;