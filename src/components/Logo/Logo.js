import styles from './Logo.module.css';
import logotipo from '../../logo.svg'
const Logo = () => {
    return (
        <div className={styles.Logo}>
            <img src={logotipo} alt="logo" />
        </div>
    )
}

export default Logo