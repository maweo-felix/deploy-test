import React from 'react'
import Layout from 'components/Layout'

const Index = ({data}) => {

  const titles_mapped = data.allWordpressPost.nodes.map( ({title}) =>
    <h1 key={title}>Blog Post - {title} - new</h1>
  );

  return (
    <Layout>
      { titles_mapped }
    </Layout>
  );
}

export default Index;

export const query = graphql`
query BlogTitleQuery {
  allWordpressPost {
    nodes {
      title
    }
  }
}`
