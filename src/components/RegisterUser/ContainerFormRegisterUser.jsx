import React from 'react';
import {Container} from "@mui/material";
import RegisterUser from "./RegisterUser";

const ContainerFormRegisterUser = () => {
    return (
        <Container maxWidth="md" sx={{mt: 2 , display: 'flex', justifyContent: 'center'}}>
            <RegisterUser />
        </Container>
    );
};

export default ContainerFormRegisterUser;