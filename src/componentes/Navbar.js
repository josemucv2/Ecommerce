import CartWidget from './CartWidget'

import {NavLink, Link} from 'react-router-dom'

import {useContexto} from './CartContext'

function Navbar (props) {
    
    const { pendientes } = useContexto()
    
    return (
       <header>
           <nav className="navbar navbar-expand-lg navbar-light bordeManual">
               <div className="container px-4 px-lg-5">
                   
                   <Link to="/" className="style-title">640bkg</Link>
                   
                   <button className="navbar-toggler" 
                   type="button" data-bs-toggle="collapse" 
                   data-bs-target="#navbarSupportedContent" 
                   aria-controls="navbarSupportedContent" 
                   aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 position-list">
                            <li className="nav-item">
                                {props.Url.map((element)=> {
                                   return <NavLink key={element.id} to={element.href} className="style-list-nav">{element.name}</NavLink>
                                       
                                })}
                            </li>
                        </ul>
                    </div>
                    
                    <div className="icons-css">
                        
                        <a href='https://instagram.com' className="icons-css-instagram"><i className="bi bi-instagram"></i></a>
                        <i></i>
                        <a href='https://twitter.com' className="icons-css-twitter"><i className="bi bi-twitter"></i></a>
                    </div>

                    <CartWidget/>

                    <Link to='/TusPedidos'>
                        <button className="Style-cars" type="submit">Orders<span className="badge bg-dark text-white ms-1 rounded-pill">{pendientes}</span></button>
                    </Link>

                    <Link to='/Login'>
                        <button className="Style-login" type="submit">Log In</button>
                    </Link>
                    
                    <Link to='/Registrate'>
                        <button className="Style-cars" type="submit">Sign up</button>
                    </Link>
            
                </div>
            </nav>
        </header>
        )
    }
    
export default Navbar



