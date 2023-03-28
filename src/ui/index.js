import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { clamp } from "./clamp";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function IndDec (){

    const clampV = clamp(1,10)
    const [value, setValue] = useState(1);

    return(
        <Box display='flex' sx={{width: '400px',}}>
            <Button 
                sx={{
                    background:"black",
                    display:'flex',
                    height:'50px',
                }}
            onClick={() =>setValue(clampV(value - 1))}>
                <RemoveIcon sx={{color:'white'}}/>
            </Button>
            <Typography 
                variant="h6" 
                sx={{
                    p:'10px',
                    margin: '4px',
                }} >
                {value}
            </Typography>
            <Button 
                sx={{
                    background: "black",
                    display:'flex',
                    height:'50px',
                }}
            onClick={() =>setValue(clampV(value + 1))}>
                <AddIcon sx={{color:'white'}}/>
            </Button>
        </Box>

    )
}