
import { Link} from 'react-router-dom'

const Modal = ({closeModal,isOpen,img,title,Orden,Name}) => {
    
    return(
    
    <article className={`modal-name ${isOpen && "isOpen"}`}>
        <div className='modal-container'>
            <div className="wrapper">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            
            <div className='box-success'>
                
                <h3 className='success-buy'>Gracias por tu compra <span>{Name}</span></h3>
                <p className='success-title'>{title}</p>
                <p className='success-order'>Orden de Compra: <span className='class-id-pending'>{Orden}</span></p>
                <img src={img} alt="" className='image-modal'/>
            </div>
            
            <Link to='/TusPedidos'>
                <button type='button' onClick={closeModal} className="btn-buy-internal efectos">Go to Orders</button>
            </Link>
        </div>
    </article>

)
}

export default Modal