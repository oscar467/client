import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { clamp } from "./clamp";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function IndDec (){

    const clampV = clamp(1,10)
    const [value, setValue] = useState(1);

    return(
        <Box display='flex'>
            <IconButton 
                sx={{
                    borderRadius:0,
                    background:"black",
                }}
            onClick={() =>setValue(clampV(value - 1))}>
                <RemoveIcon sx={{color:'white'}}/>
            </IconButton>
            <Typography 
                variant="h6" 
                sx={{
                    border: '1px solid black', p:'8px',
                }} >
                {value}
            </Typography>
            <IconButton 
                sx={{
                    borderRadius:0,
                    background: "black",
                }}
            onClick={() =>setValue(clampV(value + 1))}>
                <AddIcon sx={{color:'white'}}/>
            </IconButton>
        </Box>

    )
}