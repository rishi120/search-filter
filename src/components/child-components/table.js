import React from 'react'
import Rendertablerowdata from "./table-row";
import { people } from "../../data/table-data";
import Searchinputs from "./inputs";

export default function Rendertable({ tableData, searchString, counter, handleInputChange, inputChecked }) {
    console.log(inputChecked);
    const findArrayLength = people;
    // this is the main component which is handling the entire table ui. 
    return (
        <div className='px-8 py-8'>
            <Searchinputs />
            <div className='pb-5'>
                <p>{counter} / {findArrayLength.length}<span className='pl-3'>{counter > 1 ? "Rows" : "Row"} Selected</span></p>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg lg:h-96">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100 sticky top-0">
                                    <Rendertablerowdata />
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {searchString ? (
                                        tableData.length == '' ? <tr><td colSpan="7" className='text-center py-5 font-sans font-semibold text-red-500'> Uh oh! No Data Found</td></tr> : (
                                            tableData.map((person) => (
                                                <tr key={person.email}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-semibold text-blue-600">{person.name}</div>
                                                                <div className="text-sm text-gray-500">{person.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{person.title}</div>
                                                        <div className="text-sm text-gray-500">{person.department}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        )
                                    ) : (people.map((person) => (
                                        <tr key={person.id}>
                                            <td className='w-10 flex justify-center'>
                                                <input type="checkbox" className='mt-8' defaultChecked={inputChecked} onChange={() => handleInputChange(person.id)} />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap pl-0">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-semibold text-blue-600">{person.name}</div>
                                                        <div className="text-sm text-gray-500">{person.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{person.title}</div>
                                                <div className="text-sm text-gray-500">{person.department}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
