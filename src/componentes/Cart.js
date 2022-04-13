/* eslint-disable eqeqeq */
import {useContexto} from './CartContext'
import ItemListContainer from './ItemListContainer'
import { addDoc , collection , serverTimestamp } from 'firebase/firestore'
import { db} from './firebase'
import Modal from './Modal'
import {useState} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Cart () {
    
    const { limpiarCarrito ,borrarDelCarrito ,pendientes,setPendientes } = useContexto()
    const [isOpen, setIsOpen] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [Name, setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [error,setError] = useState('')
    
    
    const close = () => {
        
        limpiarCarrito()
        setIsOpen(false)
        localStorage.removeItem('Cart')
    }
    
    const nombre = (e) =>{
        setName(e.target.value)
     }

    const apellidos = (e) => {
        setLastName(e.target.value)
    }
     
    const correo = (e) =>{
        setEmail(e.target.value)
    }
    
    const FinalizarCompra = () => {
        
        if((Name ||email || lastName) =='') {
            setError('Primero debe llenar el Formulario')
        } else{
            
            const ventasCollection = collection(db,'ventas')
            
            addDoc(ventasCollection, {
                
                buyer:  {
                name: Name,
                lastName : lastName,
                email: email,
                state : 'Pendiente'
            },
            
            items :JSON.parse(localStorage.getItem('Cart')),
            date: serverTimestamp(),
            })
            
            .then((result) =>{
            setOrderId(result.id)
           
            
            return result
    }).catch((err) =>{
               return err
            })
    
    setPendientes(pendientes +1)
    setIsOpen(true)
     
    }}
    
    
    const save =JSON.parse(localStorage.getItem("Cart"))
    
    if (!save) {
        return (
        
        <div className='text-cart'>
            <p>No Se ha Seleccionado, ningun Producto</p>
            <p>Te invitamos a Ver nuestro Catalogo</p>
            <ItemListContainer/>
        </div>
     
    )
    } else {
        
        return (
        
        <div>{save.map((i,index)=> {
            return (
            
            <div key={index} className='center-cart-details'>
                <div className='details-buy-cart'>
                    <img src={i.image} alt="" className='image-size-catalogue'/>
                    <div className='details-text-cart'>
                        <p className='box-cart-details-product'><span className='title-text-cart'>Product:</span> {i.title}</p>
                        <p className='box-cart-details'><span className='title-text-cart'>Price:</span> {i.price}$</p>
                        <p className='box-cart-details'><span className='title-text-cart'>Amount:</span> {i.cantidad}</p>
                        <p className='box-cart-details'><span className='title-text-cart'>Total:</span> {i.total}$</p>
                        <p className='box-cart-details-details'><span className='title-text-cart'>Details:</span> {i.description}</p>
                    </div>
                </div>
                
                <div>
                    <Stack sx={{ width: '100%' }} spacing={2} >
                        <Alert severity="error" className={`close-alert contener ${error && 'open-alert'}`}>{error}</Alert>
                    </Stack>
                </div>
                
                <form className="row g-3">
                    <div className="col-6">
                        <label htmlFor="inputAddress" className="form-label text-form">Nombre</label>
                        <input type="text" className="form-control" id="inputAddress" onChange={nombre}/>
                    </div>
                    
                    <div className="col-6">
                        <label htmlFor="inputAddress2" className="form-label text-form">Apellido</label>
                        <input type="text" className="form-control" id="inputAddress2" onChange={apellidos}/>
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label text-form">Correo Electronico</label>
                        <input type="email" className="form-control" id="inputEmail4" onChange={correo}/>
                    </div>
                </form>
                
                <div className='button-buy-center'>
                    <button onClick={() => borrarDelCarrito(i.id, i.cantidad)} className="btn-buy-internal  btn-buy-internal-position">Delete</button>
                    <button onClick={limpiarCarrito} className="btn-buy-internal btn-buy-internal-position">Delete all</button>
                    <button type="" onClick={FinalizarCompra} className="btn-buy-internal btn-buy-internal-position">Checkout</button>
                    <Modal isOpen={isOpen} closeModal={close} img={i.image} title={i.title} Orden={orderId} Name={Name}/>
                </div>
            </div>
            )})}
        </div>
    )
}}export default Cart

