import React,{useContext} from 'react'
import {Data} from "../master"

function Searchinputs() {
    const {handleInput, searchInput} = useContext(Data);
    // input search components
    return (
        <>
            <div>
                <input type="text" placeholder="Search by Name or Title" className='border-2 lg:w-80 rounded-lg p-2 mb-7 shadow-xl z-10 border-blue-600 placeholder:text-sm placeholder:text-slate-400 placeholder:tracking-wide' onChange={(e) => handleInput(e.target.value)} ref={searchInput} />
            </div>
        </>
    )
}

export default Searchinputs