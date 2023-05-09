import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';   
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.FooterContentContainer}>
            <div className={styles.FooterContentLogo}>
                <Logo />
            </div>

            <div className={styles.FooterContentNavBar}>
                <Link to='/'>
                    <button className={styles.buttonFooter}>Home</button>
                </Link>
                <Link to='/tienda'>
                    <button className={styles.buttonFooter}>Todo</button>
                </Link>
                <Link to="/category/Corporativa">
                    <button className={styles.buttonFooter}>Corporativa</button>
                </Link>
                <Link to="/category/Ambiental">
                    <button className={styles.buttonFooter}>Ambiental</button>
                </Link>
                <Link to="/category/Turística">
                    <button className={styles.buttonFooter}>Turística</button>
                </Link>
                <Link to="/category/Vial">
                    <button className={styles.buttonFooter}>Vial</button>
                </Link>
                <Link to="/category/Seguridad">
                    <button className={styles.buttonFooter}>Seguridad</button>
                </Link>

            </div>

            <div className={styles.FooterContentInfo}>
                <h4>Redes Sociales</h4>
                <div className={styles.FooterContentInfoRedes}>
                    <Link to=''>
                        <button className={styles.buttonFooter}>< BsInstagram /></button>
                        <button className={styles.buttonFooter}>< BsFacebook /></button>
                        <button className={styles.buttonFooter}>< BsLinkedin /></button>
                        <button className={styles.buttonFooter}>< BsYoutube /></button>
                    </Link>
                </div>
                
            </div>

        </div>
        <div className={styles.FooterContentCopyright}>
            <h6>Copyright © 2023 - Aplicación web desarrollada por 
                 <Link to='/'>
                 <button className={styles.buttonDeveloper}>
                        <strong> Aldan </strong>
                 </button>
                </Link></h6>
        </div>
    </div>
  )
}

export default Footer;