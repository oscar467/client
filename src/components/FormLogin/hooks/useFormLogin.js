import React from "react";
import {useDispatch} from "react-redux";
import Swal from 'sweetalert2'
import {login, logout} from '../../../redux/actions/userActions';
import {useNavigate} from "react-router-dom";
import {set} from "@cloudinary/url-gen/actions/variable";
export const useFormLogin = (form) => {
    const [errors, setErrors] = React.useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {}
        const formData = new FormData(form.current);
        if (!formData.get('email').trim()) errors.email = 'Ingrese un Correo';
        if (!formData.get('password').trim()) errors.pass = 'Debes ingresar una contraseña';
        if (Object.keys(errors).length === 0) {
            const user = {
                email: formData.get('email'),
                password: formData.get('password')
            }
            dispatch(login(user)).then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Inicio de sesion correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            }).catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario no registrado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        }else {
            setErrors(errors)
        }
    }
    return {
        handleSubmit,
        handleLogout,
        errors
    }
}