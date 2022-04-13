/* eslint-disable eqeqeq */

import FloatingWhatsApp from 'react-floating-whatsapp'

const PedidosRender = ({Pedidos}) => {
    
    return (
    
    <div className='flex-seccion-pedidos'>{Pedidos.map((c,i) => {
        let [h,state,id] = [c.items,c.buyer.state,c.id_pedido]
        
        return (
        
        <div key={i} className="class-temporal class-pending-style">
            {h.map((item,i) =>{
                
                return (
                <div key={i}>
                    <img src={item.image} alt='...' className='img-seccion-order'/><hr/>
                    <p><span className="title-pending">Producto:</span> {item.title}</p>
                    <p><span className="title-pending">Cantidad:</span> {item.cantidad}</p>
                    <p><span className="title-pending">Total a Pagar:</span> {item.total}$</p>
                    <FloatingWhatsApp
                    phoneNumber={+584140328317} 
                    accountName='640Bkg' 
                    statusMessage='Disponible'
                    chatMessage='Nos Encanta Tenerte aca! Envianos el ID De Compra, para Finalizar'
                    />
                </div>
                )
            })}
            
            <p><span className="title-pending-id-text">ID de Compra:</span><span className="class-id-pending"> {id}</span></p><hr/>
            <div className='center-status'>
                <p className={state === 'Pendiente' ? 'class-status-pending' : 'class-status-success'}>{state}</p>
           </div>
        </div>
    )})}
</div>

)}

export default PedidosRender 