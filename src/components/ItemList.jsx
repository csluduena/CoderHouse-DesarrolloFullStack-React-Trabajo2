import { Item } from './Item'

export const ItemList = ({ productos }) => {

    return (
        <div className="productos-grilla">
            {
                productos.length > 0 ?
                    productos.map((producto) => (
                        <div key={producto.id}>
                            <Item producto={producto} />
                            <hr className='hrCfg' />
                        </div>
                    ))
                    : <p>Loading...</p>
            }
        </div>
    )
}