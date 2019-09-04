import {
  BibliographyProvider,
  Article,
  Header,
  Main,
  Body,
  Footer,
} from '@aeaton/react-paper'
import React from 'react'
import { Layout } from '../../components/layout'
import Manuscript from './manuscript.mdx'
import references from './references.bib'
import metadata from './metadata.yml'

export default () => (
  <Layout metadata={metadata}>
    <BibliographyProvider references={references} citationStyle={'nature'}>
      <Article>
        <Header metadata={metadata} />
        <Main>
          <Body>
            <Manuscript />
          </Body>
        </Main>
        <Footer metadata={metadata} />
      </Article>
    </BibliographyProvider>
  </Layout>
)
