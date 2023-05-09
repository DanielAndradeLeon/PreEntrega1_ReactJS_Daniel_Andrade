import styles from "./CartWidget.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to={`/cart`}>
            <div>
                <FiShoppingCart className={styles.CartIcon} alt='cart-widget' />
                <p>{totalQuantity()}</p>
            </div>
        </Link>
    );
};
export default CartWidget;
