import React from 'react'
export default function Rendertablerowdata() {
    // I had splitted the table component and extracted the table row element inside this component.
    return (
        <tr>
            <th scope="col"
                className="common-table-header"></th>
            <th
                scope="col"
                className="common-table-header"
            >
                Name
            </th>
            <th
                scope="col"
                className="common-table-header"
            >
                Title
            </th>
            <th
                scope="col"
                className="common-table-header"
            >
                Status
            </th>
            <th
                scope="col"
                className="common-table-header"
            >
                Role
            </th>
            <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    )
}