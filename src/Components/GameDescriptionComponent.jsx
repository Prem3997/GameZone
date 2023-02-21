import React from 'react'
import RatingComponent from './RatingComponent'

const GameDescriptionComponent = () => {
    return (
        <>
            <div className='flex flex-row mt-5 bg-blue-900 pl-5 pb-5 rounded-lg'>
                <main className='flex flex-col gap-3'>
                    <h1 className='text-white font-bold text-9xl -ml-10'>Valorant</h1>
                    <p className='text-sm text-gray-300 text-justify'>
                        Valorant is a team-based first-person hero shooter set in the near future.Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.  Every player starts each round with a "classic" pistol and one or more "signature ability" charges.
                    </p>
                    <footer className='flex flex-row justify-start gap-10 items-center'>
                        <button className='text-white rounded-lg w-3/12 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all hover:scale-110'>Play For Free</button>
                        <p className='flex flex-row justify-center items-end gap-1'>
                            <span className='text-white text-3xl'>17K</span>
                            <span className='text-sm text-gray-300'>Reviews</span>
                        </p>
                    </footer>
                </main>
                <img className='h-96 -mt-20 -ml-5' src='Images/Valorant.png' alt='game_image' />
                <div className='-mt-32 mr-8 relative'>
                    <RatingComponent rating="8.9" />
                </div>
            </div >
        </>
    )
}

export default GameDescriptionComponent