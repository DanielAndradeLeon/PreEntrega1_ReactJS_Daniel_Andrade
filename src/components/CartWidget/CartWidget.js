import styles from './CartWidget.module.css';
import{ FiShoppingCart } from "react-icons/fi";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const  { totalQuantity } = useContext(CartContext)

    return (

        <Link to={`/cart`} className={styles.CartWidget} style={{display: totalQuantity > 0 ? 'block' : ''}}>
        <div className={styles.CartWidget}>
            <FiShoppingCart className={styles.CartIcon}/>
            <p>{totalQuantity}</p>
        </div>
        </Link>
        
    );
} 


export default CartWidget

    
