import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const listItems = data.allMarkdownRemark.edges
  const renderItems = listItems.map(item =>
    <li className={blogStyles.post} key={item.node.fields.slug}>
      <Link to={`blog/${item.node.fields.slug}`}>
        <h2>{item.node.frontmatter.title}</h2>
        <p>{item.node.frontmatter.date}</p>
      </Link>
    </li>
  );

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {renderItems}
      </ol>
    </Layout>
  );
}

export default BlogPage;