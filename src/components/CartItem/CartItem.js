import styles from './CartItem.module.css';
import { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartItem = ({id, nombre, img, precio}) => {
    
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
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p className={styles.Info}>
                    Precio: {precio}
                </p>
            </section>

            {/* <footer className={styles.ItemFooter}>
               
                {
                    quantityAdded > 0 ? (
                        <Link to={`/cart`} className={styles.buttonDetail}>Terminar mi compra</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                    )
                }
                
            </footer> */}
        </article>
    )
}

export default CartItem;