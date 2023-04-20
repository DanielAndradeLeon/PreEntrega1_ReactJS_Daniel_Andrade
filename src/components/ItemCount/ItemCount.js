import { useState } from "react";
import Button from "../Button/Button";
import './Button.module.css';

const ItemCount = ({ initial, stock, onAddToCart }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
      if (count > initial) {
        setCount(count - 1);
      }
    };

    const increase = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };

    return (
      <div className='btn'>

          <div className='btn-content'>
            <div className='btn-content-contador'>
                  <Button onTouchButton={decrease} >
                      -
                  </Button>
                  <span className='contador'> {count} </span>
                  <Button onTouchButton={increase} >
                      +
                  </Button>
            </div>
            <div className='btn-content-btn'>
                <Button className='btn-add' 
                onTouchButton={() => onAddToCart(count)}>
                Comprar
                </Button>
            </div>

          </div>

      </div>
    );
};
export default ItemCount;