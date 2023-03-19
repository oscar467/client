import React from "react";
import { useState } from "react";


const onlyNumber= /^\d+$/;
const isUrl= /^https?:.+.(jpg|jpeg|png|webp|avif|gif|svg)$/;
const inputEmpty= /^\s+$/;

const ProductCreate = () => {

   const [input,setInput]= useState({

    name_product:"",
    image:"",
    price:"",
    description:"",
    size:[],
    stock:"",
    freeShopping:"",
    discount:"",
    Category:[]
  });

  const [error,setError]= useState({

    name_product:"",
    image:"",
    price:"",
    description:"",
    size:[],
    stock:"",
    freeShopping:"",
    discount:"",
    Category:[]
  });

  function validate ({name_product,image,price,description,stock,freeShopping,discount}){
    let errors={}
    // validate name
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
   if(!freeShopping){
    errors.freeShopping = "enter a freeShopping"
    }  else if(inputEmpty.test(freeShopping)){ 
    errors.freeShopping= "the input is empty"
    }

    if(!price){
      errors.maxHeight= "enter a price"
  }
   else if(inputEmpty.test(price)){
      errors.price="the input is empty"
  }else if(!onlyNumber.test(price)){
      errors.price="you must enter a number"
  }
  if(!stock){
    errors.maxHeight= "enter a stock"
}
 else if(inputEmpty.test(stock)){
    errors.stock="the input is empty"
}else if(!onlyNumber.test(stock)){
    errors.stock="you must enter a number"
}

if(!discount){
  errors.maxHeight= "enter a discount"
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
      <form>
        <div>
          <label>Name Product:</label>
          <input
          type= "text"
          name="name_Product"
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
          <select>
         
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
          name="stoke"
          placeholder="stoke"
          value={input.stock}
          onChange={handleChange}
          />
          {error.stock?<p>{error.stock}</p>:null}
        </div>
        <div>
          <label>FreeShopping::</label>
          <input
          type="text"
          name="freeShopping"
          placeholder="freeShopping"
          value={input.freeShopping}
          onChange={handleChange}
          />
          {error.freeShopping?<p>{error.freeShopping}</p>:null}
        </div>
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
          <label>Category:</label>
          <select>
          
          </select>
        </div>

        <input
        type="submit"
        value= "Create Product"
        />
      </form>
    </div>
  );
};

export default ProductCreate;
