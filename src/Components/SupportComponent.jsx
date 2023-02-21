import React, { useState } from 'react'

const SupportComponent = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        !!show && (
          <div className='absolute'>
            <p className='text-white font-medium text-s ml-24 mt-8'>How Can I Help You ?</p>
          </div>
        )
      }
      <img
        src="/Images/HelpCharacter.png"
        alt='supporticon'
        className='h-48 ml-4 hover:cursor-pointer'
        onMouseEnter={() => { setShow(true) }}
        onMouseLeave={() => { setShow(false) }}
      />
    </>
  )
}

export default SupportComponent