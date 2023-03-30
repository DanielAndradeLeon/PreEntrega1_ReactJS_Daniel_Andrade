import NavBar from "./NavBar.js";
import Section from "./Section.js";
import Footer from "./Footer.js";
import styles from "./Contenedor.module.css";

function Contenedor(props) {
    return (
     <div className={styles.contenedorStyle}>
        <NavBar/>
        <Section greeting={'Bienvenidos a Aldan Store'}/>
        <Footer/>
    </div>

    );
}

export default Contenedor;
