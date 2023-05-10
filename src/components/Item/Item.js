import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, pictureURL, precio}) => {
    return (
        <article className={styles.CardItem}>
            
            <header className={styles.ItemHeader}>
                <h2 className={styles.ItemHeaderTitle}>
                    {nombre}
                </h2>
            </header>
  
            <picture className={styles.FotosProductos}>
                <img src={pictureURL} alt={nombre} className={styles.ItemImg} />
            </picture>
  
            <section>
                <p className={styles.ItemInfo}>
                   Precio: USD {precio}
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