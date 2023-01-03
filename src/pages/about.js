import React from 'react'
import { PageContainer } from '../components/styled-components/Container/Container.styles'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

const About = () => {
  return (
    <div>
      <h1 className="content">About</h1>
    </div>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      <PageContainer>
      {page}
      </PageContainer>
      <Footer />
    </>
  )
}
