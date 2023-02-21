import React from 'react'

const CardComponent = () => {
    const cardArr = [{
        name: "Watchdogs",
        src: "Watchdogs.jpg",

    }, {
        name: "GTA V",
        src: "gta5.jpg"
    }, {
        name: "Last Of Us",
        src: "Lastofus.jpg"
    }, {
        name: "PUBG",
        src: "pubg.jpg"
    },
]
    return (
        <div className='flex flex-row gap-4 mt-5'>
            {cardArr.length > 0 && cardArr.map(card => (
                <div> 
                    <img src={`Images/${card.src}`} className='w-60 h-40 border-none rounded-lg transition-all cursor-pointer hover:scale-110' alt={`${card.name}`} />
                </div>
            ))
            }
        </div>
    )
}

export default CardComponent