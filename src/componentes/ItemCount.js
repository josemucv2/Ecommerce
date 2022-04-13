/* eslint-disable eqeqeq */
import {useState} from 'react'
import {useContexto} from './CartContext'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ItemCount ({stock,onAdd}) { 
    
    const {cantidad_total} = useContexto()
    
    let [CanProducto,setCanProducto] = useState(cantidad_total)
    const [msj,setMsj] = useState('')
    
    const sumar = () =>{
        setCanProducto(CanProducto + 1)

        
    }
    
    const restar = () =>{
        
        if (CanProducto > 0){
            setCanProducto(CanProducto - 1)
        } else if(CanProducto ==0) {
          setMsj('You have not selected any product')
        }
    }
    
    if(CanProducto > stock){
        
        setCanProducto(stock)
        setMsj('Quantity of products not available')
    }
    
    const onAdd1 = (cantidad,producto) => {
        onAdd(cantidad,producto)
        setCanProducto(0)

        
        
        if (CanProducto ==0) {
            setMsj('Select the quantity you want to order')
        }
    }
    
    return (
    <>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="counts-buttons-details">
            <button className="button-Count-minor" onClick={restar}>-</button>
            <p>{CanProducto}</p>
            <button className="button-Count-major" onClick={sumar}>+</button>
        </div>
        <div className="box-bottom">
        <hr/>
        <button className="btn-buy-internal efectos" onClick={() => onAdd1(CanProducto)}>Add to Cart</button>
            <Stack sx={{ width: '100%' }} spacing={2} className='center-error'>
                <Alert severity="error" className={`close-alert ${msj && 'open-alert'}`}>{msj}</Alert>
            </Stack>
        </div>
    </div>
    </>
    )
}

export default ItemCount
