/* eslint-disable eqeqeq */
import{useState,useEffect } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router-dom'
import { db} from './firebase'
import { getDoc, collection , doc} from 'firebase/firestore'

function ItemDetailsContainer (){
    
    const  { id  } = useParams()
    
    let [Producto,setProducto] = useState([])
    
    useEffect(() => {
        const coleccion_product =collection(db, 'productos')
        const doc_main = doc(coleccion_product, id)
        
        getDoc(doc_main)
        .then((result) => {
            setProducto(result.data())
    }).catch((err) => {return err})
},[id])
return <ItemDetails Producto={Producto} />
}

export default ItemDetailsContainer