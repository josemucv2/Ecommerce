/* eslint-disable react-hooks/exhaustive-deps */
import {db} from './firebase'
import {collection, getDocs} from 'firebase/firestore'
import { useEffect,useState} from 'react'
import PedidosRender from './PedidosRender'
import {useContexto} from './CartContext'

const Pedidos = () => {
    
    const {setPendientes} = useContexto()
    const [pedidos,setPedidos] = useState([])
    
    useEffect(() =>{
        
        const pendientes = collection(db, 'ventas')
        getDocs(pendientes)
        
        .then((results) => {
           const tu_pedido = results.docs
           const pedir  = (tu_pedido).map((doc) =>{
               const datos = doc.data()
               datos.id_pedido = doc.id
               return datos
        })
        setPedidos(pedir)
        setPendientes(pedir.length)
       }).catch((err) => {return err})

    },[])
    
    return <PedidosRender Pedidos={pedidos}/>

}
    

export default Pedidos