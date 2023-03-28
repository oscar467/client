import React from "react";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {getAlCategories} from "../../redux/actions/categoriesActions";
import './ProducCreate.css';
import {useDispatch,useSelector} from "react-redux";
import {
    Button,
    Container,
    FormControl, IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {Box} from "@mui/material";
import {useRegisterProduct} from './hooks/useRegisterProduct';
import {sizes, initialForm} from './utils/data';
import {validate} from './utils/validateForm';

const ProductCreate = () => {
    const dispatch=useDispatch()
    const categories= useSelector((state)=>state.categoriesR.categories);
    const [inpuImg, setInputImg] = React.useState('');

    const {
        errors,
        talla, category,
        handleChangeTalla,
        handleImageChange,
        handleChangueCategory,
        handleSubmit,
        image,
        handleChange, form} = useRegisterProduct(initialForm, validate, setInputImg);

    React.useEffect (()=>{
        dispatch(getAlCategories());
    },[dispatch])

  return (
    <Container maxWidth="lg"
               sx={{
                   display: 'flex',
                   justifyContent: 'flex-end',
                   flexDirection: 'column',
                   width: '50%', mt:3}}
    >
        <Typography variant="h5" sx={{textAlign: 'center'}}>INGRESA UN PRODUCTO</Typography>
        <form onSubmit={handleSubmit}>
            <Box className="form-container">
                <TextField
                    color="secondary"
                    name="name_product"
                    label="nombre del producto"
                    value={form.name_product}
                    error={errors.name_product && true}
                    helperText={errors.name_product}
                    onChange={handleChange}
                />
                <TextField
                    color="secondary"
                    name="price"
                    label="precio"
                    error={errors.price&&true}
                    helperText={errors.price}
                    value={form.price}
                    onChange={handleChange}
                />
                <TextField
                    color="secondary"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    label="Stock"
                    error={errors.stock&&true}
                    helperText={errors.stock}
                />
                <TextField
                    color="secondary"
                    name="discount"
                    value={form.discount}
                    onChange={handleChange}
                    label="Descuento"
                    error={errors.discount&&true}
                    helperText={errors.discount}
                />
                <FormControl >
                    <InputLabel color="secondary" >Categorias</InputLabel>
                    <Select
                        color="secondary"
                        value={category}
                        label="Ingresa una categoria"
                        onChange={handleChangueCategory}
                    >
                        {
                            categories.map(categories => (
                                <MenuItem
                                    key={categories.id}
                                    value={categories.id}
                                >{categories.name_category}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl >
                    <InputLabel color="secondary">Tallas</InputLabel>
                    <Select
                        value={talla}
                        label="Tallas"
                        color="secondary"
                        onChange={handleChangeTalla}
                    >
                        {
                            sizes.map(size => (
                                <MenuItem
                                    key={size}
                                    value={size}
                                >{size}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box className="container-des-img-btn">
                <input
                    accept="image/*"
                    id="file"
                    name="file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
                <label  htmlFor="file">
                    <TextField
                        fullWidth
                        id="image"
                        name="file"
                        variant="outlined"
                        disabled
                        value={inpuImg}
                        InputProps={{
                            endAdornment: (
                                <IconButton color="primary" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            )
                        }}
                    />
                </label>
                <TextField
                    name="description"
                    color="secondary"
                    multiline
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    label="Descripcion"
                    error={errors.description&&true}
                    helperText={errors.description}
                />
            </Box>
            <Button
                disabled={Object.entries(errors).length !== 0}
                sx={{mt: 2, width: '100%'}}
                variant="contained"
                type="submit" >Ingresar Producto
            </Button>
        </form>
    </Container>
  );
};

export default ProductCreate;