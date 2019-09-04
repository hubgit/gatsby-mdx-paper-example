import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'

export default () => (
  <Layout metadata={{ title: 'Articles' }}>
    <div style={{ padding: 16 }}>
      <h1>Articles</h1>

      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link to={'./my-first-article'}>My First Article</Link>
        </li>
      </ul>
    </div>
  </Layout>
)
