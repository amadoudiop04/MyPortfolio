import React from 'react'
import './container.css'

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
    <button className='btn-1'>Download CV</button>
    <button className='btn-2'>Contact</button>
      </div>
      </section>
    </div>
  )
}

export default container
