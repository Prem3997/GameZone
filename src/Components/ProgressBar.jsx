import React from 'react'

const ProgressBar = () => {
  return (
    <div className='border-y-2 border-gray-500 mt-5 flex flex-row gap-4 items-center'>
      <div className='w-16 h-3 bg-cyan-300 my-7 border-black'></div>
      <div className='w-16 h-3 bg-red-600 my-7 border-black'></div>
      <div className='w-16 h-3 bg-green-900 my-7 border-black'></div>
      <div className='w-16 h-3 bg-yellow-300 my-7 border-black'></div>
      <img  className='w-7 h-7' src='/Images/trophy.png' alt="trophy"></img>
    </div>
  )
}

export default ProgressBar