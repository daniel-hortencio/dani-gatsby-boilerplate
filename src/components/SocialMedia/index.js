import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebookSquare } from 'react-icons/fa'

import './styles.scss'

export default function SocialMedia(){
    return(
        <div className="social-media">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16}/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={16} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={16}/>
            </a>
        </div>
    )
}