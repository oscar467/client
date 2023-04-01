import { Paper, Stepper,Step, StepLabel,Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const Checkout = () =>{
    const classes = useStyles();
    const [activeStep, setActivestep] = useState(0);
    const steps = ['Shipping address', 'Payment details'];

    const nextStep = ()=> setActivestep((prevActivestep) => prevActivestep +1);
    const backStep = ()=> setActivestep((prevActivestep) => prevActivestep -1);

    const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm/>

    return(
        <>
        <main className={classes.layout}>
            <Paper className= {classes.paper}>
                <Typography component = 'h1' variant ='h4' align ='center'>
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} className={classes.Stepper}>
                    {steps.map(step => (
                        <Step key ={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Form/>
            </Paper>
                       
        </main>
        </>
    )
}

export default Checkout;