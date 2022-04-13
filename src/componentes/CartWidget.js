
import {NavLink} from 'react-router-dom'
import {useContexto} from './CartContext'

function CartWidget (){
    
    const {cantidad_total} = useContexto()
    
    const amount = JSON.parse(localStorage.getItem('Cart'))
    
    if (!amount) {
        return (

            <form className="d-flex">
            <NavLink to='/Cart'>
            <button className="Style-cars" type="submit">
                <i className="bi-cart-fill me-1"></i><span className="badge bg-dark text-white ms-1 rounded-pill">{cantidad_total}</span>
            </button>
            </NavLink>
        </form>
        )
    } else {

        return (
        <form className="d-flex">
            <NavLink to='/Cart'>
            <button className="Style-cars" type="submit">
                <i className="bi-cart-fill me-1"></i><span className="badge bg-dark text-white ms-1 rounded-pill">{amount.map((element) => element.cantidad)}</span>
            </button>
            </NavLink>
        </form>
        )


    }
}


export default CartWidget




