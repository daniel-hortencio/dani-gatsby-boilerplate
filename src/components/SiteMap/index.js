import React from 'react'
import { Link } from 'gatsby'
import { GiPositionMarker, FaPhoneAlt, MdEmail } from 'react-icons/all'

import SocialMedia from '../../components/SocialMedia'

import './styles.scss'

export default function SiteMap(){
    return(
        <>
            <ul className="site-map-list">
                <li className="li-header">Pages</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <ul className="site-map-list">
                <li className="li-header">Contact</li>
                <li><GiPositionMarker /> Adress</li>
                <li><FaPhoneAlt /> Phone</li>
                <li><MdEmail /> Email</li>
            </ul>

            <ul className="site-map-list">
                <li className="li-header">Follow</li>
                <li><SocialMedia /></li>
            </ul>
        </>
    )
}