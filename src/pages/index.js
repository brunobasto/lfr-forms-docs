import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TableOfContents from "../components/tableOfContents"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Table of Contents" />

      {/* <TableOfContents chapters={edges} /> */}

      {edges.map(({node: {id, html, frontmatter: {title}}}) => (
        <div className="chapter" key={id}>
          <h1 style={{fontSize: '50px'}}>{title}</h1>
          <div
            className="chapter-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      ))}
    </Layout>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          headings {
            depth
            value
          }
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`
