/* eslint-disable eqeqeq */

import ItemCategoriasContainer from './ItemCategoriasContainer'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import {Link} from 'react-router-dom'

function FilterCategoria (props) {
    const FilterProduct = props.Producto
    
    if(FilterProduct == '') {
        return (
            <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.open} >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <ItemCategoriasContainer/>
            <div className='SinProductos'>
                <p>no hay productos disponibles</p>
            </div></>
        )
    } else {
        
        return (
             <>
             <ItemCategoriasContainer/>
             <div className='row row-cols-xl-4 flex-import'>
                {FilterProduct.map((element) => {
                    return (
                    <div key={element.id} className='No-Link-Items'>
                        <div className="fondo-manual efectos">
                            <div>
                                <img className="image-size-catalogue" src={element.image} alt="..." />
                                <div>
                                    <div className='border-title-price'>
                                        <p className='Product-class-title'>{element.title}</p>
                                        <p className='price-product'> Precio: {element.price}$</p>
                                        <Link to={`/Item/${element.id}`} className="btn-buy-product">
                                            <button type="button" className="btn-buy-internal efectos">Buy</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div></>
        )
    }
}

export default FilterCategoria

