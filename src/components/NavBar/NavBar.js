import styles from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Link to='/'>
            <h2 className={styles.titulo}>Aldan Store</h2>
            </Link>
            <div className={styles.subtitulo}>
            <h3>Señalética</h3>
            </div>
            <div className={styles.Categories}>
                <NavLink to={`/category/Corporativa`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Corporativa
                </NavLink>
                <NavLink to={`/category/Ambiental`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Ambiental
                </NavLink>
                <NavLink to={`/category/Turística`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Turística
                </NavLink>
                <NavLink to={`/category/Vial`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Vial
                </NavLink>
               
                <CartWidget/>

            </div>
        </nav>
    )
}

export default NavBar