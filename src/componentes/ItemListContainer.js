/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState} from 'react';
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import { db} from './firebase'
import { getDocs , collection} from 'firebase/firestore'



function ItemListContainer (){
  
  let [lista,setLista] = useState([])
  const [open, setOpen] = useState(false)
  const {nombre} = useParams()
  
  useEffect(() => {
    
    setOpen(true)
    
    const coleccion = collection(db, "productos")
    
    getDocs(coleccion)
    .then((resultado) => {
      
      const docs = resultado.docs
      const list = docs.map((doc) => {
        
        const data =  doc.data()
        const id = doc.id
        
        const product = {
              id : id,
              ...data
             }
             return product
        })
        setLista(list)
        setOpen(false)
  
      })
      .catch((error) =>{
        return error
      })
        
},[nombre]) 
    return <ItemList lista={lista} open={open}/>
}

export default ItemListContainer



          