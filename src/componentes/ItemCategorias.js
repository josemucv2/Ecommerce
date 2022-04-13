import {NavLink} from 'react-router-dom'

function Categorias({lista}) {
    
    return (
    <div className="Box-Category">
        {lista.map((list,i) => {
            const a = list.categorias
            
            return (
            <div key={i} className='title-categories-menu'>
                {a.map((category,i) =>{
                    return (
                    <NavLink to={`/Categorias/${category}`} key={i}className='NoLink-Category'>
                        <div className="Box-Category-internal">
                            {category}
                        </div>
                    </NavLink>
                )})}
            </div>
        )})}
    </div>
)
}

export default Categorias

