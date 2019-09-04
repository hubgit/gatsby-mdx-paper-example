import { Cite } from '@aeaton/react-paper'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: ${props => props.theme.font};
  }
`

const components = { cite: Cite }

export const Layout = ({ children, metadata }) => (
  <>
    <Helmet title={metadata.title} />
    <GlobalStyle />
    <MDXProvider components={components}>{children}</MDXProvider>
  </>
)
