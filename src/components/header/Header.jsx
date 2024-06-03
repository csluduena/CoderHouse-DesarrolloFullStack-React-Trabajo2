import Navbar from './NavBar';
import PropTypes from 'prop-types';

export const Header = (props) => {
    return (
        <header className="header">
            <Navbar numero={props.numero} />
        </header>
    )
}

Header.propTypes = {
    numero: PropTypes.number.isRequired,
};

export default Header;