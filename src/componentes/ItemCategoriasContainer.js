
import { useEffect,useState} from 'react';
import Categorias from './ItemCategorias'
import {db} from'./firebase'
import {collection ,getDocs} from 'firebase/firestore'


function ItemCategoriasContainer (){
    
    let [lista,setLista] = useState([])
    
    useEffect(() => {
        
        const collection_categorias = collection(db,'categorias')
        
        getDocs(collection_categorias)
        
        .then((result) => {
            
            const categories = result.docs
            const lista_categorias = categories.map((c) =>{
                
                const data = c.data()
                return data

            })
        setLista(lista_categorias)
    }).catch((err) => {return err})


},[]) 

return <Categorias lista={lista}/>
}

export default ItemCategoriasContainer