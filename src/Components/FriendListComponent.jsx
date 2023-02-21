import React from 'react'
import AddUserIcon from '../Images/AddUserIcon'
import TextContactIcon from '../Images/TextContactIcon'
import UsersIcon from '../Images/UsersIcon'

const FriendListComponent = () => {
    const friendList = [{
        img: "people1.jpg",
        name: "Jess",
        status: "Online"
    },
    {
        img: "people2.jpg",
        name: "Shey",
        status: "Online"
    },
    {
        img: "people3.jpg",
        name: "Anu",
        status: "Offline"
    },
    {
        img: "people4.jpg",
        name: "Rake",
        status: "online"
    }]
    return (
        <div className='flex flex-col mt-5'>
            <div className='flex flex-row items-center justify-evenly border-t border-gray-500 py-1'>
                <UsersIcon />
                <p className='text-gray-300'>Friends List</p>
                <AddUserIcon />
            </div>
            <div className='flex flex-col mt-1'>
                <div className='flex flex-col gap-5'>
                    {
                        (friendList.length > 0 && (
                            friendList.map(friend => <div className='flex flex-row items-center justify-evenly'>
                                <img className='border border-gray-500 w-12 h-12 rounded-full' loading='lazy' src={`/Images/${friend.img}`} alt={friend.name}/>
                                <p className='text-white text-sm'>{friend.name}</p>
                                <TextContactIcon />
                                {
                                    friend.status.toLowerCase() === "online" ?
                                        <p className='text-white text-xs bg-green-700 p-1 rounded-md cursor-default'>Online</p>
                                        : <p className='text-white text-xs bg-red-700 p-1 rounded-md cursor-default'>Offline</p>
                                }
                            </div>)
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FriendListComponent