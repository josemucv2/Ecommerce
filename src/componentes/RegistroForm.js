import { addDoc , collection , serverTimestamp } from 'firebase/firestore'
import { db} from './firebase'
import {useState} from 'react'



function RegistroForm () {
   const [nombre,setNombre] = useState('')
      const[apellidos,setApellidos] = useState('')
      const[correo,setCorreo] = useState('')
      const[contra,setContra] = useState('')
      const[msj,setMsj] = useState('')
  


  
  
   

     
      
      const name = (e) => setNombre(e.target.value)
      const lastname = (e) => setApellidos(e.target.value)
      const email = (e) => setCorreo(e.target.value)
      const password = (e) => setContra(e.target.value)
      
      const Registro = () =>{
      
          if((nombre || apellidos || correo || contra) === ''){
            setMsj('Campo Vacios')
   
          }  else{
            

            const userCollection = collection(db,'Usuarios')
                    
            addDoc(userCollection,{
              name : nombre,
              lastName: apellidos,
              Correo: correo,
              clave: contra,
              Registro : serverTimestamp()
            })

            .then((result) =>{
            console.log(result)

           
            })
            .catch((error)=>{
              console.log(error)
            })

            setMsj('Usuario registrado con exito')

          }
           
 }

  

  return (
       <>
       <div className="row g-3 ">
         
         <div className="col-6">
           <label htmlFor="inputAddress" className="form-label text-form">Nombre</label>
           <input type="text" className="form-control" id="inputAddress" onChange={name} />
          </div>
          
          <div className="col-6">
            <label htmlFor="inputAddress2" className="form-label text-form">Apellido</label>
            <input type="text" className="form-control" id="inputAddress2" onChange={lastname} />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label text-form">Correo Electronico</label>
            <input type="email" className="form-control" id="inputEmail4" onChange={email} />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label text-form">Contraseña</label>
            <input type="password" className="form-control" id="inputPassword4" onChange={password}/>
          </div>
         

          <div>
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label text-form" htmlFor="exampleCheck1">Acepto todos los Terminos y condiciones</label>
            
          
        </div>
        </div>
         <div className="col-12">
            <button type='' className="btn btn-primary" onClick={Registro}>Registrarte</button>
            <div className="text-red">{msj}</div>
          </div>
          

        
       </>
    )
}

export default RegistroForm