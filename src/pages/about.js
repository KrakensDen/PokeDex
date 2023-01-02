import React from 'react'
import Footer from '../layouts/Footer/Footer'

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
      {page}
      <Footer />
    </>
  )
}
