const onlyNumber= /^\d+$/;
const isUrl= /^https?:.+.(jpg|jpeg|png|webp|avif|gif|svg)$/;
const inputEmpty= /^\s+$/;
export function validate (form){
    let errors={}
    if(!form.name_product){
        errors.name_product = "debes ingresar un nombre"
    }  else if(inputEmpty.test(form.name_product)){
        errors.name_product= "the input is empty"
    }
    if(!form.description){
        errors.description = "debes ingresar una descripcion del producto"
    }  else if(inputEmpty.test(form.description)){
        errors.description= "the input is empty"
    }
    if(!form.price){
        errors.price= "edebes ingresar un precio"
    }
    else if(inputEmpty.test(form.price)){
        errors.price="the input is empty"
    }else if(!onlyNumber.test(form.price)){
        errors.price="you must enter a number"
    }
    // if(!form.stock){
    //     errors.stock= "Debes ingresar un numero"
    // }
    // else if(inputEmpty.test(form.stock)){
    //     errors.stock="the input is empty"
    // }
    // else if(!onlyNumber.test(form.stock)){
    //     errors.stock="tienes que ingresar un numero"
    // }

    if(!form.discount){
        errors.discount= "Ingresa un descuento"
    }
    else if(inputEmpty.test(form.discount)){
        errors.discount="the input is empty"
    }else if(!onlyNumber.test(form.discount)){
        errors.discount="you must enter a number"
    }
    if(!form.image){
        errors.image= "la imagen debe ser una URL"
    }
    else if(inputEmpty.test(form.image)){
        errors.image="the input is empty"
    }else if(!isUrl.test(form.image)){
        errors.image="you must enter a Url"
    }
    return errors;
}