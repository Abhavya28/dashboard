import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white flex items-center justify-between p-5'>
      <div className='text-darkgreytone text-xs' >
        <p className='font-semibold'>COPYRIGHT © 2026</p>
      </div>
      <div className='flex gap-6 text-primary font-semibold text-xs '>
        <p className='hover:text-hoverblue'>HELP</p>
        <p className='hover:text-hoverblue'>TERMS</p>
        <p className='hover:text-hoverblue'>PRIVACY</p>
      </div>
    </div>
  )
}

export default Footer
