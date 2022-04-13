import{useState,useEffect } from 'react'
import FilterCategoria from './FilterCategoria'
import {useParams} from 'react-router-dom'
import { getDocs , collection,query ,where} from 'firebase/firestore'
import { db } from './firebase'


const ItemFilterContainer = () => {
    
    const  { category } = useParams()
    
    let [Producto,setProducto] = useState([])
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        setOpen(true)
        const product_cateogory = collection(db, "productos")
        const filter_category = query(product_cateogory,where("category","==",category))
        
        getDocs(filter_category)
        .then(({docs}) =>{
            
            setProducto(docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            setOpen(false)
          }).catch((err)=>{return err})
},[category])
    
    return <FilterCategoria Producto={Producto} open={open}/>}

export default ItemFilterContainer