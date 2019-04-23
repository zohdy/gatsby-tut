import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
        {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
  `
export default function info() {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const siteInfo = data.site.siteMetadata;
        const { title, description, author } = siteInfo;
        return (
          <div>
            <h2>title: { title }</h2>
            <p>description: { description }</p>
            <h2>author: { author }</h2>
          </div>
        )
    }}
    />
  )
}