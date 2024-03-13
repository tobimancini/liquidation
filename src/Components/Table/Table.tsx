import React, { FC } from "react";
import '../../Styles/Reutilized.css'

interface TableProps {
    headers: string[]
}

const Table: FC<TableProps> = ({ headers }) => {
    return(
        <table className="table marginYBox">
            <thead>
                {
                    headers.map((header, index)=> {
                        return <th key={header+index}>{header}</th>
                    })
                }
            </thead>
            <tbody>
                <tr>
                    {headers.map((header, index)=> {
                        return <td key={header+index}>{header}</td>
                    })}
                </tr>
                <tr>
                    {headers.map((header, index)=> {
                        return <td key={header+index}>{header}</td>
                    })}
                </tr>
                <tr>
                    {headers.map((header, index)=> {
                        return <td key={header+index}>{header}</td>
                    })}
                </tr>
                <tr>
                    {headers.map((header, index)=> {
                        return <td key={header+index}>{header}</td>
                    })}
                </tr>
            </tbody>
        </table>
    )
}

export default Table;