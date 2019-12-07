import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const listItems = data.allMarkdownRemark.edges
  const renderItems = listItems.map(item =>
    <li key={item.node.frontmatter.title}>
      <h2>{item.node.frontmatter.title}</h2>
      <p>{item.node.frontmatter.date}</p>
    </li>
  );

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{renderItems}</ol>
    </Layout>
  );
}

export default BlogPage;