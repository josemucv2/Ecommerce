
import { createContext , useContext, useState } from 'react';
export const contexto = createContext()
export const { Provider } = contexto
export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
    
    const [cantidad_total,setCantidad_total] = useState(0)
    const [cart,setCart] = useState([])
    const [pendientes,setPendientes] = useState(0)
   
    
    const agregarAlCarrito = (cantidad,producto) => {
        const id = producto.id
        
        if(isInCarrito(id)) {
            
            const copy_cart = [...cart]
            let match = copy_cart.find((p) => p.id === id)
            match.cantidad = match.cantidad + cantidad
            setCart(copy_cart)

        } else {
            
            const addProduct_product = {
                ...producto,
                cantidad
            }
            
            const Precio_total = producto.price * cantidad
            addProduct_product.cantidad = cantidad
            addProduct_product.total = Precio_total
            setCart([...cart,addProduct_product])
        }
        setCantidad_total(cantidad_total + cantidad)
        
        
    }
    
    const borrarDelCarrito = (id,producto_cantidad) => {

        let Product_filter = cart.filter(e => (e.id) !== id)
        setCart(Product_filter)
        setCantidad_total(cantidad_total - producto_cantidad)
        localStorage.removeItem('Cart')
    }
    
    const limpiarCarrito = () => {
        setCart([])
        setCantidad_total(0)
        localStorage.removeItem('Cart')
    }
    const isInCarrito = (id) => {
        return cart.some(c => c.id === id)
    }
    
    const valorDelContexto = {
        pendientes,
        cantidad_total,
        cart,
        limpiarCarrito,
        setCart,
        isInCarrito,
        agregarAlCarrito,
        borrarDelCarrito,
        setPendientes,
        
}
    
    return (
        <Provider value={valorDelContexto}>{children}</Provider>
    )
}

export default CustomProvider

