import React from "react";
import './CartWidget.module.css';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";


function CartWidget () {
    return (

        <button className="cart-widget">
            <Link to="/cart">

                 < GiShoppingCart className="icon" />

            </Link>
        </button>
    )
}

export default CartWidget;