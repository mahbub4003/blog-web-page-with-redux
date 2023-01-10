import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchImage from '../assets/search.svg'
import { search_by_input } from '../redux/actionTypes';

const Search = () => {
    const [search, setSearch] = useState('')
    const dispach = useDispatch()
    const timeout = setTimeout(()=>{
        return dispach(search_by_input(search))
    },1000)
    const onchangeHandler= (e)=>{
        setSearch(e.target.value)
        timeout()
      
        
    }
    return (
        <div>
             <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                onChange={onchangeHandler}
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                value={search}
                name={search}
                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src={searchImage}
                alt="Search"
            />
        </div>
        </div>
    );
}

export default Search;
