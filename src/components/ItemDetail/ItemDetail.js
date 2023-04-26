import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, nombre, categoria, descripcion, img, precio, stock}) => {
    return (
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {nombre}
                </h2>
                <h4 className={styles.CategoryHeader}>
                    {categoria}
                </h4>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>{descripcion}</p>
            </section>
            <section>
                <p className={styles.Info}>
                    Precio: {precio}
                </p>
            </section>
            <section>
                <p className={styles.Info}>
                    Stock disponible: {stock} unidades
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada' ,quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail
