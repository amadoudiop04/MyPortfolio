import React from 'react'
import './container.css'
import image from '../Ressources/github.png'

const container = () => {
  return (
    <div className='myself'>
      <section className='myself-container' >
        <div className='card-profile-img'>
        </div>
      <div className='presentation'>
    <p className='text-1'> hello, I'm </p>
    <p className='text-2'> Amadou Diop </p>
    <p className='text-3'> Junior Developer </p>
    <a href="https://drive.google.com/file/d/1USN3CFYilztrn1nzQYlVBQaPqVZTljC4/view?usp=drive_link"> <button className='btn-1'>Download CV</button></a>
    <div>
      <a href="https://github.com/amadoudiop04"><img className='logo' src={image} alt="logo" /></a>
    </div>
      </div>
      </section>
    </div>
  )
}

export default container
