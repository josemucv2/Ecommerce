import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from "./componentes/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './componentes/Cart'
import Home from './componentes/Home';
import AboutUs from './componentes/AboutUs'
import Contact from './componentes/Contact'
import LoginUser from './componentes/LoginUser'
import ItemDetailsContainer from './componentes/ItemDetailsContainer'
import ItemFilterContainer from './componentes/ItemFilterContainer'
import Registro from './componentes/RegistroForm'
import CustomProvider from './componentes/CartContext'
import Pedidos from './componentes/Pedidos'

function App () {
    
    const Url = [{id:1,href:"/Catalogo" , name:"Catalogue"},
    {id:2,href:"/Contacto" , name:"Contact"},
    {id:3,href:"/Informacion" , name:"About us"},
]

return (

<CustomProvider>
    <BrowserRouter>
        <Navbar Url={Url}/>
        
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/Catalogo" element={<ItemListContainer/>}/>
                <Route path="/Informacion" element={<AboutUs/>}/>
                <Route path="/Contacto" element={<Contact/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Login" element={<LoginUser/>}/>
                <Route path={`/Item/:id`} element={<ItemDetailsContainer/>}></Route>
                <Route path={`/Categorias/:category`} element={<ItemFilterContainer/>}></Route>
                <Route path='/Registrate' element={<Registro/>}></Route>
                <Route path='/TusPedidos' element={<Pedidos/>}></Route>
            </Routes>
        </main>
    <Footer/>
    </BrowserRouter>
</CustomProvider>)}

ReactDOM.render(<App/>, document.getElementById("root"))