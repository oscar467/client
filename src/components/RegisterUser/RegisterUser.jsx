import React from 'react';
import {
    Button,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

import './Form.css';
import {Box} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {useForm} from "./hooks/userForm";
const RegisterUser = () => {

    const form = React.useRef(null)
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {handleSubmit, errors} = useForm(form);

    return (
        <form className="form" ref={form}>
            <Typography sx={{textAlign: 'center'}} variant="h3">Registrarse</Typography>
            <TextField
                error={errors.fullName&& true}
                id="outlined-basic"
                label="Ingrese el nombre"
                variant="outlined"
                color="secondary"
                name="fullName"
                helperText={errors.fullName}
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
                name="email"
                error={errors.email&& true}
                helperText={errors.email || errors.imaIncorrect}
            />
            <FormControl variant="outlined">
                <InputLabel htmlFor="password">contraseña</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    error={errors.pass&& true}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
                <FormHelperText error>{errors.pass}</FormHelperText>
            </FormControl>
            <TextField
                id="outlined-basic"
                label="Telefono"
                variant="outlined"
                color="secondary"
                name="phone"
                error={errors.phone && true}
                helperText={errors.phone}
            />
            <Box>
                <Button onClick={handleSubmit} variant="contained" sx={{width: '100%', mb:3}}>Registrarte</Button>
                <Button variant="contained" sx={{width: '100%'}} endIcon={<GoogleIcon />} >
                   Goolge
                </Button>
            </Box>
        </form>
    );
};

export default RegisterUser;