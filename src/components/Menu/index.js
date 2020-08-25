import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiMenu } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'

import './styles.scss'

export default function Menu(props){
    const [ menuState, setMenuState ] = useState('menu-close')

    function handleMenu(){
        if( menuState === 'menu-close' ){
            setMenuState('menu-open')
        }else{
            setMenuState('menu-close')
        }
    }    

    return(
        <>
            <nav className={`menu-nav ${menuState}`}>
                <ul>
                    <li onClick={()=>setMenuState('menu-close')}>
                        <Link exact to="/" activeClassName="actived-link">Home</Link>
                    </li>
                    <li onClick={()=>setMenuState('menu-close')}>
                        <Link to="/about" activeClassName="actived-link">About</Link>
                    </li>
                    <li onClick={()=>setMenuState('menu-close')}>
                        <Link to="/contact" activeClassName="actived-link">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="menu-mobile-icon" onClick={handleMenu}>
                { menuState === 'menu-close' ? <FiMenu /> : <RiCloseLine />}
            </div>
        </>
    )
}
