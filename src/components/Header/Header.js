import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.Header}>

            <Link to="https://aldan.ec/">
                <Logo className={styles.Logo}/>
            </Link>

           
            <h2 className={styles.titulo}>
                Aldan Store
            </h2>
          

            <Link to='/'>
                <h3 className={styles.subtitulo}>
                    Señalética
                </h3>
            </Link>

        </header>
    );
}

export default Header;