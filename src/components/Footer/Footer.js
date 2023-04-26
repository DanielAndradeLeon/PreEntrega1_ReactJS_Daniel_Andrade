import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className={styles.footer}>

        <div className={styles.footer__content_container}>
            
            <div className={styles.footer__content_logo}>
                <Logo />
            </div>

            <div className={styles.footer__content_navbar}>
                
                <Link to='/'>
                    <button className={styles.btn_footer}>Home</button>
                </Link>

                <Link to='/tienda'>
                    <button className={styles.btn_footer}>Todos los productos</button>
                </Link>

                <Link to="/category/corporativa">
                    <button className={styles.btn_footer}>Señalética corporativa</button>
                </Link>

                <Link to="/category/ambiental">
                    <button className={styles.btn_footer}>Señalética ambiental</button>
                </Link>

                <Link to="/category/turistica">
                    <button className={styles.btn_footer}>Señalética turísica</button>
                </Link>

                <Link to="/category/vial">
                    <button className={styles.btn_footer}>Señalética vial</button>
                </Link>

            </div>

            <div className={styles.footer__content_info}>

                <h4>Redes Sociales</h4>

                <div className={styles.footer__content_info_redes}>
                    <Link to=''>
                        <button className={styles.btn_footer}>< BsInstagram /></button>
                        <button className={styles.btn_footer}>< BsFacebook /></button>
                        <button className={styles.btn_footer}>< BsLinkedin /></button>
                    </Link>
                </div>
              
            </div>

        </div>
        <div className={styles.footer__content_copyright}>
            <h6>Copyright © 2023 - Aplicación web desarrollada por 
            <Link to='/'>
                  <button className={styles.btn_desarrollador}>
                     aldan.ec
                  </button>
            </Link></h6>
        </div>

    </div>
  )
}

export default Footer;