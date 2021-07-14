import React from 'react'
import './TableRow.css'
const TableRow = (props)=> {
    return (
        <tr className="TableRow">
            <td className="row">{props.one}</td>
            <td className="row">{props.two}</td>
            <td className="row">{props.three}</td>
            <td className="row">{props.four}</td>
        </tr>
    )
}

export default TableRow
