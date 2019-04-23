import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from '../components/Button';
import { FaApple } from 'react-icons/fa';
import Info from "../components/info"
import Tape from '../components/tape';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to='/products'>
      <h1>Products Page</h1>
    </Link>
    <Tape />
    <Info />
    <Link to="/images">images</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
    </div>
    <FaApple className="icon"/>
    <Button>I am a styled component</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing">Go to testing</Link>
  </Layout>
)

export default IndexPage
