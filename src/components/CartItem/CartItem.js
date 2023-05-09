import style from './CartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({ id, nombre, quantity, precio }) => { 
  const { removeItem } = useContext( CartContext ); 
  const total = precio * quantity;

  console.log(quantity);
  
  return (
    <div className={style.cartitem}>
      <div className={style.cartiteminfo}>
        <h3>{nombre}</h3>
        <p>Precio: USD {precio}</p>
        <p>Total: USD {total.toFixed(2)}</p>
      </div>
      <div className={style.itemaction}>
        <button className={style.Button} onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
