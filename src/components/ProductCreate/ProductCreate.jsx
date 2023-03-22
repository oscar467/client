import React, { useEffect } from "react";
import { useState} from "react"; 
import {getAlCategories} from "../../redux/actions/categoriesActions";
import {createProduct} from "../../redux/actions/productsActions"
import {useDispatch,useSelector} from "react-redux";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

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
    CategoryId:""

    
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
    CategoryId:""
  });

  function validate ({name_product,image,price,description,stock,freeShopping,discount}){
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
// function handleSelect(e) {
//   if (input.categoryId.find((t) => t.id === e.target.value)) {
//     console.log({ input });
//     alert("Already in the list");
//   } else {
//     setInput({
//       ...input,
//       categoryId: [
//         ...input.categoryId,
//         e.target.value
        
//       ],
//     });
//   }
// }

function handleSelect(e){
  setInput({
          ...input,
          CategoryId: 
            e.target.value
        });

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
    CategoryId:""
       })
      }

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

    
    <div>
        <h1>CREATE NEW PRODUCT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name Product:</label>
          <input
          type="text"
          name="name_product"
          placeholder="Name Product"
          value={input.name_product}
          onChange={handleChange}
          />
          {error.name_product?<p>{error.name_product}</p>:null}
        </div>
        <div>
          <label>Price:</label>
          <input
          type="text"
          name="price"
          placeholder="Price"
          value={input.price}
          onChange={handleChange}
          />
          {error.price?<p>{error.price}</p>:null}
        </div>
        <div>
          <label>Description:</label>
          <input
          type="text"
          name="description"
          placeholder="Description"
          value={input.description}
          onChange={handleChange}
          />
          {error.price?<p>{error.price}</p>:null}
        </div>
        <div>
          <label>Size:</label>
          <select
           onChange={(e) => handleSelect1(e)}
           >
            
              {sizes?.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>

        </div>
        <div>
          <label>image:</label>
          <input
          type="text"
          name="image"
          placeholder="Url of image"
          value={input.image}
          onChange={handleChange}
          />
          {error.image?<p>{error.image}</p>:null}
        </div>
        <div>
          <label>Stock:</label>
          <input
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
          <label>Discount:</label>
          <input
          type="text"
          name="discount"
          placeholder="discount"
          value={input.discount}
          onChange={handleChange}
          />
          {error.discount?<p>{error.discount}</p>:null}
        </div>
        <div>
        <div>
          <label>Category:</label>
          <select
           onChange={(e) => handleSelect(e)}
           >
              {categories?.map((categories) => (
                <option  value={categories.id} key={categories.id}>
                  {categories.name_category}
                 
                </option>
              ))}
            </select>
        </div>
        </div>

        <input
        type="submit"
        value= "Create Product"
        disabled={Object.entries(error).length===0? false:true}
        />
      </form>
    </div>
  );
};

export default ProductCreate;