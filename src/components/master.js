import React, { createContext, useState, useRef, useEffect } from 'react'
import Rendertable from "./child-components/table";
import { people } from "../data/table-data";

const Data = createContext();

export default function Mastercomponent() {
    // the master component where all the logic will be written.
    const [tableData, setTableData] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [counter, setCounter] = useState(0);
    const [inputChecked, setInputChecked] = useState(false);
    const searchInput = useRef();


    const handleInput = (nameandtitle) => {
        setSearchString(nameandtitle);
        const searchTerm = nameandtitle.toLowerCase();
        const result = [];
        people.filter((filteredData) => {
            if (filteredData.name.toString().toLowerCase().includes(searchTerm) || filteredData.title.toString().toLowerCase().includes(searchTerm) || filteredData.role.toString().toLowerCase().includes(searchTerm)) {
                return result.push(filteredData);
            }
        })
        setTableData(result);
    }

    const handleInputChange = (id) => {
        setInputChecked(id);
        setCounter(counter + 1);
    }

    const values = {
        handleInput,
        searchInput
    }

    useEffect(() => {
        setTimeout(() => {
            searchInput.current.focus();
        }, 100);
    }, [])


    return (
        <div>
            <h1 className='text-2xl p-4 px-8 pb-2 font-sans font-semibold text-slate-900'>Search and Filter</h1>
            <hr className='ml-[35px] w-[95%]' />
            <Data.Provider value={values}>
                <Rendertable tableData={tableData} searchString={searchString} counter={counter} handleInputChange={handleInputChange} inputChecked={inputChecked} />
            </Data.Provider>
        </div>
    )
}

export { Data }