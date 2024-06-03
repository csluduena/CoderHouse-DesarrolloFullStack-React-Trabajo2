import { CartCheck } from 'react-bootstrap-icons'
import PropTypes from 'prop-types';

export const Carrito = (props) => {

    return (
        <div className="carrito">
            <CartCheck color="white" /> {props.numero}
        </div>
    )
}

Carrito.propTypes = {
    numero: PropTypes.number.isRequired,
};

export default Carrito;