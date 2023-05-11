import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';   
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube, BsWhatsapp } from 'react-icons/bs';

function Footer() {
    return (
        <div>
            <section className={styles.Redes}>
                <ul className={styles.iconList}>

                    <li className={styles.iconItem}>
                        <Link to='https://www.instagram.com/aldan.industries/' className={styles.iconLink}><BsInstagram /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='https://www.facebook.com/aldan.com.ec/' className={styles.iconLink}><BsFacebook /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='https://www.youtube.com/aldanindustries' className={styles.iconLink}><BsYoutube /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='https://www.linkedin.com/company/aldan-industries/' className={styles.iconLink}><BsLinkedin /></Link>
                    </li>

                    <li className={styles.iconItem}>
                        <Link to='https://api.whatsapp.com/send?phone=593997878480' className={styles.iconLink}><BsWhatsapp /></Link>
                    </li>

                </ul>
            </section>
        
            <div className={styles.FooterContentCopyright}>
                <p>Copyright © 2023 - Aplicación web desarrollada por 
                    <Link to='/'>
                        <button className={styles.buttonDeveloper}>
                            <strong> Daniel Andrade León </strong>
                        </button>
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default Footer;