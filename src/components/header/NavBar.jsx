import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import categories from "../../data/categorias.json";
import Carrito from './Carrito';

const Navbar = ({ numero }) => {
    return (
        <nav style={{ display: 'flex', fontSize: '30px', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333333', color: 'white' }}>
            <div className='mainTitleCFG'>
                <NavLink to="/" style={{ textDecoration: 'none', fontSize: '30px', fontFamily: 'MuseoSans-900' }}>GuitarStore</NavLink>
            </div>
            <div style={{ backgroundColor: '#333333', display: 'flex', alignItems: 'center' }}>
                {categories.map((categoria) => (
                    <NavLink key={categoria.id} to={`/category/${categoria.id}`} className="navRoutes" style={{ fontSize: '30px', margin: '0 10px', color: 'white', textDecoration: 'none' }}>
                        {categoria.nombre}
                    </NavLink >
                ))}

            </div>
            <Carrito numero={numero} />
        </nav>
    );
};

Navbar.propTypes = {
    numero: PropTypes.number.isRequired,
};

export default Navbar;
