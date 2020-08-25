import React from 'react'

import Logo from '../Logo'
import SiteMap from '../SiteMap'

import './styles.scss'

export default function Header(props){
    return(
        <footer className={props.className} id={props.id}>
            <div className="container footer-sitemap">
                <Logo />
                <SiteMap />
            </div>
            <div className="container copyrith-info">
                <hr />
                <p style={{color: `#fff`, padding: `10px 0`}}>Copyright © 2020 - Dani React Boilerplate</p>
            </div>
        </footer>
    )
}
