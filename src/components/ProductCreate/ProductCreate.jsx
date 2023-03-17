import React from "react";

const ProductCreate = () => {
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
          />
        </div>
        <div>
          <label>Price:</label>
          <input
          type="text"
          name="price"
          placeholder="Price"
          />
        </div>
        <div>
          <label>Description:</label>
          <input
          type="text"
          name="description"
          placeholder="Description"
          />
        </div>
        <div>
          <label>Size:</label>
          <input
          type="text"
          name="size"
          placeholder="Size"
          />
        </div>
        <div>
          <label>image:</label>
          <input
          type="text"
          name="image"
          placeholder="Url of image"
          />
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
