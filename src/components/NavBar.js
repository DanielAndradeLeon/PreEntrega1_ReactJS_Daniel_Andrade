import logo from '../logo.svg';
import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget/CartWidget";



function NavBar(props) {
    return <div className={styles.nav}>
        <nav>
             <img src={logo} className="App-logo" alt="logo" />
             <h1>Aldan Store</h1>
             <ul>
                 <button>Productos</button>
                 <button>Servicios</button>
                 <button>Desarrollo</button>
            </ul>
            <div className={styles.cartStyle}>
                <CartWidget/>
                <span id='items'>13</span>
            </div>
        </nav>
            
       
    </div>;
}
export default NavBar;