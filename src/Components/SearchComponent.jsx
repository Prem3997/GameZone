import React from 'react'
import SearchIcon from '../Images/SearchIcon'


const SearchComponent = () => {
    return (
        <div className='flex flex-row group'>
            <input type={'text'}
                placeholder="Search Games Here..."
                className="mt-4 pl-12 w-96 h-16 bg-transparent text-xl border-2 border-slate-500 rounded-lg focus-visible:::border-slate-500 text-white group-hover:border-white"
            />
            <SearchIcon />
        </div>
    )
}

export default SearchComponent