import React from 'react'

import './styles.scss'

export default function Section(props){
    return(
        <section {...props}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}