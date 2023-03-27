import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createProduct} from "../../../redux/actions/productsActions";
const onlyNumber= /^\d+$/;
const isUrl= /^https?:.+.(jpg|jpeg|png|webp|avif|gif|svg)$/;
const inputEmpty= /^\s+$/;

export const useRegisterProduct = (initialForm, validate) => {

    const dispatch=useDispatch()
    const [form,setForm]= useState(initialForm);
    const [errors,setErrors]= useState({});
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