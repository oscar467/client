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
const items = ['Todos','S', 'M', 'L', 'XL']
const FilterBySizes = () => {
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
                            control={<Radio color="secondary" />}
                            label={item}
                        />
                    ))}
                </RadioGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterBySizes;