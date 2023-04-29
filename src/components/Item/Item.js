import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, categoria, descripcion, img, precio, stock}) => {
    return (
        <article className={styles.CardItem}>
            <header className={styles.ItemHeader}>
                <h2 className={styles.ItemHeaderTitle}>
                    {nombre}
                </h2>
                <h4 className={styles.CategoryItemHeader}>
                    {categoria}
                </h4>
            </header>
            <picture>
                <img src={img} alt={nombre} className={styles.ItemImg} />
            </picture>
            <section>
                <p className={styles.ItemInfo}>
                   Precio: {precio}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <Link to={`/item/${id}`} className={styles.buttonDetail}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    )
}

export default Item