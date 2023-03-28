import React from "react";
import {useDispatch} from "react-redux";
import {createProduct} from "../../../redux/actions/productsActions";
import Swal from "sweetalert2";

export const useRegisterProduct = (initialForm, validate, setInputImage) => {

    const dispatch=useDispatch()
    const [form,setForm]= useState(initialForm);
    const [errors,setErrors]= useState({});
    const [image, setImage] = React.useState(null);
    const [talla, setTalla] = React.useState('');
    const [category, setCategory] = React.useState('');
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setInputImage(e.target.files[0].name)
    }
    function handleSubmit(e){
        e.preventDefault()
        setErrors(validate(form))
        if (Object.keys(errors).length === 0 && image !== null) {
            const formData = new FormData();
            formData.append('image', image)
            formData.append('data', JSON.stringify(form));
            dispatch(createProduct(formData))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto creado satisfactoriamente',
                showConfirmButton: false,
                timer: 1500
            })
            setImage(null)
            setForm({
                name_product:"",
                image:"",
                price:"",
                description:"",
                size:[],
                stock:"",
                discount:"",
                CategoryId:""
            })
        }else {
            alert("El producto no se ha creado")
        }
    }
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        setErrors(validate(form))
    }
    function handleChangeTalla(e) {
        setTalla(e.target.value);
        if (form.size.find((t) => t.id === e.target.value)) {
            alert("Already in the list");
        } else {
            setForm({
                ...form,
                size: [
                    ...form.size,
                    e.target.value
                ],
            });
        }
    }
    function handleChangueCategory(e){
        setCategory(e.target.value)
        setForm({
            ...form,
            CategoryId: e.target.value
        });
    }

    return {
        errors,
        talla,
        category,
        image,
        form,
        handleImageChange,
        handleChangueCategory,
        handleChangeTalla,
        handleChange,
        handleSubmit
    }


export const useRegisterProduct = (initialForm, validate) => {

    const dispatch=useDispatch()
    const [form,setForm]= React.useState(initialForm);
    const [errors,setErrors]= React.useState({});
    const [talla, setTalla] = React.useState('');
    const [category, setCategory] = React.useState('');

    function handleSubmit(e){
        e.preventDefault()
        dispatch(createProduct(form))
        alert("you have created a Product")
        // setForm({
        //     name_product:"",
        //     image:"",
        //     price:"",
        //     description:"",
        //     size:[],
        //     stock:"",
        //     discount:"",
        //     CategoryId:""
        // })
    }
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        setErrors(validate(form))
    }
    function handleChangeTalla(e) {
        setTalla(e.target.value);
        if (form.size.find((t) => t.id === e.target.value)) {
            //console.log({ form });
            //alert("Already in the list");
        } else {
            setForm({
                ...form,
                size: [
                    ...form.size,
                    e.target.value

                ],
            });
        }
    }
    function handleChangueCategory(e){
        setCategory(e.target.value)
        setForm({
            ...form,
            CategoryId:
            e.target.value
        });
    }

    return {
        errors,
        talla,
        category,
        form,
        handleChangueCategory,
        handleChangeTalla,
        handleChange,
        handleSubmit
    }
    }