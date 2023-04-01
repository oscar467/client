import { Typography, Grid, Button } from "@mui/material";
import {useForm, FormProvider} from "react-hook-form";
import AddressInput from "./AddressInput";
import { Link } from "react-router-dom";

const AddressForm =() => {
    const methods = useForm();
    return(
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data =>{
                    
                }

                    )}>
                    <Grid container spacing={3}>
                        <AddressInput
                        required 
                        name='firstName'
                        label='First name'
                        /> 
                        <AddressInput
                        required 
                        name='lastName'
                        label='Last name'
                        />
                        <AddressInput
                        required 
                        name='address'
                        label='Address'
                        />
                        <AddressInput
                        required 
                        name='email'
                        label='Email address'
                        />
                        <AddressInput
                        required 
                        name='city'
                        label='City'
                        />
                        <AddressInput
                        required 
                        name='postCode'
                        label='Post code'
                        />  

                    </Grid>
                        <div style={{display: 'flex', justifyContent:'space-between', marginTop:'1rem'}}>
                            <Button component= {Link} to ="/checkout-page">Back to checkout page</Button>
                            <Button type="submit" variant="contained" color="primary">Next</Button>
                        </div>

                </form>
            </FormProvider>
        </>
    )
}
export default AddressForm;