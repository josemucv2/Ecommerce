
import {Link} from 'react-router-dom'
import ItemCategoriasContainer from './ItemCategoriasContainer'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const ItemList = ({lista,open}) =>{
    
    return(
    <div>
        <ItemCategoriasContainer/>
        
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>

        <div className="row row-cols-xl-4 flex-import">
            {lista.map((element,index)=>{
                return (
                    <div className='No-Link-Items' key={index}>
                        <div className="fondo-manual">
                                <img className="image-size-catalogue" src={element.image} alt="..." />
                                <div>
                                    <div className='border-title-price'>
                                        <p className='Product-class-title'>{element.title}</p>
                                        <p className='price-product'>Precio:<span> {element.price}</span>$</p>
                                    </div>
                                    <Link to={`/Item/${element.id}`} className="btn-buy-product">
                                       <button type="button" className="btn-buy-internal efectos">Buy</button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

     

export default ItemList