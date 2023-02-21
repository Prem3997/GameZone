import React from 'react'

const ProfileComponent = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='border rounded-lg w-20 p-1'>
                <img className='w-16 h-16' src='Images/HelpCharacter.png' alt="name" />
            </div>
            <p className='text-white font-bold text-xl'>Prem</p>
        </div>
    )
}

export default ProfileComponent