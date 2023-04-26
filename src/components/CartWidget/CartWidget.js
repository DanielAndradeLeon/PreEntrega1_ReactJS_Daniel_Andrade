import styles from './CartWidget.module.css';
import{FiShoppingCart} from "react-icons/fi"

const CartWidget = () => {
    return (
        <div className={styles.CartWidget}>
            <FiShoppingCart/>
        </div>
    );
} 


export default CartWidget;

    
