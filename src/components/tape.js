import React from "react"
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const getTapeImg = graphql`
  {
   file(relativePath:{eq: "custom-imgs/tape.jpg"}){
      childImageSharp{
        fluid(maxWidth:300) { 
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Tape() {
  return (
    <StaticQuery query={ getTapeImg } render={ data => {
      return (
        <div style={{ maxWidth: '300px'}}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      )
    }} />
  )
}