import {createUser} from '../../../redux/actions/userActions';
import React from "react";
import Swal from 'sweetalert2'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


export const useForm = (form) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [errors, setErrors] = React.useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {}
        const formData = new FormData(form.current);
        if (!formData.get('fullName').trim()) errors.fullName = "Ingrese el nombre completo";
        if (!formData.get('email').trim()) errors.email = "Ingrese el correo electronico";
        if (!formData.get('password').trim()) errors.pass = "Ingrese una contraseña";
        if (!formData.get('phone').trim()) errors.phone = "Ingrese un telefono";
        if (Object.keys(errors).length === 0){
            const user = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                password: formData.get('password'),
                cellPhone: formData.get('phone'),
            }
            dispatch(createUser(user)).then(() => {
                navigate('/login')
            }).catch(() => {
                Swal.fire(
                    'ERROR',
                    "Ingresaste mal los datos",
                    'error'
                )
            })
        }else {
            setErrors(errors)
        }
    }

    return {
        handleSubmit,
        errors
    }
}