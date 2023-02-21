import React from 'react'
import CalendarIcon from '../Images/CalendarIcon'
import CartIcon from '../Images/CartIcon'
import ParkIcon from '../Images/ParkIcon'
import FriendListComponent from './FriendListComponent'
import ProfileComponent from './ProfileComponent'
import ProgressBar from './ProgressBar'

const SideBar = () => {
    return (
        <div className='flex flex-col w-1/3'>
            <div className='flex flex-row gap-4 m-4 justify-end'>
                <CartIcon />
                <ParkIcon />
                <CalendarIcon />
            </div>
            <div className='mt-5 ml-16'>
                <ProfileComponent />
            </div>
            <FriendListComponent />
            <ProgressBar />
        </div>
    )
}

export default SideBar