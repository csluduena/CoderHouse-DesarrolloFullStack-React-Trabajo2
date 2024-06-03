import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className="producto">
            <h2 className='productNomCFG'>{producto.nombre}</h2>
            <img className='imgCfg' src={producto.imagen} />
            <p className='priceCFG'>Price ${producto.precio}</p>
            <p className='productDesCFG'>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`} className='moreInfo' > → More Info ←</Link>
        </div>
    )
}