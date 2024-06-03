import Navbar from './NavBar';  // Asegúrate de que la importación coincida con la exportación
import PropTypes from 'prop-types';

export const Header = (props) => {
    return (
        <header className="header">
            <Navbar numero={props.numero} />
        </header>
    )
}

Header.propTypes = {
    numero: PropTypes.number.isRequired,  // Define numero como número requerido
};

export default Header;