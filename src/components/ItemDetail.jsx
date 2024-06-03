// import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className="producto">
            <h2 className='productNomCFG'>{producto.nombre}</h2>
            <img className='imgCfg' src={producto.imagen} />
            <p className='priceCFG'>Price ${producto.precio}</p>
            <p className='productDesCFG'>{producto.descripcion}</p>
            <button className='botonBuy'>¡Buy Now!</button>
            {/* <Link to={`/`} className='moreInfo' >Home</Link> */}
        </div>
    )
}