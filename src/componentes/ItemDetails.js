/* eslint-disable eqeqeq */
import ItemCount from './ItemCount'
import {NavLink} from 'react-router-dom'
import {useContexto} from './CartContext'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function ItemDetails (props) {
    
    const { cart ,agregarAlCarrito, cantidad_total } = useContexto()
    const Product = props.Producto
    
    
    const onAdd = (setCanProducto) => { 
        if (setCanProducto > 0) {
         agregarAlCarrito(setCanProducto,Product)
        } 
    }

    const sendLocal = (clave, value) =>{
        localStorage.setItem(clave,value)
    }
    
    return (
    <div className="flex-import-details container">
        <div className="fondo-manual-details">
          <div className='active-flex'>
                <div className='text-center'>
                    <img src={Product.image} alt="..." className="image-size-details image-size-details-mobile"/>
                    <p className="text-description-details">{Product.description}</p>
                    </div>
                    <hr/>
                    <h5 className='Product-details-title'>{Product.title}</h5>
                        <p className='price-product'> Precio: {Product.price}$</p>
                    {
                    cantidad_total == 0 ? (
                            <ItemCount stock={5} initial={cantidad_total} onAdd={onAdd}/>
                            ):(
                            <div className='center-count-add'>
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="success" className='center-import'>added {cantidad_total} products to cart</Alert>
                            </Stack>

                            <NavLink to={'/Cart'}>
                                    <button  className="btn-buy-internal efectos" onClick={sendLocal('Cart', JSON.stringify(cart))}>Go to cart</button>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

export default ItemDetails