import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListContainer = ({ greeting }) => {

    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);
    let [titulo, setTitulo] = useState("Productos");

    useEffect(() => {

        const productosRef = collection(db, "productos");

        getDocs(productosRef)
            .then((res) => {
                setProductos(
                    res.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
            });

    }, [categoryId]);


    return (
        <div className="item-list-container">
            <h1 className='greetingCFG'>{greeting}</h1>
            <h2>{titulo}</h2>
            <ItemList productos={productos} />
        </div>
    )
}