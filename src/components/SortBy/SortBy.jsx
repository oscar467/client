import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {dataOrder} from './utils/dataOrder';
import {orderByName} from '../../redux/actions/productsActions';
import {useDispatch} from "react-redux";
const SortBy = () => {

    const [valueOrder, setValueOrder] = React.useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValueOrder(e.target.value)
        dispatch(orderByName(e.target.value));
    }
    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="ordenar" color="secondary">
                    Ordenar por{" "}
                </InputLabel>
                <Select
                    sx={{ width: 250 }}
                    color="secondary"
                    labelId="ordenar"
                    value={valueOrder}
                    id="ordenar"
                    label="Ordenar por "
                    onChange={handleChange}
                    variant="standard"
                >
                    <MenuItem value="">
                        <em>Ninguno</em>
                    </MenuItem>
                    {dataOrder.map((item) => (
                        <MenuItem value={item.value} key={item.id}>
                            {item.orderBy}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </React.Fragment>
    );
};

export default SortBy;