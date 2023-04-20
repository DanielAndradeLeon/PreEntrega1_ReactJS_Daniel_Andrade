import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.css';
import { BsInstagram, BsFacebook, BsLinkedin, } from 'react-icons/bs';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content-container'>


            <div className='footer-content-navbar'>
                <Link to='/'>
                    <button className='btn-footer'>Home</button>
                </Link>
                <Link to='/'>
                    <button className='btn-footer'>Señalética</button>
                </Link>
                <Link to="/category/corporativa">
                    <button className='btn-footer'>Corporativa</button>
                </Link>
                <Link to="/category/ambiental">
                    <button className='btn-footer'>Ambiental</button>
                </Link>
                <Link to="/category/turistica">
                    <button className='btn-footer'>Turística</button>
                </Link>
                <Link to="/category/vial">
                    <button className='btn-footer'>Vial</button>
                </Link>
            </div>

            <div className='footer-content-info'>
                <h4>Redes Sociales</h4>
                <div className='footer-content-info-redes'>
                    <Link to=''>
                        <button className='btn-footer'>< BsInstagram /></button>
                        <button className='btn-footer'>< BsFacebook /></button>
                        <button className='btn-footer'>< BsLinkedin /></button>
                    </Link>
                </div>
                
            </div>

        </div>
        <div className='footer-content-copyright'>
            <h6>Copyright © 2023 - Aplicación web desarrollada por  
                 <Link to='/'>
                 <button className='btn-desarrollador'>
                     aldan.ec
                 </button>
                </Link></h6>
        </div>
    </div>
  )
}

export default Footer;