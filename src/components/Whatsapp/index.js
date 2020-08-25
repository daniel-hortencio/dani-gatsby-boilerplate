import React from 'react'

import WhatsappIcon from './Whatsapp-icon'

import './styles.scss'

export default function LinkToWhatsapp(props){
    return(
        <div className="whatsapp-link">
            <WhatsappIcon 
                message={props.message}   
            />    
        </div>
    )
}