import React from 'react'
import uniqueId from "../../utils";
import { rowType } from '../Types';
import { isChecked } from './utils';
import TableBodyCell from "./TableBodyCell";
import { useTableContext } from "./TableContext"
import TableRow from "./TableRow";


const TableBody = () => {
    
    // TABLE CONTEXT
    const { columns, rows, currentSearch, filterByField } = useTableContext();

    // ADD UNIQUE ID
    const dataRows = rows.map(row => ({ id: uniqueId('tr'), ...row }))
    
    // ARRAY OF COLUMN TO DISPLAY 
   
    const columnTodisplay = columns.filter(isChecked).map(({ name }) => name)
    
    // GENERIC FUNCTION TO CONTRUCT A FILTER BY THE FIELD {filterByField}
    const fnFilterByField = (row :rowType) => row[filterByField as keyof typeof row]?.toLowerCase().startsWith(currentSearch.toLowerCase())
    
    return (
        <tbody >
            {dataRows.filter(fnFilterByField).map((row) => (
                <TableRow key={row.id}>
                    {Object.values(columnTodisplay).map(item => (<TableBodyCell key={row.id + '-' + item}>{row[item as keyof typeof row]}</TableBodyCell>)
                    )}
                </TableRow>
            ))}
        </tbody>
    )
}

export default TableBody