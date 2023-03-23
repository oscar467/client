import React from 'react';
import {Container} from "@mui/material";
import LoginUser from "./LoginUser";

const ContainerLogin = () => {
    return (
        <Container maxWidth="md" sx={{mt: 2 , display: 'flex', justifyContent: 'center'}}>
            <LoginUser />
        </Container>
    );
};
export default ContainerLogin;