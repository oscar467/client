import React from 'react';
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {Box} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useFormLogin} from './hooks/useFormLogin';
import './FormLogin.css';

const LoginUser = () => {

    const form = React.useRef(null);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const {handleSubmit} = useFormLogin(form)

    return (
        <form className="form-login" ref={form}>
            <Typography sx={{textAlign: 'center'}} variant="h4">Inicia Sesion</Typography>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
                name="email"
            />
            <FormControl variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    sx={{width: '100%'}}
                    name="password"
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
            </FormControl>
            <Box>
                <Button onClick={handleSubmit} variant="contained" sx={{width: '100%', mb:3}}>Iniciar sesion</Button>
                <Button variant="contained" sx={{width: '100%'}} endIcon={<GoogleIcon />} >
                    Goolge
                </Button>
            </Box>
        </form>
    );
};

export default LoginUser;