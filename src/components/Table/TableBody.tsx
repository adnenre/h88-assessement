import React from 'react'
import uniqueId from "../../utils";
import { columnType } from '../Types';
import TableBodyCell from "./TableBodyCell";
import { useTableContext } from "./TableContext"
import TableRow from "./TableRowCell";


const TableBody = () => {
    
    // TABLE CONTEXT
    const { columns, rows, currentSearch, filterByField } = useTableContext();

    // ADD UNIQUE ID
    const dataRows = rows.map(row => ({ id: uniqueId('tr'), ...row }))
    
     
    // ARRAY OF COLUMN TO DISPLAY 
    const isChecked = (col :columnType) => col.checked;
    const columnTodisplay = columns.filter(isChecked).map(({ name }) => name)
    return (
        <tbody >
            {dataRows.filter((row) => row[filterByField as keyof typeof row].startsWith(currentSearch)).map((row) => (
                <TableRow key={row.id}>
                    {Object.values(columnTodisplay).map(item => (<TableBodyCell key={row.id + '-' + item}>{row[item as keyof typeof row]}</TableBodyCell>)
                    )}
                </TableRow>
            ))}
        </tbody>
    )
}

export default TableBody