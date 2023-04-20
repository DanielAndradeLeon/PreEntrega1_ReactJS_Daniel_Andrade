import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css';
import { BsXLg } from 'react-icons/bs';
import { VscListSelection } from 'react-icons/vsc';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {

    const navRef = useRef();
    const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
    }  
  return (
    <div className='header'>
        <div className='header-content-container'>

            <div className='header-content-logo'>
                <Link to="/">
                    <Logo />
                </Link>
            </div>

            <div className='header-content-menu'>

                    <nav ref={ navRef }>
                        <Link to="/">
                            <button onClick={ showNavBar }>Home</button>
                        </Link>
                        <Link to="/">
                            <button onClick={ showNavBar }>Señalética</button>
                        </Link>
                        <Link to="/category/corporativa">
                            <button onClick={ showNavBar }>Corporativa</button>
                        </Link>
                        <Link to="/category/ambiental">
                            <button onClick={ showNavBar }>Ambiental</button>
                        </Link>
                        <Link to="/category/turistica">
                            <button onClick={ showNavBar }>Turística</button>
                        </Link>
                        <Link to="/category/vial">
                            <button onClick={ showNavBar }>Vial</button>
                        </Link>
                        <Link onClick={ showNavBar } to='/cart'>
                            <CartWidget />
                        </Link>

                        <button 
                            className='nav-btn nav-close-btn' 
                            onClick={ showNavBar }>
                            <BsXLg />
                        </button>
                    </nav>
                    
                    <div className='cart'>
                        <button 
                            className='nav-btn' 
                            onClick={ showNavBar }>
                            <VscListSelection />
                        </button>

                        
                    </div>  
                    
                </div>
        </div>
    </div>
  )
}

export default NavBar;
            
    