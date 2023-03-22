import React, { useEffect } from "react";
import { useState} from "react"; 
import {getAlCategories} from "../../redux/actions/categoriesActions";
import {createProduct} from "../../redux/actions/productsActions"
import {useDispatch,useSelector} from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const onlyNumber= /^\d+$/;
const isUrl= /^https?:.+.(jpg|jpeg|png|webp|avif|gif|svg)$/;
const inputEmpty= /^\s+$/;

const ProductCreate = () => {

  const sizes=["S", "M", "L", "XL"]

  const dispatch=useDispatch()
  const categories= useSelector((state)=>state.categoriesR.categories)

   useEffect (()=>{
    dispatch(getAlCategories());
  },[dispatch])

   const [input,setInput]= useState({

    name_product:"",
    image:"",
    price:"",
    description:"",
    size:[],
    stock:"",
    // freeShopping:"",
    discount:"",
    categories:[]

    
  });
  

  const [error,setError]= useState({

    name_product:"",
    image:"",
    price:"",
    description:"",
    size:[],
    stock:"",
    // freeShopping:"",
    discount:"",
    categories:[]
  });

  function validate ({name_product,image,price,description,stock,discount}){
    let errors={}
   
    if(!name_product){
        errors.name_product = "enter a name"
    }  else if(inputEmpty.test(name_product)){ 
        errors.name_product= "the input is empty"
    }
    if(!description){
      errors.description = "enter a description"
    }  else if(inputEmpty.test(description)){ 
      errors.description= "the input is empty"
     }
  //  if(!freeShopping){
  //   errors.freeShopping = "enter a freeShopping"
  //   }  else if(inputEmpty.test(freeShopping)){ 
  //   errors.freeShopping= "the input is empty"
  //   }

    if(!price){
      errors.price= "enter a price"
  }
   else if(inputEmpty.test(price)){
      errors.price="the input is empty"
  }else if(!onlyNumber.test(price)){
      errors.price="you must enter a number"
  }
  if(!stock){
    errors.stock= "enter a stock"
}
 else if(inputEmpty.test(stock)){
    errors.stock="the input is empty"
}else if(!onlyNumber.test(stock)){
    errors.stock="you must enter a number"
}

if(!discount){
  errors.discount= "enter a discount"
}
else if(inputEmpty.test(discount)){
  errors.discount="the input is empty"
}else if(!onlyNumber.test(discount)){
  errors.discount="you must enter a number"
}
   
  
    if(!image){
        errors.image= "enter a Url"
    }
     else if(inputEmpty.test(image)){
        errors.image="the input is empty"
    }else if(!isUrl.test(image)){
        errors.image="you must enter a Url"
    }
    
    return errors;


}

function handleSelect1(e) {
  if (input.size.find((t) => t.id === e.target.value)) {
    console.log({ input });
    alert("Already in the list");
  } else {
    setInput({
      ...input,
      size: [
        ...input.size,
        e.target.value
        
      ],
    });
  }
} 
function handleSelect(e) {
  if (input.categories.find((t) => t.id === e.target.value)) {
    console.log({ input });
    alert("Already in the list");
  } else {
    setInput({
      ...input,
      categories: [
        ...input.categories,
        e.target.value
        
      ],
    });
  }
}

function handleSubmit(e){
  e.preventDefault()
  dispatch(createProduct(input))
  console.log(input)
  alert("you have created a Product")
  setInput({
    name_product:"",
    image:"",
    price:"",
    description:"",
    size:[],
    stock:"",
    // freeShopping:"",
    discount:"",
    categoryId:"",
       })}

  function handleChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    setError(validate({
        ...input,
        [e.target.name]: e.target.value,
      }))
    }
  return (

    <Box 
    component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
    
        <h1>CREATE NEW PRODUCT</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <TextField
          required
          id="name_product"
          label="Name Product:"
          type="text"
          name="name_product"
          placeholder="Name Product"
          value={input.name_product}
          onChange={handleChange}
        />
          
          {error.name_product?<p>{error.name_product}</p>:null}
        </div>
        <div>
        <TextField
          required
          id="price"
          label="Price"
          type="text"
          name="price"
          placeholder="Price"
          value={input.price}
          onChange={handleChange}
        />
          {error.price?<p>{error.price}</p>:null}
        </div>
        <div>
        <TextField
          required
          id="description"
          label="Description"
          type="text"
          name="description"
          placeholder="Description"
          value={input.description}
          onChange={handleChange}
        />
          {error.price?<p>{error.price}</p>:null}
        </div>
        <div>
        <TextField
          select
          label="Size"
           onChange={(e) => handleSelect1(e)}
           >
              { 
              sizes?.map((size) => (<MenuItem value={size} key={size}>{size}</MenuItem> 
              ))} 
            
            </TextField>
        </div>
        <div>
        <TextField
          required
          id="image"
          label="image"
          type="text"
          name="image"
          placeholder="Url of image"
          value={input.image}
          onChange={handleChange}
        />
          {error.image?<p>{error.image}</p>:null}
        </div>
        <div>
        <TextField
          required
          id="stock"
          label="Stock"
          type="text"
          name="stock"
          placeholder="stock"
          value={input.stock}
          onChange={handleChange}
        />
          {error.stock?<p>{error.stock}</p>:null}
        </div>
        {/* <div>
          <label>FreeShopping::</label>
          <input
          type="text"
          name="freeShopping"
          placeholder="freeShopping"
          value={input.freeShopping}
          onChange={handleChange}
          />
          {error.freeShopping?<p>{error.freeShopping}</p>:null}
        </div> */}
        <div>
        <TextField 
          required
          id="discount"
          label="Discount"
          type="text"
          name="discount"
          placeholder="discount"
          value={input.discount}
          onChange={handleChange}
        />
          
          {error.discount?<p>{error.discount}</p>:null}
        </div>
        <div>
        <div><TextField
          select
          label="Category"
          onChange={(e) => handleSelect(e)}
           >
              {categories?.map((categories) => (
                <MenuItem  value={categories.name_category} key={categories.name_category}>
                  {categories.name_category}
                 
                </MenuItem>
              ))} 
            </TextField>
        </div>
        </div>

        <Button
        variant="submit"
        type="submit"
        value= "Create Product"
        disabled={Object.entries(error).length===0? false:true}
        > Create Product
        </Button>

        {/* <input
         type="submit"
         value= "Create Product"
         disabled={Object.entries(error).length===0? false:true}
        /> */}
      </form>
    
    </Box>
    
  );
};

export default ProductCreate;
