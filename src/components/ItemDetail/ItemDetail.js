import styles from './ItemDetail.module.css';
import { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, nombre, descripcion, pictureURL, precio, stock}) => {
    
    const [quantityAdded, setQuantityAdded] = useState( 0 )

    const { addItem } = useContext( CartContext );

    const handleOnAdd = (quantity) => {
        
        setQuantityAdded(quantity)
    
        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

    return (
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img className={styles.FotoProducto} src={pictureURL} alt={nombre} />
            </picture >
            <section className={styles.Descripcion}>
                <p>{descripcion}</p>
            </section>
            <section className={styles.Precio}>
                <p className={styles.Info}>
                    Precio: USD {precio}
                </p>
            </section>
            <section className={styles.Stock}>
                <p className={styles.Info}>
                    Stock disponible: {stock} unidades
                </p>
            </section>
            <footer className={styles.ItemFooter}>
               
                {
                    quantityAdded > 0 ? (
                        <Link to={`/cart`} className={styles.Option}>Terminar mi compra</Link>
                    ) : (
                        <ItemCount className={styles.ItemCount} stock={stock} initial={1} onAdd={handleOnAdd} />
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail;