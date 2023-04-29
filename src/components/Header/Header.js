import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>

            <Link to="https://aldan.ec/">
                <Logo className={styles.Logo}/>
            </Link>

            <Link to='/'>
                <h2 className={styles.titulo}>Aldan Store</h2>
            </Link>

        </header>
    );
}

export default Header;