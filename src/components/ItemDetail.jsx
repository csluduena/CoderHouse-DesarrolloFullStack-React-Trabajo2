import { useState } from 'react';
import '../../src/index.css';

export const Item = ({ producto }) => {
    const [messages, setMessages] = useState([]);

    const handleBuyNow = () => {
        const newMessage = { id: Date.now(), text: 'Product added, check your cart' };
        setMessages([...messages, newMessage]);

        setTimeout(() => {
            setMessages(prevMessages => prevMessages.filter(msg => msg.id !== newMessage.id));
        }, 3000);
    };

    return (
        <div className="producto">
            <h2 className='productNomCFG'>{producto.nombre}</h2>
            <img className='imgCfg' src={producto.imagen} alt={producto.nombre} />
            <p className='priceCFG'>Price ${producto.precio}</p>
            <p className='productDesCFG'>{producto.descripcion}</p>
            <button className='botonBuy' onClick={handleBuyNow}>¡Buy Now!</button>
            <div className="popup-container">
                {messages.map((message, index) => (
                    <div key={message.id} className="popup" style={{ bottom: `${20 + index * 60}px` }}>
                        {message.text}
                    </div>
                ))}
            </div>
        </div>
    );
};