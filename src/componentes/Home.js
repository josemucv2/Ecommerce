
import ItemCategoriasContainer from "./ItemCategoriasContainer"
import { db } from './firebase'
import { getDocs , collection} from 'firebase/firestore'
import { useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { Link} from 'react-router-dom'

function Home () {
    
  let [lista,setLista] = useState([])



  
  const {nombre} = useParams()
  
  useEffect(() => {
    
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
      console.log(list)
  
      })
      .catch((error) =>{
         console.log(error)
      })
        
},[nombre]) 
   const img = lista.map((img) => {
     return img.image
   })
    
    return (
    <>
    <ItemCategoriasContainer/>

    <div id="carouselExampleCaptions" className="carousel slide container margin-carousel margin-carousel" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            
          </div>
       
        <div className="carousel-inner">
          <div className="carousel-item active modify-center">
            <img src={img[2]} className="d-block w-100 image-slider" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Compra YA!</h5>
              <Link to={`/Catalogo`} className="btn-buy-product ">
                  <button type="button" className="btn-buy-internal efectos">Buy</button>
              </Link>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src={img[0]} className="d-block w-100 image-slider" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Compra YA!</h5>
              <Link to={`/Catalogo`} className="btn-buy-product">
                  <button type="button" className="btn-buy-internal efectos">Buy</button>
              </Link>
              
            </div>
          </div>
          
          <div className="carousel-item">
            <img src={img[1]} className="d-block w-100 image-slider" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Compra YA!</h5>
              <Link to={`/Catalogo`} className="btn-buy-product">
                  <button type="button" className="btn-buy-internal efectos">Buy</button>
              </Link>
           </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>

    
    </>
    )
}

export default Home