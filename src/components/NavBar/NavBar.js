import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>

            <Header/>
           
            <h3 className={styles.subtitulo}>Señalética</h3>
        
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
                <NavLink to={`/category/Seguridad`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    Seguridad
                </NavLink>
               
                <CartWidget/>

            </div>
        </nav>
    )
}

export default NavBar