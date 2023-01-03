import React from 'react'
import AuthForm from '../components/form/AuthForm/AuthForm'
import Footer from '../layouts/Footer/Footer'
import AppHead from '../layouts/AppHead'


// * This is for handleing the user submission 
// * Grabs the email and password form the AuthForm component.
// * this function is passed down to the authforms onSubmit call.
const submitUser = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  alert(`So your email is ${email} and your password is ${password}`);
  
}


// * The elements rendered in between the Layout weather that be The AppLayout or the individual page layout.
const SignUp = () => {
  return (
    <div className='sign-in'>
      <AuthForm submitUser={submitUser} />
    </div>
  )
}

export default SignUp


// * Layout Made Especially for the sign in page.
SignUp.getLayout = function PageLayout(page) {
  return (
    <>
     <AppHead headTitle={"Sign Up"} description={'Sign up to get all the access to your own Pokemon - Welcome to the wonderful world of pokemon, Your adventure awaits!'} />
     {page}
     <Footer />
    </>
  )
}
