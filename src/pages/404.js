import React from "react"

import Layout from "../components/Layout"
import demoImg from '../images/404.png'
import SEO from "../components/SEO"
import Section from '../components/Section'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section className="banner-top">
        <img src={demoImg} alt="imagem" style={{width: `50%`}}/>

        <div>
            <h1 style={{fontSize: `5vw`, color: `#009c85`}}>Contact Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Ut enim ad minim veniam, quis <br />
            nostrud exercitation ullamco laboris nisi ut aliquip<br /> 
            ex ea commodo consequat. </p>
        </div>        
    </Section>
  </Layout>
)

export default NotFoundPage
