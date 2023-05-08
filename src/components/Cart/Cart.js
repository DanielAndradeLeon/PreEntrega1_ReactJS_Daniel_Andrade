import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    
    if(totalQuantity === 0 ) {
        return (
            <div className={styles.Cart}>
                <h2 className={styles.Title}>Tu carrito está vacío</h2>
                <Link to={`/`} className={styles.Option}>Volver al listado de productos</Link>
            </div>
        )
    }

    return (
        <div className={styles.Cart}>
            { cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total:
                {total}
            </h3>
            <button onClick={() => clearCart()} className={styles.Button}>
                Vaciar carrito
            </button>
            <Link to={`/checkout`} className={styles.Option}>
                Checkout
            </Link>
        </div>
    )
}

export default Cart;