import React from 'react'
import AuthForm from '../components/form/AuthForm/AuthForm'
import Footer from '../layouts/Footer/Footer'
import AppHead from '../layouts/AppHead'

const SignUp = () => {
  return (
    <div className='sign-in'>
      <AuthForm />
    </div>
  )
}

export default SignUp

SignUp.getLayout = function PageLayout(page) {
  return (
    <>
     <AppHead headTitle={"Sign Up"} description={'Sign up to get all the access to your own Pokemon - Welcome to the wonderful world of pokemon, Your adventure awaits!'} />
     {page}
     <Footer />
    </>
  )
}
