import styles from './CartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({ id, nombre, pictureURL, quantity, precio }) => { 
  const { removeItem } = useContext( CartContext ); 
  const total = precio * quantity;

  console.log(quantity);
  
  return (
    <div className={styles.CartItem}>
      <div className={styles.CartItemInfo}>
        <h3>{nombre}</h3>
        <div className={styles.CartItemDetail}>
          <picture className={styles.FotosMiniaturas}>
                <img src={pictureURL} alt={nombre} className={styles.ItemImgMini} />
          </picture>
          <p>Cantidad: {quantity}</p>
          <p>Precio unitario: USD {precio}</p>
          <p>Total: USD {total.toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.ItemAction}>
        <button className={styles.Button} onClick={() => removeItem(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
